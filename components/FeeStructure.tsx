
import React, { useState } from 'react';
import CourseEnquiry from './CourseEnquiry';

const FeeStructure: React.FC = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const feeData = [
    { class: '8th Standard', fee: '₹10,750', duration: 'Annual', features: ['Foundation Coaching', 'Study Materials', 'Regular Tests'] },
    { class: '9th Standard', fee: '₹12,500', duration: 'Annual', features: ['Advanced Foundation', 'Concept Building', 'Monthly Assessment'] },
    { class: '10th Standard', fee: '₹13,000', duration: 'Annual', features: ['Board Exam Prep', 'Previous Year Papers', 'Intensive Revision'] },
    { class: '+1 Science', fee: '₹19,000', duration: 'Annual', features: ['JEE/NEET Foundation', 'Practical Support', 'Expert Faculty'] },
    { class: '+2 Science', fee: '₹20,000', duration: 'Annual', features: ['Entrance Focused', 'Mock Tests', 'Career Guidance'] },
    { class: 'commerce', fee: '₹15,000', duration: 'Annual', features: ['Intensive Revision', 'mock test', 'Exam Strategy'] },
  ];

  const handleEnquire = (className: string) => {
    setSelectedClass(className);
    setShowEnquiry(true);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-800 rounded-lg text-[9px] font-black uppercase tracking-widest border border-red-100">
          <i className="fas fa-money-bill-wave"></i>
          Transparency First
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tighter uppercase">
          Fee <span className="text-red-800">Structure</span>
        </h1>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
          Affordable excellence. We believe quality education should be accessible to every aspiring student in Cherpulassery.
        </p>
      </div>

      {/* Fee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feeData.map((item, index) => (
          <div key={index} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{item.class}</h3>
                <p className="text-[10px] font-black text-red-800 uppercase tracking-widest">{item.duration} Program</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">{item.fee}</span>
                <span className="text-slate-400 font-bold text-xs uppercase">/ Year</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-slate-50">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                    <i className="fas fa-check-circle text-red-800 text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleEnquire(item.class)}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-800 transition-all shadow-lg active:scale-95"
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="bg-slate-950 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12 pointer-events-none text-red-800">
          <i className="fas fa-hand-holding-heart text-[10rem]"></i>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tight uppercase">Scholarships Available</h3>
            <p className="text-slate-300 font-medium leading-relaxed">
              We offer merit-based scholarships for students who excel in our Centum Scholarship Test (CST). Financial assistance is also available for deserving students from underprivileged backgrounds.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10">
                <i className="fas fa-percent text-red-500"></i>
                <span className="text-xs font-black uppercase tracking-widest">Up to 50% Off</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10">
                <i className="fas fa-user-graduate text-red-500"></i>
                <span className="text-xs font-black uppercase tracking-widest">Merit Based</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <button 
              onClick={() => handleEnquire('Scholarship')}
              className="bg-red-800 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-red-800 transition-all shadow-2xl active:scale-95"
            >
              Apply for CST 2025
            </button>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowEnquiry(false)}
          ></div>
          <div className="relative z-10 w-full max-w-md animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowEnquiry(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-800 transition-colors"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="bg-red-800 p-6 text-white text-center">
                <h3 className="text-xl font-black uppercase tracking-tight">Course Enquiry</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">
                  Interested in: <span className="text-white underline">{selectedClass}</span>
                </p>
              </div>
              <div className="p-2">
                <CourseEnquiry />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeeStructure;
