import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Send, User } from 'lucide-react';

const reviews = [
  { id: 1, name: "د. خالد السعيد", comment: "تجربة علاجية استثنائية، احترافية عالية وأجهزة متطورة جداً.", rating: 5 },
  { id: 2, name: "منى عبدالله", comment: "أفضل دكتور تعاملت معه، اهتمام بالتفاصيل وراحة نفسية كبيرة.", rating: 5 },
  { id: 3, name: "ياسر إبراهيم", comment: "مستوى الرعاية الطبية فاق توقعاتي، شكراً لكم على كل شيء.", rating: 4 },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-6 bg-[#faf7f2] relative overflow-hidden" dir="rtl">
      {/* لمسات إضاءة خلفية ناعمة */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-200/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">آراء مرضانا</h2>
          <p className="text-gray-500">نعتز بثقتكم ونعمل دائماً لنكون عند حسن ظنكم</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* قسم عرض التقييمات */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <motion.div
                key={rev.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-emerald-100 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4 text-emerald-500">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{rev.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <User size={18} />
                  </div>
                  <h4 className="font-bold text-gray-900">{rev.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* نموذج إرسال التقييم */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-900 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <MessageSquare className="text-emerald-400" /> اترك تقييمك
              </h3>
              
<form className="space-y-4">
  {/* حقل الاسم */}
  <input 
    type="text"
    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 outline-none transition-all" 
    placeholder="اسمك الكريم" 
    required
  />
  
  {/* حقل رقم الهاتف */}
  <input 
    type="tel"
    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 outline-none transition-all" 
    placeholder="رقم الهاتف" 
    required
  />

  {/* حقل البريد الإلكتروني */}
  <input 
    type="email"
    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 outline-none transition-all" 
    placeholder="البريد الإلكتروني" 
    required
  />

  {/* حقل التعليق */}
  <textarea 
    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 outline-none transition-all h-24" 
    placeholder="شاركنا تجربتك..." 
    required
  />
  
  <button className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg">
    إرسال التقييم <Send size={18} />
  </button>
</form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;