import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ArrowRight } from 'lucide-react';

const DoctorProfilePro = () => {
  return (
    <section className="relative py-24 px-6 bg-[#0B0E14] overflow-hidden" dir="rtl">
      {/* خلفية ضوئية جمالية */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* الجانب الأيسر: الصورة بتصميم فني */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                alt="الدكتور" 
              />
              {/* طبقة تدرج لوني خفيفة */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />
            </div>

            {/* بطاقة إحصائيات زجاجية */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-72 shadow-2xl"
            >
              <h4 className="text-emerald-400 text-5xl font-black mb-2">15+</h4>
              <p className="text-white/70 font-medium">سنوات من الخبرة والنجاح في تقديم أفضل الرعاية الطبية</p>
            </motion.div>
          </motion.div>

          {/* الجانب الأيمن: المحتوى */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
              <Star size={14} fill="currentColor" />
              <span>استشاري العام 2026</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black text-white leading-[1.1]">
              د. محمد أحمد <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                بين يديك
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              نجمع بين الخبرة العميقة والتكنولوجيا الحديثة لتقديم رحلة علاجية مريحة وفعالة. رسالتنا هي إعادتك لحياتك الطبيعية بأفضل حال.
            </p>

            <div className="grid gap-4">
              {[
                "الزمالة الدولية في الجهاز الهضمي",
                "أكثر من 5000+ عملية ناجحة",
                "تقنيات تشخيص غير جراحية متطورة"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <Check size={18} />
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>

            <button className="relative group overflow-hidden bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                احجز استشارتك الآن <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfilePro;