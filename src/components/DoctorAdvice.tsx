import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, ShieldCheck, HeartPulse, Brain, Zap, Scale, Target, Leaf, Activity } from 'lucide-react';

const faqData = [
  { icon: <BookOpen />, title: "التشخيص الدقيق", content: "نعتمد على بروتوكولات تشخيصية عالمية تبدأ بتحليل التاريخ المرضي الكامل وفحص كيميائية الجسم بدقة متناهية." },
  { icon: <CheckCircle />, title: "تخصيص الخطة", content: "لا وجود للأنظمة الجاهزة هنا؛ كل مريض يحصل على خطة غذائية وبروتوكول علاجي مفصل خصيصاً لحالته البيولوجية." },
  { icon: <ShieldCheck />, title: "الأمان الصحي", content: "صحتك أولوية؛ نبتعد تماماً عن المكملات غير الموثوقة أو الأنظمة القاسية التي تضر بالجهاز الهضمي وتؤدي لنتائج عكسية." },
  { icon: <HeartPulse />, title: "متابعة مستمرة", content: "نحن معك خطوة بخطوة عبر منصتنا الرقمية لمراقبة استجابة جسمك وتعديل الخطة فوراً عند الحاجة لضمان أفضل النتائج." },
  { icon: <Brain />, title: "الدعم النفسي", content: "نتفهم أن التحدي ليس في الطعام فقط، بل في العادات. نقدم دعماً سلوكياً يساعدك على الاستمرار بدون حرمان أو ضغط نفسي." },
  { icon: <Zap />, title: "نتائج مستدامة", content: "الهدف ليس خسارة الوزن المؤقتة، بل تغيير نمط حياتك جذرياً لتتمتع بصحة مستدامة وطاقة عالية طوال اليوم." },
  { icon: <Scale />, title: "القياس الذكي", content: "نستخدم أجهزة InBody المتقدمة لقياس نسب الدهون، الكتلة العضلية، وتوزيع السوائل، لنعرف التغيير الحقيقي داخل جسمك." },
  { icon: <Target />, title: "تحديد الأهداف", content: "نقوم بتقسيم رحلتك العلاجية إلى أهداف مرحلية صغيرة قابلة للتحقيق، مما يعزز ثقتك في المسار العلاجي ويحفزك للاستمرار." },
  { icon: <Leaf />, title: "الغذاء الطبيعي", content: "نركز على الأطعمة الكاملة الطبيعية التي تعزز مناعتك وتريح جهازك الهضمي، بعيداً عن المنتجات المصنعة التي تسبب الالتهابات." },
  { icon: <Activity />, title: "النشاط البدني", content: "نصمم لك برنامجاً حركياً بسيطاً يتناسب مع نمط حياتك، سواء كنت مبتدئاً أو رياضياً، لتحسين عملية الحرق وتعزيز الصحة العامة." },
];

const PremiumFAQ = () => {
  return (
    <section className="py-24 px-6 bg-[#faf7f2]" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">لماذا تختار منهجيتنا العلاجية؟</h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            نحن لا نقدم مجرد نصائح، نحن نقدم رحلة علمية منظمة تعيد التوازن لجسمك وتضمن لك حياة صحية خالية من الأمراض والمضاعفات.
          </p>
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-emerald-100 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFAQ;