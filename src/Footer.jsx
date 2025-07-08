import React from "react";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-white">
      
      {/* Footer Section */}
      <footer className="bg-white text-slate-700 font-sans">
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
          }
        `}</style>
        
        <div className="container mx-auto px-20 py-12 space-y-12">
          
          {/* Newsletter */}
          <div className="text-center max-w-xl mx-auto animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h4 className="text-2xl font-semibold text-slate-900 mb-3">Stay in the Loop</h4>
            <p className="text-slate-500 mb-6">Join our newsletter for updates and offers.</p>

            <div className="flex w-full max-w-md mx-auto rounded-full border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 transition-all duration-300 hover:shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-3 bg-transparent text-sm focus:outline-none"
              />
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 transition-all duration-300 flex items-center hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline text-sm">Subscribe</span>
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1 text-base text-slate-600">
            <div className="space-y-3 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <h5 className="font-semibold text-slate-800 mb-4">About</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">About ToolMart</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Press</a></li>
              </ul>
            </div>
            <div className="space-y-3 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <h5 className="font-semibold text-slate-800 mb-4">Sell</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Become a Seller</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Advertise</a></li>
              </ul>
            </div>
            <div className="space-y-3 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <h5 className="font-semibold text-slate-800 mb-4">Support</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Returns</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Shipping</a></li>
              </ul>
            </div>
            <div className="space-y-3 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <h5 className="font-semibold text-slate-800 mb-4">Connect</h5>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="text-slate-500 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3 animate-fadeInUp col-span-2 md:col-span-1" style={{animationDelay: '0.5s'}}>
              <h5 className="font-semibold text-slate-800 mb-4">Subscribe</h5>
              <p className="text-slate-500 mb-4 text-xs leading-relaxed">
                Join our community to receive updates
              </p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 border border-slate-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                />
                <button
                  type="button"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 pt-8 border-t border-slate-200 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="mb-4 md:mb-0 flex items-center space-x-6">
              <span className="text-2xl font-bold text-slate-900">
                <span className="text-orange-500">Tool</span>Mart
              </span>
              <span className="text-slate-400">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-all duration-300 hover:translate-x-1">Terms of Service</a>
              </div>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="text-slate-400 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;