import React from 'react';
import { Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-blue-900/30 py-12 relative">
      {/* Blue light effect */}
      <div className="absolute left-1/4 top-0 w-96 h-32 bg-blue-500/10 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-full">
                <Youtube size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">EuSouOBackk</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating stunning MMV & AMV content that brings anime and manga to life through music.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.youtube.com/@EuSouOBackk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Made with <Heart size={14} className="inline text-red-500" /> for anime and manga fans
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {new Date().getFullYear()} EuSouOBackk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;