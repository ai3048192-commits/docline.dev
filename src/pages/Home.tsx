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
  Sparkles,
  ChevronRight,
} from "lucide-react";

import Testimonials from "./Testimonials";
import DoctorSection from "./DoctorSection";
import DoctorAdvice from "./DoctorAdvice";
import ServicesAom from "./ServicesAom";

const FullPage = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    },
    {
      img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=2000",
    },
  ];

  const features = [
    {
      title: "إدارة الأطباء",
      icon: <Stethoscope size={28} />,
      desc: "نظام متكامل لإدارة الطاقم الطبي وجداولهم بدقة.",
    },
    {
      title: "إدارة المرضى",
      icon: <Users size={28} />,
      desc: "سجلات رقمية شاملة لكل مريض مع التتبع الفوري.",
    },
    {
      title: "إدارة المواعيد",
      icon: <Calendar size={28} />,
      desc: "جدولة ذكية للحجوزات وتقليل أوقات الانتظار تماماً.",
    },
    {
      title: "السجل الطبي",
      icon: <FileText size={28} />,
      desc: "أرشفة إلكترونية دقيقة للتشخيصات والوصفات.",
    },
    {
      title: "إدارة المدفوعات",
      icon: <CreditCard size={28} />,
      desc: "فواتير إلكترونية ومتابعة مالية شفافة وآمنة.",
    },
    {
      title: "التنبيهات الذكية",
      icon: <Bell size={28} />,
      desc: "إشعارات تذكيرية متقدمة للمرضى والأطباء.",
    },
    {
      title: "التقارير والإحصائيات",
      icon: <BarChart3 size={28} />,
      desc: "تحليلات الأداء ومؤشرات النجاح للعيادة.",
    },
    {
      title: "أمان البيانات",
      icon: <Lock size={28} />,
      desc: "تشفير فائق وحماية كاملة لخصوصية المريض.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      dir="rtl"
      className="bg-[#FAF7F2] min-h-screen text-[#2D3436]  
      selection:bg-[#EBE4D8] selection:text-[#2D3436]"
    >
      {/* 1. قسم البطل بتصميم جديد ومطور */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].img}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/40 to-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2
             rounded-full bg-white/20 backdrop-blur-md border
              border-white/30 text-white text-xs ">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
              <span>المنصة الطبية الذكية المعتمدة 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              رعاية صحية متكاملة <br />
              <span className="text-emerald-400">
                بأعلى معايير الدقة والرفاهية
              </span>
            </h1>

            <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              نجمع بين الخبرة الطبية المتميزة وأحدث التقنيات الرقمية لنضمن لك
              ولعائلتك تجربة علاجية سلسة ومريحة.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="/reservation"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>احجز موعدك الآن</span>
              </a>

              <a
                href="/services"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg border border-white/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>استكشف خدماتنا</span>
                <ChevronRight className="w-5 h-5 rotate-180" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      <ServicesAom />
      <DoctorSection />
      <DoctorAdvice />
      <Testimonials />
    </div>
  );
};

export default FullPage;
