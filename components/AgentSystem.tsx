import React from 'react';
import { User, ShoppingBag, Shirt, Headphones, Database, Share2 } from 'lucide-react';

export const AgentSystem: React.FC = () => {
  return (
    <section id="multi-agent" className="py-24 bg-softnix-offwhite overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-softnix-blue/5 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-softnix-orange/10 text-softnix-orange text-xs font-bold uppercase tracking-wider mb-4">
              Advanced Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-softnix-navy mb-6">
              ทำงานเหมือนทีมงานมืออาชีพด้วย <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-softnix-orange to-softnix-yellow">Multi-Agent System</span>
            </h2>
            <p className="text-lg text-softnix-charcoal mb-8 leading-relaxed font-light">
              หมดยุคของ Chatbot ตัวเดียวที่พยายามทำทุกอย่าง Servio ใช้แนวคิดการแบ่งงาน (Specialization) 
              โดยมี Coordinator เป็นศูนย์กลางคอยกระจายงานไปยัง Agent ผู้เชี่ยวชาญเฉพาะด้าน
            </p>

            <div className="space-y-6">
              {[
                { 
                  title: "Coordinator Agent", 
                  desc: "จุดรับเรื่องหลัก (Receptionist) วิเคราะห์ความต้องการและส่งต่อแผนกที่ถูกต้อง",
                  color: "bg-softnix-navy",
                  iconColor: "text-white"
                },
                { 
                  title: "Sales & Product Agent", 
                  desc: "ผู้เชี่ยวชาญด้านสินค้า ให้ข้อมูลสเปค ราคา และโปรโมชั่นจาก Knowledge Base",
                  color: "bg-softnix-orange",
                   iconColor: "text-white"
                },
                { 
                  title: "Support & CRM Agent", 
                  desc: "ดูแลลูกค้าเก่า เช็คสถานะคำสั่งซื้อ ทำเรื่องคืนเงิน และแก้ไขปัญหาการใช้งาน",
                  color: "bg-softnix-blue",
                   iconColor: "text-white"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    <User className={item.iconColor} size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display text-softnix-navy">{item.title}</h4>
                    <p className="text-softnix-slate text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diagram Visualization */}
          <div className="order-1 lg:order-2 relative flex justify-center">
             <div className="relative w-full max-w-lg aspect-square">
                
                {/* Center: Coordinator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                    <div className="w-24 h-24 bg-softnix-navy rounded-full shadow-xl border-4 border-white flex items-center justify-center animate-pulse-slow">
                        <Share2 className="text-white" size={32} />
                    </div>
                    <div className="mt-3 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 text-xs font-bold text-softnix-navy">
                        Coordinator
                    </div>
                </div>

                {/* Orbiting Agents */}
                {[
                    { icon: ShoppingBag, label: "Sales", color: "text-softnix-orange", border: "border-softnix-orange", bg: "bg-orange-50", angle: "0" },
                    { icon: Headphones, label: "Support", color: "text-softnix-blue", border: "border-softnix-blue", bg: "bg-blue-50", angle: "120" },
                    { icon: Shirt, label: "Stylist", color: "text-softnix-lime", border: "border-softnix-lime", bg: "bg-lime-50", angle: "240" }
                ].map((agent, i) => (
                     <div key={i} className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(-50%, -50%) rotate(${agent.angle}deg)` }}>
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transform -rotate-0" style={{ transform: `translateX(-50%) rotate(-${agent.angle}deg)` }}>
                            <div className={`w-16 h-16 bg-white rounded-2xl shadow-lg border-2 ${agent.border} flex items-center justify-center z-10`}>
                                <agent.icon className={agent.color} size={28} />
                            </div>
                             <div className={`mt-2 ${agent.bg} px-3 py-0.5 rounded text-[10px] font-bold ${agent.color.replace('text', 'text')}`}>
                                {agent.label}
                            </div>
                         </div>
                         {/* Connecting Line */}
                         <div className="absolute top-[80px] left-1/2 w-0.5 h-[calc(50%-80px)] bg-gray-200 -translate-x-1/2 -z-10 origin-top"></div>
                     </div>
                ))}

                {/* Bottom Base */}
                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4">
                    <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-softnix-blue/20 text-center shadow-lg">
                        <div className="flex items-center justify-center gap-2 text-softnix-navy font-bold text-sm mb-1">
                            <Database size={14} className="text-softnix-blue" />
                            Organization Data
                        </div>
                        <div className="text-[10px] text-softnix-slate">RAG • File Store • Internal API</div>
                    </div>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};