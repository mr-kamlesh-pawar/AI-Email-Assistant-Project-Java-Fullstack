import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailGeneratorModal from './EmailGeneratorModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">
                AI-Powered Email Assistant
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <motion.span 
                className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform Your
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue bg-clip-text text-transparent relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Email Communication
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 via-neon-cyan/20 to-neon-blue/20 rounded-2xl blur-xl"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Generate professional, contextual email replies instantly with our AI-powered assistant. 
              Save time, maintain consistency, and never struggle with email responses again.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Generate Email Reply</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/download"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-white/10 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-2">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Download Extension</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose <span className="text-neon-blue">ReplyFlow</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of email communication with our advanced AI technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Generate professional replies in seconds, not minutes. Our AI processes context instantly.",
                color: "neon-blue"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Smart Context",
                description: "Understands email context, tone, and intent to provide relevant, appropriate responses.",
                color: "neon-purple"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Multiple Tones",
                description: "Choose from formal, casual, friendly, and professional tones to match your communication style.",
                color: "neon-cyan"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="gradient-card rounded-2xl p-8 hover-lift group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${feature.color}/20 text-${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EmailGeneratorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;