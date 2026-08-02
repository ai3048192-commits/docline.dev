import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  FileText,
  CreditCard,
  Bell,
  Clock,
  Sparkles,
  ArrowUpLeft,
  CheckCircle2,
  UserCheck,
  Stethoscope,
  HeartPulse,
  Activity,
  PhoneCall,
  ClipboardList,
  Star,
  ChevronLeft,
  HeartHandshake,
  Clock4,
} from "lucide-react";

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const comprehensiveFeatures = [
    {
      id: "appointments",
      title: "جدولة المواعيد الذكية",
      category: "appointments",
      icon: <Calendar size={24} />,
      desc: "تنظيم دقيق لأوقات الحجوزات اليومية والأسبوعية مع منع التداخل وإدارة أوقات الاستراحة بكفاءة.",
      tag: "تنظيم مرن",
      highlight: "بدون انتظار",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      stats: "إدارة 100+ موعد أسبوعياً",
    },
    {
      id: "patients",
      title: "السجل الطبي الشامل للمريض",
      category: "patients",
      icon: <FileText size={24} />,
      desc: "أرشيف رقمي خاص لكل مريض يضم التاريخ المرضي، الفحوصات السابقة، والتشخيصات السكلانية بدقة.",
      tag: "ملف موحد",
      highlight: "وصول فوري",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      stats: "أرشيف سحابي آمن",
    },
    {
      id: "consultation",
      title: "متابعة استشارية فردية ومباشرة",
      category: "consultation",
      icon: <Stethoscope size={24} />,
      desc: "خط زمني متصل يضمن متابعة المريض مع طبيبه الخاص مباشرة من أول زيارة وحتى تمام الشفاء.",
      tag: "رعاية شخصية",
      highlight: "طبيبك الخاص",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      stats: "متابعة حالة مستمرة",
    },
    {
      id: "prescriptions",
      title: "إصدار الروشتات الإلكترونية",
      category: "prescriptions",
      icon: <HeartPulse size={24} />,
      desc: "كتابة الوصفات الطبية بشكل واضح ومنظم مع تحديد الجرعات وأوقاتها بدقة لمنع أي أخطاء دوائية.",
      tag: "روشتة ذكية",
      highlight: "دقة ووضوح",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      stats: "إصدار فوري وموثق",
    },
    {
      id: "finance",
      title: "الحسابات وإدارة المدفوعات",
      category: "finance",
      icon: <CreditCard size={24} />,
      desc: "تسجيل قيم الكشوفات، الاستشارات، والإيرادات اليومية والشهرية للعيادة بطريقة مبسطة وآمنة.",
      tag: "حسابات مبسطة",
      highlight: "تقارير مالية",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      stats: "متابعة الإيرادات بلحظتها",
    },
    {
      id: "appointments",
      title: "التنبيهات والإشعارات الذكية",
      category: "appointments",
      icon: <Bell size={24} />,
      desc: "إرسال رسائل تذكيرية آلية للمرضى بمواعيد الجلسات والفحوصات القادمة لرفع نسبة الالتزام.",
      tag: "تذكير آلي",
      highlight: "تنبيه مبكر",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      stats: "تقليل نسب التغيب 80%",
    },
    {
      id: "consultation",
      title: "إدارة أوقات العمل والعروض",
      category: "consultation",
      icon: <Clock size={24} />,
      desc: "تحديد أيام ومواعيد الاستقبال الرسمية للعيادة مع إمكانية إضافة عروض وخصومات حصرية للمرضى.",
      tag: "جدول العيادة",
      highlight: "خصومات حصرية",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      stats: "مرونة كاملة في المواعيد",
    },
    {
      id: "patients",
      title: "الخصوصية وسرية بيانات المراجعين",
      category: "patients",
      icon: <UserCheck size={24} />,
      desc: "حماية تامة للبيانات الشخصية والتقارير الطبية للمرضى بأعلى معايير التشفير والأمان.",
      tag: "سرية مطلقة",
      highlight: "حماية فائقة",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      stats: "تشفير بيانات متطور",
    },
    {
      id: "prescriptions",
      title: "متابعة نتائج الفحوصات المخبرية",
      category: "prescriptions",
      icon: <Activity size={24} />,
      desc: "إمكانية إرفاق ومراجعة نتائج التحاليل والأشعة داخل ملف المريض ليسهل على الطبيب تقييم الحالة.",
      tag: "فحوصات دقيقة",
      highlight: "تقييم شامل",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      stats: "أرشيف التحاليل الطبية",
    },
    {
      id: "finance",
      title: "التقارير اليومية للأداء الإداري",
      category: "finance",
      icon: <ClipboardList size={24} />,
      desc: "عرض ملخص يومي لعدد الحالات، الكشوفات الجديدة، والمتابعات لتعزيز كفاءة إدارة العيادة.",
      tag: "إحصائيات",
      highlight: "مؤشرات نمو",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      stats: "تقارير أداء فورية",
    },
    {
      id: "consultation",
      title: "خدمة الطوارئ وحجز المتابعات",
      category: "consultation",
      icon: <PhoneCall size={24} />,
      desc: "تخصيص مساحة زمنية لحالات الطوارئ والمتابعات السريعة بين الجلسات لضمان رعاية متواصلة.",
      tag: "دعم طوارئ",
      highlight: "استجابة سريعة",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      stats: "جاهزية تامة طوال اليوم",
    },
    {
      id: "patients",
      title: "تقييمات المرضى وآراؤهم السريرية",
      category: "patients",
      icon: <Star size={24} />,
      desc: "نظام مخصص لعرض آراء المراجعين ومستويات رضاهم عن الرعاية الطبية لتحسين جودة الخدمات.",
      tag: "رضا العملاء",
      highlight: "ثقة ومصداقية",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      stats: "تقييمات موثقة بالكامل",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? comprehensiveFeatures
      : comprehensiveFeatures.filter(
          (item) => item.category === selectedCategory,
        );

  const tabs = [
    { id: "all", label: "جميع الخدمات", count: comprehensiveFeatures.length },
    { id: "appointments", label: "المواعيد والتنبيهات" },
    { id: "patients", label: "السجلات والخصوصية" },
    { id: "consultation", label: "المتابعة والاستشارات" },
    { id: "prescriptions", label: "الروشتات والفحوصات" },
    { id: "finance", label: "المالية والتقارير" },
  ];

  return (
    <div
      dir="rtl"
      className="bg-[#FAF7F2] min-h-screen text-[#2D3436]
       selection:bg-[#E5D7C3] selection:text-[#1A1A1A]   overflow-hidden relative"
    >
      {/* خلفيات جمالية متوهجة وناعمة */}
      <div className="absolute top-12 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-200/15 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-32 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-100/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      {/* رأس الصفحة */}
      <section className="pt-4 pb-10 md:pb-16 px-4 sm:px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 md:space-y-6 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200/90 text-emerald-700 text-xs shadow-xs backdrop-blur-md mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
            <span>نظام عيادة الطبيب الخاص المتطور 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#2D3436] tracking-tight leading-[1.2]">
            منظومة خدمات متكاملة مصممة <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800">
              لإدارة عيادتك الخاصة بكل احترافية
            </span>
          </h1>

          <p className="text-stone-500 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto px-2">
            اكتشف كافة الأدوات الذكية التي نوفرها لطبيب واحد لضمان تجربة إدارة
            سلسة، تنظيم دقيق للمواعيد، وعناية فائقة بالمرضى دون تعقيد.
          </p>

          {/* فلاتر التنقل: تم تعديل المسافات وأحجام الخطوط لتظهر بجانب بعضها بشكل متناسق ومريح جداً */}
          <div className="w-full bg-[#F5F9F6] p-3 sm:p-4 rounded-3xl border border-[#D5EAE2] shadow-sm my-6 max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                    selectedCategory === tab.id
                      ? "bg-[#0A7A5E] text-white shadow-md scale-105 ring-2 ring-[#0A7A5E]/20"
                      : "bg-white text-[#4A6358] border border-[#CDE5DC] hover:bg-[#EAF4F0] hover:text-[#1A2E26]"
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                        selectedCategory === tab.id
                          ? "bg-white/20 text-white"
                          : "bg-[#EAF4F0] text-[#0A7A5E]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* شبكة الكروت (Grid) متجاوبة بامتياز */}
      <section className="py-4 sm:py-8 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                key={item.title + index}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px -15px rgba(16, 185, 129, 0.12)",
                }}
                className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl sm:rounded-[3rem] border border-stone-200/80 group transition-all duration-300 flex flex-col justify-between shadow-xs relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  <div className="flex justify-between items-center mb-5 sm:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      {item.icon}
                    </div>
                    <span
                      className={`text-[10px] px-3 py-1 rounded-full border ${item.badgeColor} font-bold shadow-2xs`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#2D3436] mb-2 sm:mb-3 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 text-emerald-600 transition-all duration-300 -translate-x-1 group-hover:translate-x-0 shrink-0" />
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-5 sm:mb-6 font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <div className="flex justify-between items-center text-xs flex-wrap gap-2">
                    <span className="text-stone-400 font-light flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.stats}</span>
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-100 text-[11px]">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="w-10 h-1 bg-emerald-100 rounded-full group-hover:w-full transition-all duration-500 bg-gradient-to-r from-emerald-600 to-teal-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* القسم الاحترافي الإضافي */}
      <section className="mt-12 sm:mt-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl sm:rounded-[3.5rem] bg-gradient-to-br from-white via-emerald-50/10 to-teal-50/20 border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-200/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 sm:space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/60 text-emerald-800 text-xs font-bold">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>رعاية حصرية ومباشرة</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2D3436] tracking-tight">
                لماذا اختيار عيادة الاستشاري الفردي يغير تجربتك العلاجية؟
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                على عكس المستشفيات المزدحمة، نضمن لك تفرغاً تاماً ومتابعة لصيقة
                من استشاري واحد يدرس حالتك بعمق ويرافقك من التشخيص الأول حتى
                التماثل للشفاء التام.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-100 shadow-2xs">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D3436] mb-1">
                    استشارات هادئة وبدون زحام
                  </h4>
                  <p className="text-[11px] text-stone-400 font-light">
                    أوقات مخصصة تكفي لمناقشة كافة تفاصيل حالتك الصحية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-100 shadow-2xs">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D3436] mb-1">
                    ملف إلكتروني موحد ومشفر
                  </h4>
                  <p className="text-[11px] text-stone-400 font-light">
                    تاريخك المرضي وتقاريرك الفورية محفوظة بسرية تامة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 rounded-3xl sm:rounded-[3.5rem] bg-[#2D3436] text-white shadow-xl flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 sm:space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-400">
                <Clock4 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                احجز استشارتك القادمة الآن بكل سهولة
              </h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                استفد من مواعيد الحجز المبكرة، وتعرف على باقات العروض الخاصة
                بالاستشارات الطبية والمتابعات الدورية.
              </p>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-stone-300">حالة جدول المواعيد:</span>
                <span className="font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-xl border border-emerald-500/30">
                  متاح حجوزات اليوم
                </span>
              </div>

              <a
                href="/reservation"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 sm:py-4 rounded-2xl text-xs transition shadow-lg flex items-center justify-center gap-2 group text-center"
              >
                <span>احجز موعدك المباشر مع الاستشاري</span>
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
