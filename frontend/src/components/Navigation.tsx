import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Download, Home } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Mail className="w-8 h-8 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-neon-blue opacity-20 blur-lg rounded-full group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
              ReplyFlow
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                location.pathname === '/' ? 'text-neon-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link 
              to="/download" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                location.pathname === '/download' ? 'text-neon-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Download</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;