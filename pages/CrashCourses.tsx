
import React from 'react';

interface CrashCoursesProps {
  onNavigate?: (tab: string) => void;
}

const CrashCourses: React.FC<CrashCoursesProps> = ({ onNavigate }) => {
  const features = [
    "Rapid Revision of Core Concepts",
    "High-Yield Topic Prioritization",
    "Daily Mock Tests & Performance Analysis",
    "Expert Tips & Time Management Strategies",
    "Last-Minute Doubt Clearing Hub",
    "Focused Preparation for NEET/JEE/KEAM"
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Hero Section */}
      <section className="relative bg-slate-900 rounded-[3rem] overflow-hidden p-8 sm:p-20 text-white border border-amber-900/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-400">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            Intensive Exam Prep
          </div>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tight leading-none">
            Crash <br/>
            <span className="text-amber-500 underline decoration-white/20 underline-offset-8">Courses</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-xl font-medium leading-relaxed max-w-xl">
            Short on time? Our intensive crash courses are designed to maximize your score in the shortest possible time through strategic revision and rigorous testing.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate?.('online-admission')}
              className="bg-amber-500 hover:bg-amber-400 text-black font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-600/20 active:scale-95"
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
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Maximize Your Potential</h3>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            Our crash courses focus on high-weightage topics and exam-taking strategies. We help you identify your weak areas and turn them into strengths quickly.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <i className="fas fa-check-circle text-amber-600 mt-1"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-video lg:aspect-square">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover" 
            alt="Intensive Study Session" 
          />
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-amber-50 rounded-[3rem] p-10 sm:p-16 text-center space-y-8 border border-amber-100">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">Don't Leave Your Success to Chance</h3>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto">
          Join our upcoming crash course batch and give your preparation the final boost it needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onNavigate?.('online-admission')}
            className="bg-amber-600 text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl"
          >
            Online Admission
          </button>
          <a 
            href="tel:+917593038781"
            className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-amber-800 transition-all"
          >
            Book through Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default CrashCourses;
