import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  LayoutDashboard,
  Stethoscope,
  Users,
  Calendar,
  FileText,
  CreditCard,
  Bell,
  BarChart3,
  Lock,
  CheckCircle,
  Play,
} from "lucide-react";

const PlatformPage: React.FC = () => {
  const features = [
    {
      title: "إدارة الأطباء",
      icon: <Stethoscope />,
      desc: "نظام متكامل لإدارة الطاقم الطبي وجداولهم.",
    },
    {
      title: "إدارة المرضى",
      icon: <Users />,
      desc: "سجلات رقمية شاملة لكل مريض.",
    },
    {
      title: "إدارة المواعيد",
      icon: <Calendar />,
      desc: "جدولة ذكية للحجوزات وتقليل الانتظار.",
    },
    {
      title: "السجل الطبي",
      icon: <FileText />,
      desc: "أرشفة إلكترونية دقيقة للتشخيصات.",
    },
    {
      title: "إدارة المدفوعات",
      icon: <CreditCard />,
      desc: "فواتير إلكترونية ومتابعة مالية.",
    },
    {
      title: "التنبيهات",
      icon: <Bell />,
      desc: "إشعارات تذكيرية للمرضى والأطباء.",
    },
    {
      title: "التقارير",
      icon: <BarChart3 />,
      desc: "تحليلات الأداء ومؤشرات العيادة.",
    },
    {
      title: "أمان البيانات",
      icon: <Lock />,
      desc: "تشفير وحماية عالية لبياناتك.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-20 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* 1. مقدمة المنصة */}
        <section className="relative  text-center">
          {/* شكل زخرفي في الخلفية لإعطاء عمق */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <div className="w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[120px] opacity-30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* شارة صغيرة فوق العنوان */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-emerald-100 shadow-sm text-emerald-700 font-bold text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              نظام الإدارة الرقمي الأول
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#2D3436] leading-[1.1] tracking-tight">
              مستقبل الإدارة الطبية في{" "}
              <span className="text-emerald-600">منصة واحدة</span>
            </h1>

            <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
              نغير مفهوم الرعاية الصحية عبر نظام رقمي متكامل يجمع بين الطبيب
              والمريض بكفاءة وأمان، لضمان تجربة علاجية لا مثيل لها.
            </p>

            {/* أزرار الإجراء */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-700/30 hover:bg-emerald-800 transition"
              >
                اطلب عرض توضيحي
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-emerald-800 rounded-2xl font-bold border border-emerald-100 shadow-sm hover:shadow-md transition"
              >
                تعرف على المميزات
              </motion.button>
            </div>
          </motion.div>
        </section>
        {/* 2. المميزات الرئيسية */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2D3436] mb-4">
              ماذا تقدم منصتنا؟
            </h2>
            <p className="text-gray-500">
              حلول متكاملة لإدارة عيادتك بكفاءة وذكاء
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-3xl border border-stone-100 group transition-all duration-300"
              >
                {/* أيقونة بتأثير خلفية ناعم */}
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(f.icon as React.ReactElement, {
                    size: 28,
                  })}
                </div>

                <h3 className="text-lg font-bold text-[#2D3436] mb-3 group-hover:text-emerald-700 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>

                {/* مؤشر بصري خفيف للأسفل */}
                <div className="w-0 h-1 bg-emerald-500 mt-6 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* الجزء النصي */}
          <div className="space-y-8 flex-1">
            <div className="space-y-2">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
                خطوات بسيطة
              </span>
              <h2 className="text-4xl font-bold text-[#2D3436]">
                كيف تبدأ رحلتك معنا؟
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "التسجيل السريع",
                  desc: "أنشئ حسابك في أقل من دقيقة باستخدام بريدك الإلكتروني.",
                },
                {
                  title: "إعداد العيادة",
                  desc: "أضف بيانات عيادتك، أطبائك، وخدماتك الطبية بسهولة.",
                },
                {
                  title: "بدء الإدارة الطبية",
                  desc: "ابدأ استقبال المرضى وإدارة المواعيد بشكل احترافي.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center font-bold text-emerald-700 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#2D3436]">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* زر التشغيل مع تأثير بصري */}
          <div className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-emerald-700 text-white p-8 rounded-full shadow-[0_20px_50px_-12px_rgba(5,150,105,0.5)] flex items-center justify-center transition-all"
            >
              {/* تأثير نبض حول الزر */}
              <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-20" />
              <Play size={40} fill="currentColor" className="ml-1" />
            </motion.button>
            <p className="mt-6 text-emerald-800 font-bold text-center">
              شاهد الفيديو
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 px-6 rounded-[3rem] text-center shadow-2xl">
          {/* خلفية متدرجة مع تأثير توهج */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900" />
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-400 to-transparent" />

          {/* أشكال زخرفية عائمة */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500 rounded-full blur-[120px] opacity-20" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-300 rounded-full blur-[120px] opacity-10" />

          {/* المحتوى */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              هل أنت مستعد لنقل عيادتك <br /> إلى المستوى التالي؟
            </h2>
            <p className="text-emerald-100 text-lg leading-relaxed max-w-lg mx-auto">
              انضم إلى مئات العيادات التي تعتمد على منصتنا لإدارة عملياتها
              الطبية بذكاء، دقة، وسرعة فائقة. ابدأ رحلتك الرقمية اليوم.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:bg-emerald-50 transition-all"
            >
              ابدأ تجربتك المجانية الآن
              <span className="group-hover:translate-x-1 transition-transform">
                ←
              </span>
            </motion.button>

            <p className="text-emerald-400 text-sm mt-6 flex items-center justify-center gap-2">
              <CheckCircle size={16} /> لا حاجة لبطاقة ائتمان • إعداد في دقيقتين
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlatformPage;
