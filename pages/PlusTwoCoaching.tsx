
import React from 'react';

interface PlusTwoCoachingProps {
  onNavigate?: (tab: string) => void;
}

const PlusTwoCoaching: React.FC<PlusTwoCoachingProps> = ({ onNavigate }) => {
  const features = [
    "Intensive Board Exam Preparation",
    "NEET, JEE & KEAM Focused Training",
    "Full Syllabus Revision & Test Series",
    "Previous Year Question Paper Analysis",
    "One-on-One Doubt Clearing Sessions",
    "Career Guidance & Entrance Strategy"
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Hero Section */}
      <section className="relative bg-slate-900 rounded-[3rem] overflow-hidden p-8 sm:p-20 text-white border border-blue-900/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Final Lap to Excellence
          </div>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight leading-none">
            Plus Two <br/>
            <span className="text-blue-500 underline decoration-white/20 underline-offset-8">Coaching</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-xl font-medium leading-relaxed max-w-xl">
            The most crucial year of your academic life. We provide the edge you need to excel in both Board Exams and National Level Entrance Tests.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate?.('online-admission')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Online Admission
            </button>
            <a 
              href="tel:+917593038781"
              className="bg-white hover:bg-slate-100 text-slate-900 font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 text-center"
            >
              Book through Call
            </a>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Master Your Final Year</h3>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            Our Plus Two program is designed for results. We combine rigorous academic training with strategic entrance preparation to ensure our students secure top ranks.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <i className="fas fa-check-circle text-blue-600 mt-1"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-video lg:aspect-square">
          <img 
            src="https://images.unsplash.com/photo-1434039347656-ad76cb03175c?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover" 
            alt="Plus Two Students" 
          />
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-50 rounded-[3rem] p-10 sm:p-16 text-center space-y-8 border border-blue-100">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">Secure Your Future Today</h3>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto">
          Limited seats available for the 2025-26 batch. Join the league of achievers at Centum.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onNavigate?.('online-admission')}
            className="bg-blue-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl"
          >
            Online Admission
          </button>
          <a 
            href="tel:+917593038781"
            className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-blue-800 transition-all"
          >
            Book through Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default PlusTwoCoaching;
