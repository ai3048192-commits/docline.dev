import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, ShieldCheck, HeartPulse, Brain, Zap, Scale, Target, Leaf, Activity, Sparkles } from 'lucide-react';

const faqData = [
  { icon: <BookOpen />, title: "التشخيص الدقيق", content: "نعتمد على بروتوكولات تشخيصية عالمية تبدأ بتحليل التاريخ المرضي الكامل وفحص كيميائية الجسم بدقة متناهية." },
  { icon: <CheckCircle />, title: "تخصيص الخطة", content: "لا وجود للأنظمة الجاهزة هنا؛ كل مريض يحصل على خطة وبروتوكول علاجي مفصل خصيصاً لحالته البيولوجية." },
  { icon: <ShieldCheck />, title: "الأمان الصحي", content: "صحتك أولوية؛ نبتعد تماماً عن المكملات غير الموثوقة أو الأنظمة القاسية التي تضر بالجهاز الهضمي وتؤدي لنتائج عكسية." },
  { icon: <HeartPulse />, title: "متابعة مستمرة", content: "نحن معك خطوة بخطوة عبر منصتنا الرقمية لمراقبة استجابة جسمك وتعديل الخطة فوراً عند الحاجة." },
  { icon: <Brain />, title: "الدعم النفسي", content: "نتفهم أن التحدي ليس في الطعام فقط، بل في العادات. نقدم دعماً سلوكياً يساعدك على الاستمرار بدون حرمان." },
  { icon: <Zap />, title: "نتائج مستدامة", content: "الهدف ليس خسارة الوزن المؤقتة، بل تغيير نمط حياتك جذرياً لتتمتع بصحة مستدامة وطاقة عالية طوال اليوم." },
  { icon: <Scale />, title: "القياس الذكي", content: "نستخدم أجهزة InBody المتقدمة لقياس نسب الدهون، الكتلة العضلية، وتوزيع السوائل بدقة شديدة." },
  { icon: <Target />, title: "تحديد الأهداف", content: "نقوم بتقسيم رحلتك العلاجية إلى أهداف مرحلية صغيرة قابلة للتحقيق لتعزيز ثقتك في المسار." },
  { icon: <Leaf />, title: "الغذاء الطبيعي", content: "نركز على الأطعمة الكاملة التي تعزز مناعتك وتريح جهازك الهضمي، بعيداً عن المنتجات المصنعة." },
  { icon: <Activity />, title: "النشاط البدني", content: "نصمم لك برنامجاً حركياً بسيطاً يتناسب مع نمط حياتك لتحسين عملية الحرق وتعزيز الصحة العامة." },
];

const PremiumFAQLight = () => {
  return (
    <section className="relative py-32 px-6 bg-[#FAF9F6] overflow-hidden text-gray-900" dir="rtl">
      
      {/* خلفية جمالية بيضاء منورة وناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 text-xs font-mono tracking-widest shadow-sm"
          >
            <Sparkles size={14} />
            <span>CLINICAL METHODOLOGY // WHY CHOOSE US</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-gray-900"
          >
            لماذا تختار <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              منهجيتنا العلاجية؟
            </span>
          </motion.h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-2">
            نحن لا نقدم مجرد نصائح، بل رحلة علمية منظمة تعيد التوازن لجسمك وتضمن لك حياة صحية خالية من الأمراض.
          </p>
        </div>

        {/* Bento Grid الحديث (3 أعمدة بتصميم عصري ومتناسق) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] hover:border-emerald-200 transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* إضاءة خفيفة عند الهوفر */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {React.cloneElement(item.icon, { size: 26 })}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>

              {/* تأثير خط جمالي سفلي */}
              <div className="absolute bottom-0 right-8 left-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumFAQLight;