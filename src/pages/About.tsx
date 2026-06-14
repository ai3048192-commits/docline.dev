import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  ShieldCheck,
  HeartPulse,
  ClipboardCheck,
  Award,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
} from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { label: "مريض سعيد", value: "2000+" },
    { label: "سنة خبرة", value: "15+" },
    { label: "طبيب متخصص", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]  px-6" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-24">
        <section
          className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
          dir="rtl"
        >
          {/* النص التعريفي - إضافة حركة دخول */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block px-4 py-1 text-emerald-700 rounded-full font-bold text-sm tracking-wide">
              مرحباً بكم في عيادة الباطنة
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#2D3436] leading-[1.1]">
              رعاية طبية{" "}
              <span className="text-emerald-600">بمعايير عالمية</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg">
              نقدم لكم رحلة علاجية متكاملة تبدأ من التشخيص الدقيق وصولاً إلى
              التعافي الكامل. فريقنا من الاستشاريين المتخصصين يعملون بجد لضمان
              راحتكم.
            </p>

            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 transition"
              >
                احجز موعدك الآن
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-stone-300 px-8 py-4 rounded-2xl font-bold hover:bg-stone-50 transition"
              >
                استكشف خدماتنا
              </motion.button>
            </div>
          </motion.div>

          {/* الصورة على الجانب - مع تأثير عمق */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            {/* لمسة إضافية: شكل ديكوري خلف الصورة */}
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-stone-200 rounded-[2rem] -z-10" />
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50" />

            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
              alt="عيادة باطنة احترافية"
              className="relative rounded-[3rem] shadow-2xl w-full h-[550px] object-cover border-4 border-white"
            />
          </motion.div>
        </section>
        {/* 1. نبذة، رؤية، رسالة بتأثير تفاعلي */}
        <section className="grid md:grid-cols-3 gap-8 py-12">
          {[
            {
              title: "نبذة عن العيادة",
              text: "عيادتنا هي صرح طبي متميز يقدم خدمات الرعاية الصحية الشاملة بأحدث الوسائل والتقنيات.",
              icon: <HeartPulse size={32} />,
            },
            {
              title: "رؤيتنا",
              text: "أن نكون الوجهة الأولى والموثوقة للرعاية الطبية المتميزة في المنطقة، مع الحفاظ على أعلى المعايير.",
              icon: <Target size={32} />,
            },
            {
              title: "رسالتنا",
              text: "تقديم علاج طبي ذو جودة عالية، مع الاهتمام بكرامة المريض وتوفير بيئة مريحة وآمنة للجميع.",
              icon: <ShieldCheck size={32} />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white p-8 rounded-3xl border border-stone-100 group transition-all duration-300"
            >
              <div className="text-emerald-600 mb-6 bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold mb-3 text-[#2D3436]">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </section>

        {/* 2. إحصائيات مع تأثير حركة */}
        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-4 bg-emerald-800 text-white py-12 px-6 rounded-[2rem] shadow-xl"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center border-l border-emerald-700 last:border-l-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-3xl md:text-5xl font-extrabold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-emerald-200 text-xs md:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 3. فريق العمل & لماذا تختارنا */}
        {/* 3. فريق العمل & لماذا تختارنا */}
        <section className="grid md:grid-cols-2 gap-12 items-start py-12">
          {/* لماذا تختارنا - تصميم عصري مع بطاقات صغيرة */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              لماذا تختارنا؟
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "أحدث الأجهزة الطبية", icon: <Award /> },
                { title: "أطباء ذوو خبرة دولية", icon: <Users /> },
                { title: "مواعيد مرنة", icon: <Clock /> },
                { title: "رعاية شخصية", icon: <HeartPulse /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 hover:border-emerald-200 transition-all"
                >
                  <div className="text-emerald-600 bg-emerald-50 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* فريق العمل - تصميم بطاقة مميزة */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-3xl shadow-lg border border-stone-100 relative overflow-hidden"
          >
            {/* لمسة ديكور */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-10 -mt-10" />

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              فريق العمل
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نحن نؤمن أن القوة تكمن في التكامل. يضم فريقنا نخبة من أفضل الأطباء
              والاستشاريين الذين يعملون بتناغم تام لضمان دقة التشخيص وسرعة وجودة
              العلاج.
            </p>

            {/* إضافة زر بسيط لزيارة صفحة الأطباء لاحقاً */}
            <button className="text-emerald-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              تعرف على أطبائنا <span>←</span>
            </button>
          </motion.div>
        </section>

        {/* 4. خطوات الحجز */}
        {/* 4. خطوات الحجز التفاعلية */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              كيف تحجز موعدك؟
            </h2>
            <p className="text-gray-500 mt-2">
              ثلاث خطوات بسيطة لتبدأ رحلة علاجك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* خط الربط بين الأيقونات (يظهر في الشاشات الكبيرة فقط) */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-emerald-200 -z-10" />

            {[
              {
                icon: <ClipboardCheck size={32} />,
                title: "اختر الخدمة",
                desc: "تصفح خدماتنا الطبية المتميزة",
              },
              {
                icon: <Calendar size={32} />,
                title: "حدد الموعد",
                desc: "اختر الوقت المناسب لك",
              },
              {
                icon: <CheckCircle2 size={32} />,
                title: "تأكيد الحجز",
                desc: "استلم تأكيد الموعد فوراً",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm text-center">{step.desc}</p>

                {/* رقم الخطوة */}
                <div className="absolute -top-3 left-6 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* 5. قيمنا */}
        {/* 5. قسم القيم الأساسية بتصميم بطاقات متفاعلة */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">قيمنا الأساسية</h2>
            <p className="text-gray-500 mt-2">
              المبادئ التي نؤمن بها في رحلة رعايتنا لكم
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "النزاهة",
                desc: "الشفافية الكاملة في التشخيص والعلاج.",
              },
              { title: "الاحترام", desc: "نقدر خصوصية وكرامة كل مريض." },
              {
                title: "الابتكار",
                desc: "نستخدم أحدث التقنيات الطبية العالمية.",
              },
              { title: "الالتزام", desc: "نحن معك حتى تمام الشفاء." },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-4 font-bold text-lg">
                  {value.title[0]}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
