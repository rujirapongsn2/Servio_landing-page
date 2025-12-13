import React from 'react';
import { Facebook, Linkedin, Globe, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-softnix-navy text-white border-t border-softnix-charcoal">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold font-display text-white">Servio</div>
                <div className="h-4 w-[1px] bg-softnix-slate/30 mx-1"></div>
                <div className="text-xs px-2 py-0.5 rounded border border-softnix-charcoal bg-softnix-charcoal/50 text-softnix-lime font-medium">Layer 3 Product</div>
            </div>
            <p className="text-softnix-slate max-w-sm mb-6 font-light">
              ระบบผู้ช่วยบริการลูกค้า AI อัจฉริยะสำหรับองค์กรยุคใหม่ พัฒนาโดย Softnix Technology ผู้นำด้าน Data และ AI Solution
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-softnix-slate hover:text-softnix-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-softnix-slate hover:text-softnix-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-softnix-slate hover:text-softnix-blue transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display text-white">Product</h4>
            <ul className="space-y-3 text-softnix-slate">
              <li><a href="#" className="hover:text-softnix-blue transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-softnix-blue transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-softnix-blue transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-softnix-blue transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display text-white">Contact Softnix</h4>
            <ul className="space-y-3 text-softnix-slate">
              <li className="flex items-center gap-2">
                <Globe size={16} />
                <span>www.softnix.co.th</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>sales@softnix.co.th</span>
              </li>
              <li className="text-sm mt-4 text-gray-500">
                Bangkok, Thailand
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-softnix-charcoal mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Softnix Technology Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};