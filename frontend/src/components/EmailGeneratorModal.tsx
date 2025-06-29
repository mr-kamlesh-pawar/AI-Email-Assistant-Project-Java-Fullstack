import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Copy, CheckCircle, Mail } from 'lucide-react';
import axios from 'axios';

interface EmailGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailGeneratorModal: React.FC<EmailGeneratorModalProps> = ({ isOpen, onClose }) => {
  const [emailContent, setEmailContent] = useState('');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [generatedReply, setGeneratedReply] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const tones = [
    { value: 'professional', label: 'Professional', description: 'Formal and business-appropriate' },
    { value: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
    { value: 'casual', label: 'Casual', description: 'Relaxed and informal' },
    { value: 'formal', label: 'Formal', description: 'Very structured and official' },
  ];

  const sampleReplies = {
    professional: "Thank you for your email. I appreciate you reaching out regarding this matter. After reviewing the details you've provided, I'd like to schedule a brief meeting to discuss this further and explore potential solutions.\n\nI'm available for a call next week at your convenience. Please let me know what works best for your schedule.\n\nBest regards,",
    friendly: "Hi there!\n\nThanks so much for getting in touch! I really appreciate you taking the time to reach out about this. I'd love to help you with what you're looking for.\n\nHow about we hop on a quick call sometime next week to chat about this more? I'm pretty flexible with timing, so just let me know what works for you!\n\nLooking forward to hearing from you soon!\n\nCheers,",
    casual: "Hey!\n\nThanks for the message! Sounds interesting - I'd be happy to chat more about this.\n\nWanna grab a call next week sometime? I'm free most days, so whatever works for you.\n\nTalk soon!",
    formal: "Dear Sender,\n\nI acknowledge receipt of your correspondence dated today. I have thoroughly reviewed the contents of your message and understand the nature of your inquiry.\n\nI would be pleased to arrange a formal consultation to address the matters you have raised. I shall make myself available at your earliest convenience to discuss this matter in greater detail.\n\nI await your response to coordinate our schedules accordingly.\n\nSincerely,"
  };

const handleGenerate = async () => {
  if (!emailContent.trim()) return;
  setIsGenerating(true);
  setGeneratedReply('');

  try {
    const response = await axios.post('http://localhost:8080/api/email/generate', {
      emailContent,
      tone: selectedTone,
    });

    setGeneratedReply(response.data || 'No reply generated.');
  } catch (error) {
    console.error("Error generating reply:", error);
    setGeneratedReply('Failed to generate reply. Please try again.');
  } finally {
    setIsGenerating(false);
  }
};




  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedReply);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleClose = () => {
    setEmailContent('');
    setGeneratedReply('');
    setIsCopied(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto gradient-card rounded-2xl p-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Email Reply Generator</h2>
                  <p className="text-gray-400">Create professional email responses instantly</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Original Email Content
                  </label>
                  <textarea
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    placeholder="Paste the email you want to reply to here..."
                    className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-all duration-200 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Select Tone
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {tones.map((tone) => (
                      <button
                        key={tone.value}
                        onClick={() => setSelectedTone(tone.value)}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedTone === tone.value
                            ? 'border-neon-blue bg-neon-blue/10 text-neon-blue'
                            : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <div className="font-medium">{tone.label}</div>
                        <div className="text-xs opacity-70 mt-1">{tone.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!emailContent.trim() || isGenerating}
                  className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed neon-glow-hover transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      <span>Generate Reply</span>
                    </>
                  )}
                </button>
              </div>

              {/* Output Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Generated Reply
                  </label>
                  <div className="relative">
                    <textarea
                      value={generatedReply}
                      readOnly
                      placeholder="Your AI-generated reply will appear here..."
                      className="w-full h-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 resize-none"
                    />
                    
                    {generatedReply && (
                      <button
                        onClick={handleCopy}
                        className={`absolute top-3 right-3 px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                          isCopied
                            ? 'bg-green-500/20 text-green-400 success-animation'
                            : 'bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="text-sm font-medium">Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {generatedReply && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                  >
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Reply Generated Successfully!</span>
                    </div>
                    <p className="text-sm text-green-300 mt-1">
                      You can now copy this reply and use it in your email client.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailGeneratorModal;