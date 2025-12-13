import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AgentSystem } from './components/AgentSystem';
import { IntegrationSection } from './components/IntegrationSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-softnix-offwhite font-sans selection:bg-softnix-lime selection:text-softnix-navy">
      <Navbar />
      <Hero />
      <Features />
      <AgentSystem />
      <IntegrationSection />
      
      {/* Call to Action Section */}
      <section className="py-24 bg-layer3-gradient text-softnix-navy text-center px-6 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">พร้อมยกระดับ Customer Experience หรือยัง?</h2>
          <p className="text-lg md:text-xl text-softnix-navy/80 mb-10 font-light max-w-2xl mx-auto">
            ปรึกษาทีมผู้เชี่ยวชาญจาก Softnix เพื่อออกแบบโซลูชัน Servio ที่เหมาะกับธุรกิจของคุณ พร้อมทดลองใช้งานจริงวันนี้
          </p>
          <button className="bg-softnix-navy text-white hover:bg-softnix-charcoal px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1 border border-transparent hover:border-softnix-lime">
            นัดหมาย Demo และรับคำปรึกษา
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;