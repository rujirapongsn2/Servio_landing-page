import React from 'react';
import { Mic, Users, LayoutDashboard, BrainCircuit, Code2, Database } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(39,134,194,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(39,134,194,0.12)] hover:border-softnix-lime/30 transition-all duration-300 group">
    <div className="w-14 h-14 bg-softnix-offwhite rounded-xl flex items-center justify-center text-softnix-blue group-hover:bg-layer3-gradient group-hover:text-softnix-navy transition-all duration-500 mb-6 group-hover:scale-110">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold font-display text-softnix-navy mb-3 group-hover:text-softnix-blue transition-colors">{title}</h3>
    <p className="text-softnix-slate leading-relaxed font-light">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Voice & Chat Interface",
      description: "รองรับการสื่อสารแบบ Omnichannel ทั้งการพิมพ์และระบบสั่งงานด้วยเสียง (Push-to-talk) ที่แม่นยำ เป็นธรรมชาติ พร้อม Streaming Response ที่รวดเร็ว",
      icon: Mic
    },
    {
      title: "Multi-Agent Architecture",
      description: "ระบบ AI ที่ทำงานร่วมกันเป็นทีม แบ่งหน้าที่ชัดเจนระหว่างผู้เชี่ยวชาญเฉพาะด้าน เช่น Sales, Support หรือ Technical Advisor เพื่อความถูกต้องสูงสุด",
      icon: Users
    },
    {
      title: "Custom Tools & RAG",
      description: "เชื่อมต่อกับ Knowledge Base ขององค์กรผ่าน File Store Agents และ API ภายนอก ทำให้ AI ตอบคำถามได้แม่นยำตามข้อมูลจริงของธุรกิจ",
      icon: Database
    },
    {
      title: "Enterprise Admin Dashboard",
      description: "ควบคุมทุกอย่างได้ในที่เดียว ตั้งแต่การจัดการ Agent, ติดตาม Monitor สถานะการทำงาน Real-time และปรับแต่ง Configuration โดยไม่ต้องแก้โค้ด",
      icon: LayoutDashboard
    },
    {
      title: "Seamless Handoffs",
      description: "ระบบส่งต่องานอัจฉริยะ Coordinator Agent สามารถวิเคราะห์บริบทและโอนสายไปยัง Agent ที่เชี่ยวชาญที่สุดโดยอัตโนมัติ",
      icon: BrainCircuit
    },
    {
      title: "Production Ready Widget",
      description: "ติดตั้งง่ายเพียงแปะโค้ด Widget ลงบนเว็บไซต์ รองรับทั้ง Desktop และ Mobile พร้อมใช้งานทันที ไม่ต้องพัฒนาระบบ Front-end เพิ่ม",
      icon: Code2
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-softnix-offwhite skew-y-1 transform origin-top-left -z-10 opacity-50"></div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-softnix-blue font-semibold tracking-wider text-xs uppercase bg-blue-50 px-3 py-1 rounded-full">Key Features</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-softnix-navy mt-4 mb-6">
            โซลูชันที่ครบครันสำหรับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-softnix-blue to-softnix-lime">Modern Customer Service</span>
          </h2>
          <p className="text-softnix-charcoal text-lg font-light">
            Servio ถูกออกแบบมาเพื่อลดภาระงานของเจ้าหน้าที่ เพิ่มความพึงพอใจให้ลูกค้า และพร้อม Scaling ไปกับธุรกิจของคุณ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};