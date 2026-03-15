
import React from 'react';

interface PlusOneCoachingProps {
  onNavigate?: (tab: string) => void;
}

const PlusOneCoaching: React.FC<PlusOneCoachingProps> = ({ onNavigate }) => {
  const features = [
    "Comprehensive coverage of NCERT & State Syllabus",
    "Special focus on Physics, Chemistry, Biology & Mathematics",
    "Integrated Entrance Coaching for NEET & KEAM",
    "Regular Chapter-wise Mock Tests",
    "Personalized Mentorship for every student",
    "Digital Study Materials & Recorded Sessions"
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Hero Section */}
      <section className="relative bg-slate-900 rounded-[3rem] overflow-hidden p-8 sm:p-20 text-white border border-red-900/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Academic Year 2025-26
          </div>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight leading-none">
            Plus One <br/>
            <span className="text-red-600 underline decoration-white/20 underline-offset-8">Coaching</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-xl font-medium leading-relaxed max-w-xl">
            Build a rock-solid foundation for your higher secondary education. Our expert faculty ensures you master the core concepts while preparing for competitive excellence.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate?.('online-admission')}
              className="bg-red-600 hover:bg-red-500 text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-red-600/20 active:scale-95"
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
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Why Join Our +1 Program?</h3>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            The transition from 10th to Plus One is critical. We provide a structured environment that bridges the gap, focusing on deep conceptual understanding rather than rote learning.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <i className="fas fa-check-circle text-red-600 mt-1"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-video lg:aspect-square">
          <img 
            src="https://images.unsplash.com/photo-1523240715639-99a8a7ae9b18?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover" 
            alt="Plus One Classroom" 
          />
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-red-50 rounded-[3rem] p-10 sm:p-16 text-center space-y-8 border border-red-100">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">Ready to start your journey?</h3>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto">
          Join the community of toppers. Our admissions are currently open for the upcoming batch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onNavigate?.('online-admission')}
            className="bg-red-800 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl"
          >
            Online Admission
          </button>
          <a 
            href="tel:+917593038781"
            className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-red-800 transition-all"
          >
            Book through Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default PlusOneCoaching;
