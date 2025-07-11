package com.email.writer.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.email.writer.controller.EmailRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmailGeneratorService {

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private WebClient webClient;

    public EmailGeneratorService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public String generateEmailReply(EmailRequest emailRequest) {

        // Build prompt
        String prompt = buildPrompt(emailRequest);

        // craft the request

        // request need this format
        // {
        // "contents": [
        // {
        // "parts": [
        // {
        // "text": "Explain how AI works in a few words"
        // }
        // ]
        // }
        // ]
        // }

        Map<String, Object> requestBody = Map.of(
                "contents", new Object[] {
                        Map.of("parts", new Object[] {
                                Map.of("text", prompt)
                        })
                });

        // go request and get the response
        String response = webClient.post()
                .uri(geminiApiUrl + geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        // extract and return response

        return extractResponseContent(response);
    }

    private String extractResponseContent(String response) {
        try {

            ObjectMapper mapper = new ObjectMapper();

            JsonNode rootNode = mapper.readTree(response);

            return rootNode.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

        } catch (Exception e) {
            return "Error Processing Request: " + e.getMessage();

        }

    }

    private String buildPrompt(EmailRequest emailRequest) {
        StringBuilder prompt = new StringBuilder();
        prompt.append(
                "Generate a professional email reply to the message below. Do not include a subject line. ");

        // check tone
        if (emailRequest.getTone() != null && !emailRequest.getTone().isEmpty()) {
            prompt.append("Use a ").append(emailRequest.getTone()).append(" tone.");

        }

        prompt.append("\nOriginal email: \n").append(emailRequest.getEmailContent());

        return prompt.toString();
    }

}
