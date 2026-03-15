
import React from 'react';

interface FoundationCoachingProps {
  onNavigate?: (tab: string) => void;
}

const FoundationCoaching: React.FC<FoundationCoachingProps> = ({ onNavigate }) => {
  const features = [
    "Strengthening Core Concepts in Science & Maths",
    "Logical Reasoning & Mental Ability Training",
    "Early Preparation for Olympiads & NTSE",
    "Interactive Learning Methodologies",
    "Regular Progress Tracking & Feedback",
    "Foundation for JEE/NEET Excellence"
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Hero Section */}
      <section className="relative bg-slate-900 rounded-[3rem] overflow-hidden p-8 sm:p-20 text-white border border-emerald-900/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-600/20 border border-emerald-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-400">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Building Future Leaders
          </div>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight leading-none">
            Foundation <br/>
            <span className="text-emerald-500 underline decoration-white/20 underline-offset-8">(8-10)</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-xl font-medium leading-relaxed max-w-xl">
            Start early, stay ahead. Our Foundation program is designed to nurture young minds and build the analytical skills required for future competitive success.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate?.('online-admission')}
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
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
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Nurturing Young Talent</h3>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            Our Foundation course focuses on making learning fun and effective. We bridge the gap between school curriculum and competitive exam requirements.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <i className="fas fa-check-circle text-emerald-600 mt-1"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-video lg:aspect-square">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover" 
            alt="Foundation Students" 
          />
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-emerald-50 rounded-[3rem] p-10 sm:p-16 text-center space-y-8 border border-emerald-100">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">Give Your Child the Centum Edge</h3>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto">
          Empower your child with the right skills from an early age. Admissions open for classes 8, 9, and 10.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onNavigate?.('online-admission')}
            className="bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl"
          >
            Online Admission
          </button>
          <a 
            href="tel:+917593038781"
            className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-emerald-800 transition-all"
          >
            Book through Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default FoundationCoaching;
