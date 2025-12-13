import React from 'react';
import { Mic, MessageSquareText, ShieldCheck, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-softnix-offwhite overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-softnix-blue/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-softnix-lime/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-softnix-slate/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-softnix-lime animate-pulse"></span>
            <span className="text-softnix-navy text-sm font-semibold tracking-wide font-display">Layer 3: Intelligent Applications</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-softnix-navy leading-tight font-display">
            ยกระดับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-softnix-blue to-softnix-lime">Customer Service</span><br />
            ด้วยพลัง AI อัจฉริยะ
          </h1>
          
          <p className="text-lg text-softnix-charcoal max-w-xl font-light leading-relaxed">
            Servio คือระบบผู้ช่วยบริการลูกค้าที่ขับเคลื่อนด้วย Multi-Agent System ผสานเทคโนโลยีสั่งงานด้วยเสียง 
            พร้อมเชื่อมต่อ Knowledge Base ขององค์กร เพื่อมอบประสบการณ์ที่เหนือกว่า แม่นยำ และทำงานได้จริงตลอด 24 ชั่วโมง
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-layer3-gradient hover:opacity-95 text-softnix-navy px-8 py-4 rounded-lg font-bold shadow-lg shadow-softnix-lime/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
              <MessageSquareText size={20} />
              เริ่มต้นใช้งาน Servio
            </button>
            <button className="bg-white hover:bg-gray-50 border border-softnix-slate/30 text-softnix-navy px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              <ShieldCheck size={20} className="text-softnix-blue" />
              ศึกษา Enterprise Security
            </button>
          </div>
          
          <div className="pt-4 flex items-center gap-4 text-sm text-softnix-slate font-light">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500`}>
                        {i === 3 ? '+' : ''}
                    </div>
                ))}
             </div>
             <p>ได้รับความไว้วางใจจากองค์กรชั้นนำในไทย</p>
          </div>
        </div>

        {/* Right Content - Visual Representation */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
           <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
                {/* Abstract Layered Circles representing the Softnix Layers */}
                <div className="absolute inset-0 border border-softnix-slate/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-8 border border-softnix-slate/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                
                {/* Floating UI Cards */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                     <div className="relative bg-white rounded-2xl shadow-2xl border border-softnix-slate/10 overflow-hidden">
                        {/* Header */}
                        <div className="bg-softnix-navy p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-softnix-blue flex items-center justify-center text-white font-bold text-xs">S</div>
                                <div>
                                    <div className="text-white text-xs font-bold">Servio Agent</div>
                                    <div className="text-softnix-slate text-[10px]">Active • Reply in 0.2s</div>
                                </div>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-softnix-slate/30"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-softnix-slate/30"></div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="p-6 space-y-5 bg-gray-50/50">
                             {/* User */}
                             <div className="flex gap-3 justify-end">
                                <div className="bg-softnix-blue text-white p-3.5 rounded-2xl rounded-tr-sm text-sm shadow-md max-w-[85%]">
                                    <div className="flex items-center gap-1.5 mb-1 opacity-90">
                                        <Mic size={12} />
                                        <span className="text-[10px] font-medium">Voice Input</span>
                                    </div>
                                    "ช่วยเช็คสินค้า iPhone 15 Pro Max สี Natural Titanium ให้หน่อยครับว่ามีของไหม?"
                                </div>
                             </div>

                             {/* Processing Indicator */}
                             <div className="flex justify-center">
                                <span className="bg-white border border-softnix-lime/30 text-softnix-navy text-[10px] px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-softnix-lime rounded-full animate-pulse"></span>
                                    Querying Inventory Knowledge Base...
                                </span>
                             </div>

                             {/* Agent */}
                             <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-layer3-gradient flex items-center justify-center shrink-0 shadow-sm border border-white">
                                    <span className="text-softnix-navy text-xs font-bold">AI</span>
                                </div>
                                <div className="bg-white text-softnix-charcoal p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm border border-gray-100 max-w-[90%]">
                                    <p className="mb-2">จากการตรวจสอบ <b>Stock ปัจจุบัน (Real-time)</b>:</p>
                                    <div className="bg-softnix-offwhite p-3 rounded-lg border-l-2 border-softnix-lime mb-3 text-xs">
                                        <div className="flex justify-between mb-1">
                                            <span className="font-semibold text-softnix-navy">iPhone 15 Pro Max (256GB)</span>
                                            <span className="text-softnix-lime font-bold">มีสินค้า</span>
                                        </div>
                                        <div className="text-softnix-slate">สี: Natural Titanium</div>
                                    </div>
                                    <p>ต้องการให้ผมจองไว้ให้เลยไหมครับ? หรือต้องการข้อมูลโปรโมชั่นเพิ่มเติม?</p>
                                </div>
                             </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-softnix-offwhite flex items-center justify-center text-softnix-slate">
                                <Mic size={16} />
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative">
                                <div className="absolute left-0 top-0 h-full w-1/3 bg-gray-300"></div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-softnix-blue text-white flex items-center justify-center">
                                <ArrowRight size={16} />
                            </div>
                        </div>
                     </div>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};