import React from 'react';
import { motion } from 'framer-motion';
import { Download, Chrome, Siren as Firefox, Shield, Zap, Mail, ArrowRight, Check, Star } from 'lucide-react';

const DownloadPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Replies",
      description: "Generate contextual email replies in seconds"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your emails stay private and secure"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Universal Support",
      description: "Works with Gmail, Outlook, and more"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "ReplyFlow saved me hours every week. The replies are so natural, my colleagues can't tell they're AI-generated!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Sales Manager",
      content: "Game-changer for client communication. I can respond faster while maintaining a professional tone.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Executive Assistant",
      content: "Perfect for managing multiple inboxes. The tone selection feature is incredibly useful.",
      rating: 5
    }
  ];

  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full px-4 py-2 mb-6">
                <Download className="w-4 h-4 text-neon-blue" />
                <span className="text-sm font-medium text-neon-blue">Browser Extension</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Download</span>
                <br />
                <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                  ReplyFlow
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your email workflow with our powerful browser extension. 
                Generate professional replies directly in your email client with just one click.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-white neon-glow-hover transition-all duration-300 hover:scale-105">
                  <Chrome className="w-6 h-6" />
                  <span>Add to Chrome</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Firefox className="w-6 h-6" />
                  <span>Add to Firefox</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>No account required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Privacy focused</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-400">Gmail - Compose</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">To: client@example.com</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Subject: Re: Project Update</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg h-32 relative">
                      <div className="absolute bottom-4 right-4">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-neon-blue rounded-lg text-white text-sm neon-glow pulse-animation">
                          <Zap className="w-4 h-4" />
                          <span>Generate Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
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
              Everything You Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our extension integrates seamlessly with your favorite email clients and provides powerful features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="gradient-card rounded-2xl p-8 hover-lift group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-neon-blue/20 text-neon-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Loved by Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users are saying about ReplyFlow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="gradient-card rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="gradient-card rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Email Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who save time and improve their communication with ReplyFlow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-white neon-glow-hover transition-all duration-300 hover:scale-105">
                <Chrome className="w-6 h-6" />
                <span>Install Chrome Extension</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Firefox className="w-6 h-6" />
                <span>Install Firefox Extension</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;