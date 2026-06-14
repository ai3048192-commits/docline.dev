import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Users,
  Calendar,
  FileText,
  CreditCard,
  Bell,
  BarChart3,
  Lock,
  LayoutDashboard,
} from "lucide-react";

import Testimonials from "../components/Testimonials";
import DoctorSection from "../components/DoctorSection";
import DoctorAdvice from "../components/DoctorAdvice";

const FullPage = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    },
    {
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      title: "إدارة الأطباء",
      icon: <Stethoscope size={28} />,
      desc: "نظام متكامل لإدارة الطاقم الطبي وجداولهم.",
    },
    {
      title: "إدارة المرضى",
      icon: <Users size={28} />,
      desc: "سجلات رقمية شاملة لكل مريض.",
    },
    {
      title: "إدارة المواعيد",
      icon: <Calendar size={28} />,
      desc: "جدولة ذكية للحجوزات وتقليل الانتظار.",
    },
    {
      title: "السجل الطبي",
      icon: <FileText size={28} />,
      desc: "أرشفة إلكترونية دقيقة للتشخيصات.",
    },
    {
      title: "إدارة المدفوعات",
      icon: <CreditCard size={28} />,
      desc: "فواتير إلكترونية ومتابعة مالية.",
    },
    {
      title: "التنبيهات",
      icon: <Bell size={28} />,
      desc: "إشعارات تذكيرية للمرضى والأطباء.",
    },
    {
      title: "التقارير",
      icon: <BarChart3 size={28} />,
      desc: "تحليلات الأداء ومؤشرات العيادة.",
    },
    {
      title: "أمان البيانات",
      icon: <Lock size={28} />,
      desc: "تشفير وحماية عالية لبياناتك.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div dir="rtl" className="bg-[#FAF7F2] min-h-screen text-[#2D3436]">
      <section className="relative h-[85vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* طبقة تغشية لزيادة تباين النص */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed font-medium">
              نجمع بين الخبرة الطبية المتميزة وأحدث التقنيات الرقمية لنضمن لك
              ولعائلتك رعاية صحية متكاملة وسلسة في مكان واحد.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* زر الحجز - يوجه لصفحة الحجوزات */}
              <a
                href="/booking"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-emerald-900/50 transition-all hover:scale-105"
              >
                احجز موعدك الآن
              </a>

              {/* زر الخدمات - يوجه لقسم الخدمات */}
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 transition-all hover:scale-105"
              >
                استكشف خدماتنا
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            حلول متطورة
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3436] mb-4">
            ماذا تقدم منصتنا؟
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            نقدم أدوات ذكية متكاملة مصممة خصيصاً لإدارة عيادتك بكفاءة عالية
            وتجربة مستخدم لا تضاهى.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-8 rounded-[2rem] border border-stone-100 group transition-all duration-300"
            >
              {/* الأيقونة مع تأثير التحول */}
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(f.icon as React.ReactElement, {
                  size: 30,
                })}
              </div>

              <h3 className="text-xl font-bold text-[#2D3436] mb-3 group-hover:text-emerald-700 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {f.desc}
              </p>

              {/* المؤشر السفلي التفاعلي */}
              <div className="w-10 h-1 bg-emerald-100 rounded-full group-hover:w-full transition-all duration-500 bg-gradient-to-r from-emerald-500 to-emerald-300" />
            </motion.div>
          ))}
        </div>
      </section>
      <DoctorSection />
      <DoctorAdvice />

      <Testimonials />
    </div>
  );
};

export default FullPage;
