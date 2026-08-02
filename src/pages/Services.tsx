import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck2,
  Mic,
  CreditCard,
  FolderKanban,
  Pill,
  Bell,
  HeartPulse,
  Sparkles,
  Zap,
  ArrowUpLeft,
} from "lucide-react";
import ServicesAom from "./ServicesAom";

const PlatformPage: React.FC = () => {
  const doctorHubFeatures = [
    {
      id: "01",
      title: "مساعد الذكاء الاصطناعي الآلي",
      desc: "نظام ذكي متكامل يتولى الرد على استفسارات المرضى وتأكيد الحجوزات عبر واتساب على مدار 24 ساعة.",
      icon: <Bot className="w-7 h-7 text-white" />,
      tag: "توفير 15 ساعة أسبوعياً",
      badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      colSpan: "lg:col-span-8",
    },
    {
      id: "02",
      title: "رابط الحجز المباشر",
      desc: "رابط شخصي تحطه ببروفايلك ليحجز المرضى فوراً.",
      icon: <CalendarCheck2 className="w-6 h-6 text-white" />,
      tag: "بدون سكرتارية",
      badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
      colSpan: "lg:col-span-4",
    },
    {
      id: "03",
      title: "التدوين الصوتي للروشتات",
      desc: "أملِ ملاحظات الكشف بصوتك ليقوم النظام بتحويلها فوراً إلى روشتة وملف طبي دقيق ومحمي.",
      icon: <Mic className="w-6 h-6 text-white" />,
      tag: "إملاء صوتي فوري",
      badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      colSpan: "lg:col-span-4",
    },
    {
      id: "04",
      title: "إدارة الإيرادات والأرباح",
      desc: "سجل مبسط ومباشر لمتابعة قيم الكشوفات والاستشارات اليومية والشهرية لتعرف صافي دخلك بلحظتها.",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      tag: "تتبع مالي لحظي",
      badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
      colSpan: "lg:col-span-4",
    },
    {
      id: "05",
      title: "الأرشيف الطبي السحابي",
      desc: "ملف موحد خاص لكل مريض يضم تاريخه المرضي والتشخيصات السابقة مرئية أمامك بوضوح تام.",
      icon: <FolderKanban className="w-6 h-6 text-white" />,
      tag: "حماية وتشفير عالي",
      badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      colSpan: "lg:col-span-4",
    },
  ];

  const secondaryUtilities = [
    {
      title: "إصدار الروشتات بشعارك",
      desc: "كتابة الأدوية والجرعات بشكل منظم مع طباعة روشتات تحمل اسمك وشعار عيادتك.",
      icon: <Pill className="w-6 h-6 text-white" />,
    },
    {
      title: "تنبيهات آلية لتقليل الغياب",
      desc: "إرسال رسائل تذكيرية للمرضى بمواعيد جلساتهم القادمة لرفع نسبة الالتزام بالحضور.",
      icon: <Bell className="w-6 h-6 text-white" />,
    },
    {
      title: "متابعة نتائج التحاليل",
      desc: "استقبال وإرفاق نتائج التحاليل والأشعة المرسلة من المرضى داخل ملفاتهم الطبية.",
      icon: <HeartPulse className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-28 px-4 sm:px-6 relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-emerald-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-teal-200/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        <ServicesAom />

        <section className="space-y-12 ">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-emerald-800 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>منظومة متكاملة لعيادة الطبيب المستقل</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D3436] tracking-tight">
              صُممت خصيصاً لتمنح <span className="text-emerald-700">الطبيب الواحد</span> أقصى راحة
            </h2>

            <p className="text-stone-500 text-sm sm:text-base font-light">
              أدوات ذكية ومستقلة تدير عملك بالكامل وتغنيك عن زحمة السكرتارية، ليبقى تركيزك مع مرضاك فقط.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {doctorHubFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(10, 122, 94, 0.12)" }}
                transition={{ duration: 0.3 }}
                className={`${item.colSpan} bg-white p-8 rounded-[2.5rem] border border-stone-200/90 shadow-xs flex flex-col justify-between relative group overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center">
                    {/* تم ضبط خلفية الأيقونة ولونها لتكون ظاهرة وبارزة تماماً */}
                    <div className="w-14 h-14 rounded-2xl bg-[#0A7A5E] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black text-stone-300 group-hover:text-emerald-600/30 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#2D3436] group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 text-emerald-600 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 relative z-10">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeBg}`}>
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-white via-stone-50 to-emerald-50/20 p-8 sm:p-12 md:p-14 rounded-[3rem] border border-stone-200/90 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200/60">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Zap className="w-3.5 h-3.5" /> مميزات إضافية متقدمة
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D3436]">
                تفاصيل دقيقة تصنع الفارق لعيادتك
              </h3>
            </div>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-sm">
              كل ميزة تم تطويرها خصيصاً لتوفير وقتك وجهدك في الإدارة اليومية للعيادة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryUtilities.map((util, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-2xs space-y-3 group hover:border-emerald-300 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0A7A5E] flex items-center justify-center shadow-md">
                  {util.icon}
                </div>
                <h4 className="font-extrabold text-base text-[#2D3436] group-hover:text-emerald-700 transition-colors">
                  {util.title}
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {util.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PlatformPage;