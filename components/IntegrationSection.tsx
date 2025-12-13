import React from 'react';
import { Code, CheckCircle2 } from 'lucide-react';

export const IntegrationSection: React.FC = () => {
  return (
    <section id="enterprise" className="py-24 bg-softnix-navy text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute right-0 top-0 w-96 h-96 bg-softnix-blue rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Code Block */}
                <div className="order-2 lg:order-1">
                    <div className="bg-[#0A1625] rounded-xl border border-softnix-charcoal shadow-2xl overflow-hidden">
                        <div className="bg-[#0f1f33] px-4 py-3 border-b border-softnix-charcoal flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-xs text-softnix-slate font-mono">index.html (Integration)</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
<pre className="font-mono text-sm text-blue-200">
{`<!-- Servio Widget -->
<script
  src="https://servio.softnix.ai/embed.js"
  data-agent-id="YOUR_AGENT_ID"
  data-type="voice"
  data-theme="corporate"
  data-position="bottom-right">
</script>`}
</pre>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center gap-8 text-sm text-softnix-slate">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-softnix-lime" size={16} />
                            <span>No Complex Setup</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-softnix-lime" size={16} />
                            <span>Secure API Key</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-softnix-lime" size={16} />
                            <span>Custom Branding</span>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                    <span className="text-softnix-blue font-bold tracking-wider text-xs uppercase mb-2 block">Technical Integration</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                        ติดตั้งง่าย พร้อมใช้ในระดับ <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-softnix-blue to-white">Enterprise Scale</span>
                    </h2>
                    <p className="text-softnix-slate text-lg leading-relaxed mb-8 font-light">
                        ไม่ต้องรื้อระบบเดิม Servio ถูกออกแบบมาให้เป็น Layer เสริมที่สามารถ Integrate เข้ากับเว็บไซต์ 
                        หรือ Application เดิมขององค์กรได้ทันทีผ่าน Widget หรือ API
                    </p>
                    
                    <ul className="space-y-4">
                        {[
                            "File Store Agents: อัปโหลด PDF/Docs เพื่อสร้าง Knowledge Base ได้ทันที",
                            "Dynamic Agent Config: ปรับแต่งพฤติกรรม AI ผ่าน Admin Dashboard",
                            "High Security: รองรับการเชื่อมต่อแบบ Private และ On-premise (Optional)",
                            "Real-time Monitoring: ตรวจสอบทุกบทสนทนาและประสิทธิภาพผ่าน Web Socket"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="bg-softnix-charcoal p-1.5 rounded mt-0.5 border border-softnix-slate/20">
                                    <Code className="text-softnix-lime" size={14} />
                                </div>
                                <span className="text-gray-300 font-light">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};