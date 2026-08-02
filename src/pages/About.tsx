import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  Target,
  ShieldCheck,
  Users,
  ClipboardCheck,
  Calendar,
  ArrowUpRight,
  Activity,
  Award,
  Clock,
  CheckCircle2,
  Stethoscope,
  Building2,
  ChevronRight,
  PhoneCall,
  Star,
  BookOpen,
  FileText,
  ShieldAlert,
} from "lucide-react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // إحصائيات الطبيب والعيادة المخصصة لاستشاري واحد
  const doctorStats = [
    {
      label: "مريض تم شفاؤهم",
      value: "14,000+",
      sub: "بمتابعة شخصية ودقيقة",
      icon: <Users className="w-5 h-5 text-[#0A7A5E]" />,
    },
    {
      label: "سنة خبرة سريرية",
      value: "22+",
      sub: "في كبرى الجامعات والمستشفيات",
      icon: <Award className="w-5 h-5 text-[#0A7A5E]" />,
    },
    {
      label: "حالة معقدة تم حلها",
      value: "3,500+",
      sub: "تشخيص دقيق وحاسم",
      icon: <Activity className="w-5 h-5 text-[#0A7A5E]" />,
    },
    {
      label: "تقييم عام المريض",
      value: "4.9/5",
      sub: "موثوقية وثقة عالية",
      icon: <Star className="w-5 h-5 text-[#0A7A5E]" />,
    },
  ];

  // تخصصات الطبيب الدقيقة
  const doctorSpecialties = [
    {
      title: "أمراض الجهاز الهضمي والقولون",
      code: "GI-01",
      desc: "تشخيص وعلاج اضطرابات القولون العصبي المزمن، قرح المعدة، واختلالات ميكروبيوم الأمعاء.",
    },
    {
      title: "متابعة الضغط والسكري المزمن",
      code: "CR-02",
      desc: "بروتوكولات تحكم دقيقة لمستويات السكر بالدم باستخدام أحدث المستشعرات الرقمية المبدعة.",
    },
    {
      title: "تشخيص واعتلال وظائف الكلى",
      code: "NE-03",
      desc: "المراقبة المبكرة لمعدلات الترشيح الكلوي وحماية الأنسجة لدى مرضى الأمراض المزمنة.",
    },
    {
      title: "أمراض المناعة والالتهابات",
      code: "IM-05",
      desc: "فحص وتحليل الأجسام المضادة وتتبع حالات التعب المزمن واختلالات الجهاز المناعي الغامضة.",
    },
  ];

  // الفلسفة والركائز
  const doctorPillars = [
    {
      title: "رعاية شخصية حصرية",
      desc: "الطبيب نفسه الذي قام بتشخيص حالتك في الزيارة الأولى هو من يتابع تطورات حالتك في كل زيارة شخصياً.",
      badge: "متابعة مباشرة",
    },
    {
      title: "التشخيص الجزيئي المتقدم",
      desc: "الاعتماد على أحدث بروتوكولات الفحص المخبري الرقمي للوصول إلى الجذور الحقيقية للمرض.",
      badge: "دقة 99.9%",
    },
    {
      title: "الملف الطبي الذكي الموحد",
      desc: "سجل صحي سحابي مشفر يرافقك خطوة بخطوة ويسهل مراجعة تفاصيل حالتك في ثوانٍ معدودة.",
      badge: "تزامن لحظي",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-[#1D2B24] py-12 selection:bg-[#E2EFE9] selection:text-[#0A7A5E] overflow-hidden relative"
      dir="rtl"
    >
      {/* خلفية منورة وساطعة مطابقة للألوان الهادئة */}
      <div className="absolute top-0 right-1/4 w-[900px] h-[900px] bg-gradient-to-br from-[#F5F9F6] via-[#F2F7F4] to-transparent rounded-full blur-[160px] pointer-events-none -z-10 opacity-100" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#FAF7F2] via-[#EAF4F0] to-transparent rounded-full blur-[170px] pointer-events-none -z-10 opacity-90" />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24 relative z-10">
        {/* ================= 1. القسم الرئيسي (Hero Section - الطبيب الاستشاري) ================= */}
    <section className="grid lg:grid-cols-12 gap-8 items-center pt-4">
  {/* قسم المعلومات الغنية المكثفة */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="lg:col-span-7 space-y-6"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF4F0] border border-[#CDE5DC] text-[#0A7A5E] text-xs font-semibold shadow-xs">
      <Sparkles className="w-4 h-4 text-[#0A7A5E]" />
      <span>عيادة الاستشاري الفردية المميزة // رعاية طبية خاصة متكاملة</span>
    </div>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#1A2E26]">
      أ.د. محمود الشريف <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E624B] via-[#0A7A5E] to-[#128C6A]">
        استشاري الطب الباطني المتقدم.
      </span>
    </h1>

    <p className="text-[#4A6358] text-base leading-relaxed max-w-xl font-light">
      &quot;المريض ليس مجرد عارض صحي، بل قصة متكاملة تتطلب فهماً عميقاً لنمط حياته وبيئته للوصول إلى التعافي الحقيقي والوقاية المستدامة.&quot;
    </p>

    {/* إحصائيات وبيانات مكثفة وعديدة */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
      <div className="p-3.5 rounded-2xl bg-white border border-[#D5EAE2] shadow-xs space-y-1">
        <div className="text-[11px] text-[#587368]">الخبرة السريرية</div>
        <div className="text-sm font-bold text-[#1A2E26]">أكثر من 22 عاماً</div>
      </div>
      <div className="p-3.5 rounded-2xl bg-white border border-[#D5EAE2] shadow-xs space-y-1">
        <div className="text-[11px] text-[#587368]">الاعتماد الدولي</div>
        <div className="text-sm font-bold text-[#0A7A5E]">زمالة الكليات الملكية</div>
      </div>
      <div className="p-3.5 rounded-2xl bg-white border border-[#D5EAE2] shadow-xs space-y-1 col-span-2 sm:col-span-1">
        <div className="text-[11px] text-[#587368]">المتابعة الشخصية</div>
        <div className="text-sm font-bold text-[#1A2E26]">100% حصرية</div>
      </div>
      <div className="p-3.5 rounded-2xl bg-white border border-[#D5EAE2] shadow-xs space-y-1">
        <div className="text-[11px] text-[#587368]">إجمالي المرضى</div>
        <div className="text-sm font-bold text-[#0A7A5E]">15,000+ مريض</div>
      </div>
      <div className="p-3.5 rounded-2xl bg-white border border-[#D5EAE2] shadow-xs space-y-1">
        <div className="text-[11px] text-[#587368]">نسبة الشفاء والرضا</div>
        <div className="text-sm font-bold text-[#1A2E26]">99.8% تقييم ممتاز</div>
      </div>
      <div className="p-3.5 rounded-2xl bg-white border border-[#D5EAE2] shadow-xs space-y-1">
        <div className="text-[11px] text-[#587368]">الأبحاث المنشورة</div>
        <div className="text-sm font-bold text-[#0A7A5E]">40+ بحث دولي</div>
      </div>
    </div>

    <div className="flex flex-wrap gap-3 pt-2">
      <button className="bg-gradient-to-r from-[#0E624B] to-[#0A7A5E] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-sm hover:scale-[1.02] transition">
        <Calendar className="w-4 h-4" />
        <span>احجز استشارتك الشخصية الآن</span>
      </button>
      <button className="border border-[#CDE5DC] bg-white px-7 py-3.5 rounded-2xl font-bold text-[#1A2E26] text-sm hover:border-[#0A7A5E] transition flex items-center gap-2">
        <PhoneCall className="w-4 h-4 text-[#0A7A5E]" />
        <span>مراسلة العيادة مباشرة</span>
      </button>
    </div>
  </motion.div>

  {/* بطاقة التعريف الرقمية الجديدة كلياً والمكثفة بالمعلومات */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="lg:col-span-5 relative"
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-[#CDE5DC] to-[#EAF4F0] rounded-[2.5rem] blur-xl opacity-75 -z-10" />
    <div className="p-7 rounded-[2.5rem] bg-white border border-[#CDE5DC] shadow-xl space-y-5">
      
      {/* رأس البطاقة */}
      <div className="flex items-center gap-4 border-b border-[#E2EBE5] pb-4">
        <div className="w-16 h-16 rounded-2xl bg-[#EAF4F0] border border-[#CDE5DC] flex items-center justify-center text-[#0A7A5E] font-bold text-xl shadow-xs">
          أ.د
        </div>
        <div>
          <div className="text-base font-bold text-[#1A2E26]">
            أ.د. محمود الشريف
          </div>
          <div className="text-xs text-[#587368]">
            رئيس قسم الأبحاث السريرية الأسبق
          </div>
        </div>
      </div>

      {/* قائمة الاعتمادات والمميزات الإضافية */}
      <div className="space-y-2.5 text-xs text-[#4A6358] font-light">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
          <span>حاصل على الدكتوراه المتخصصة في الباطنة العامة</span>
        </div>
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
          <span>عضو الجمعية الأوروبية لأمراض الباطنة والسكري</span>
        </div>
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
          <span>خبير معتمد في الحالات المزمنة والمعقدة</span>
        </div>
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
          <span>محاضر دولي في المؤتمرات الطبية الكبرى</span>
        </div>
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
          <span>مستشار طبي معتمد لكبرى الهيئات الصحية</span>
        </div>
      </div>

      {/* تفاصيل إضافية مصغرة داخل البطاقة */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <div className="p-2.5 rounded-xl bg-[#F5F9F6] border border-[#D5EAE2] text-center">
          <div className="text-[10px] text-[#587368]">وقت الانتظار</div>
          <div className="text-xs font-bold text-[#1A2E26]">أقل من 10 دقائق</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#F5F9F6] border border-[#D5EAE2] text-center">
          <div className="text-[10px] text-[#587368]">الاستشارة الطارئة</div>
          <div className="text-xs font-bold text-[#0A7A5E]">متاحة أونلاين</div>
        </div>
      </div>

      {/* حالة جدول المواعيد */}
      <div className="p-3.5 rounded-2xl bg-[#EAF4F0] border border-[#CDE5DC] flex items-center justify-between text-xs">
        <span className="font-bold text-[#1A2E26]">
          حالة جدول المواعيد اليومي
        </span>
        <span className="font-semibold text-[#0A7A5E] bg-white px-2.5 py-1 rounded-lg border border-[#CDE5DC]">
          متاح حجوزات محدودة
        </span>
      </div>

    </div>
  </motion.div>
</section>

        {/* ================= 2. إحصائيات الطبيب الرقمية ================= */}
       <section className="space-y-6">
  <div className="text-center max-w-xl mx-auto space-y-2">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4F0] border border-[#CDE5DC] text-[#0A7A5E] text-xs font-mono">
      <span>مؤشرات التميز والنجاح الطبي</span>
    </div>
    <h2 className="text-3xl font-extrabold text-[#1A2E26]">أرقامنا تفصح عن جودتنا</h2>
    <p className="text-xs text-[#587368]">بيانات وإحصائيات شاملة تعكس مدى ثقة المرضى والتميز السريري.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {doctorStats.map((st, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5, scale: 1.02 }}
        className="p-6 rounded-[2rem] bg-gradient-to-br from-white via-[#F9FCFA] to-[#EAF4F0] border border-[#D5EAE2] backdrop-blur-xl shadow-sm space-y-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#CDE5DC]/20 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex justify-between items-center relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF4F0] border border-[#CDE5DC] flex items-center justify-center text-[#0A7A5E] shadow-xs">
            {st.icon}
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white border border-[#CDE5DC] text-[#0A7A5E]">
            PRO-0{i + 1}
          </span>
        </div>

        <div className="space-y-1 relative z-10">
          <div className="text-3xl font-extrabold text-[#1A2E26] font-mono">
            {st.value}
          </div>
          <div className="text-sm font-bold text-[#1D2B24]">
            {st.label}
          </div>
          <div className="text-xs text-[#587368] font-light leading-relaxed pt-1">
            {st.sub}
          </div>
        </div>

        <div className="pt-2 border-t border-[#CDE5DC]/55 flex items-center justify-between text-[10px] text-[#0A7A5E] font-medium">
          <span>موثق ومعتمد رسمياً</span>
          <span>✓ 100%</span>
        </div>
      </motion.div>
    ))}
  </div>
</section>
        {/* ================= 3. السيرة والخبرات الأكاديمية (Tabs تفاعلية) ================= */}
        <section className="p-8 lg:p-10 rounded-[2.5rem] bg-white border border-[#D5EAE2] shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs bg-[#EAF4F0] text-[#0A7A5E] px-3.5 py-1.5 rounded-full border border-[#CDE5DC] font-bold">
                // فلسفة الرعاية المتقدمة
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1A2E26] mt-3">
                فلسفة الرعاية والركائز الطبية الاستثنائية
              </h2>
              <p className="text-[#587368] text-xs font-light mt-1">
                لماذا تجعل استشارة طبيب واحد محترف خيارك الأفضل للشفاء والتطور
                الصحي المستدام.
              </p>
            </div>

            {/* أزرار التبويب بألوان متناسقة */}
            <div className="flex flex-wrap gap-2 bg-[#F5F9F6] p-1.5 rounded-2xl border border-[#D5EAE2]">
              {doctorPillars.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === idx
                      ? "bg-[#0A7A5E] text-white shadow-sm"
                      : "text-[#4A6358] hover:text-[#1A2E26]"
                  }`}
                >
                  الركيزة 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-12 gap-6 
              items-stretch p-6 lg:p-8 rounded-3xl 
              bg-gradient-to-br from-[#F9FCFA]
               via-[#F5F9F6] to-[#EAF4F0] 
               border border-[#D5EAE2]"
            >
              {/* القسم الرئيسي للمحتوى */}
              <div
                className="lg:col-span-7 space-y-4
               flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span
                    className="text-xs bg-white 
                  text-[#0A7A5E] px-3 py-1 rounded-full border border-[#CDE5DC] font-semibold inline-block"
                  >
                    {doctorPillars[activeTab].badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1A2E26]">
                    {doctorPillars[activeTab].title}
                  </h3>
                  <p className="text-sm text-[#4A6358] leading-relaxed font-light">
                    {doctorPillars[activeTab].desc}
                  </p>
                </div>

                {/* بيانات إضافية مكثفة وفيرة داخل التبويب */}
                <div className="grid sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#CDE5DC]">
                  <div className="flex items-center gap-2 text-xs text-[#1A2E26] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
                    <span>مراجعة شاملة لجميع الفحوصات</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2E26] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
                    <span>خطة علاجية مخصصة ومحدثة</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2E26] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
                    <span>تواصل مباشر بدون وسطاء</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2E26] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0A7A5E]" />
                    <span>متابعة دقيقة لنسب التعافي</span>
                  </div>
                </div>
              </div>

              {/* القسم الجانبي المؤكد للجودة والمقاييس */}
              <div className="lg:col-span-5 grid grid-rows-3 gap-3">
                <div className="p-4 rounded-2xl bg-white border border-[#CDE5DC] flex items-center justify-between shadow-xs">
                  <div className="text-xs text-[#587368]">
                    معيار الجودة الشخصية
                  </div>
                  <div className="text-sm font-bold text-[#0A7A5E]">
                    إشراف استشاري 100%
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#CDE5DC] flex items-center justify-between shadow-xs">
                  <div className="text-xs text-[#587368]">
                    مستوى الرضا التراكمي
                  </div>
                  <div className="text-sm font-bold text-[#0A7A5E]">
                    99.9% رضا العملاء
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#CDE5DC] flex items-center justify-between shadow-xs">
                  <div className="text-xs text-[#587368]">
                    سرعة الاستجابة والدعم
                  </div>
                  <div className="text-sm font-bold text-[#0A7A5E]">
                    استجابة فورية 24/7
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ================= 4. تخصصات ودقائق مجالات الطبيب ================= */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#1A2E26]">
              مجالات الاختصاص الدقيق والخدمات السريرية الشاملة
            </h2>
            <p className="text-[#587368] text-sm font-light">
              خبرة متكاملة تغطي كافة جوانب الطب الباطني، المزمن، والأمراض
              المتقدمة بأعلى معايير الدقة.
            </p>
          </div>

          {/* ديزاين جديد كلياً: شبكة بطاقات متعددة ومتنوعة التفاصيل */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                code: "SPEC-01",
                title: "متابعة وتشخيص أمراض السكري",
                desc: "إدارة شاملة لمرض السكري من النوعين الأول والثاني، وتعديل الجرعات بدقة عبر الفحوصات الدورية.",
                tag: "الأكثر طلباً",
              },
              {
                code: "SPEC-02",
                title: "علاج وقياس ضغط الدم المزمن",
                desc: "برامج مخصصة لضبط ضغط الدم المرتفع ومنع المضاعفات القلبية والمرضية المبكرة.",
                tag: "رعاية وقائية",
              },
              {
                code: "SPEC-03",
                title: "أمراض الجهاز الهضمي والقولون",
                desc: "تشخيص وعلاج قرحة المعدة، التهابات القولون العصبي، ومشاكل عسر الهضم المزمن.",
                tag: "تشخيص رقمي",
              },
              {
                code: "SPEC-04",
                title: "أمراض الكبد والفيروسات",
                desc: "متابعة كفاءة وظائف الكبد، علاج الكبد الدهني، وفحوصات الأمراض الفيروسية ببروتوكولات حديثة.",
                tag: "عناية متقدمة",
              },
              {
                code: "SPEC-05",
                title: "أمراض الكلى والمسالك البولية",
                desc: "فحص وظائف الكلى الدورية، تقييم حالات الزلال والالتهابات المتكررة، وتنظيم السوائل.",
                tag: "توجيه طبي",
              },
              {
                code: "SPEC-06",
                title: "حالات فقر الدم (الأنيميا) وسوء التغذية",
                desc: "علاج كافة أنواع الأنيميا ونقص الفيتامينات الأساسية ببرامج غذائية ودوائية دقيقة.",
                tag: "استشارات تغذية",
              },
              {
                code: "SPEC-07",
                title: "أمراض الصدر والحساسية المزمنة",
                desc: "متابعة حالات الربو الشعبي، التهابات الشعب الهوائية، وضيق التنفس المزمن.",
                tag: "تنفس آمن",
              },
              {
                code: "SPEC-08",
                title: "أمراض الغدد الصماء والاضطرابات الهرمونية",
                desc: "تشخيص اضطرابات الغدة الدرقية، الغدة الجار درقية، والمشاكل الهرمونية العامة.",
                tag: "توازن هرموني",
              },
              {
                code: "SPEC-09",
                title: "الرعاية الوقائية والفحص الشامل",
                desc: "باقات متكاملة لفحص الجسم بالكامل واكتشاف الأمراض في مراحلها المبكرة للوقاية التامة.",
                tag: "فحص دوري",
              },
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-6 rounded-[2rem] bg-white border 
        border-[#D5EAE2] backdrop-blur-xl flex flex-col
         justify-between space-y-4 shadow-sm group
          hover:border-[#0A7A5E] transition-all"
              >
                <div className="flex justify-between items-center">
                  <span
                    className="text-xs text-[#0A7A5E] 
          bg-[#EAF4F0] px-3 py-1 rounded-full border
           border-[#CDE5DC] "
                  >
                    {srv.code}
                  </span>
                  <span className="text-[10px] text-[#587368]  bg-[#F9FCFA] px-2.5 py-0.5 rounded-md border border-[#CDE5DC]">
                    {srv.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-[#0A7A5E] shrink-0" />
                    <h3
                      className="text-base font-bold text-[#1A2E26] 
            group-hover:text-[#0A7A5E] transition-colors"
                    >
                      {srv.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#587368] leading-relaxed pr-7">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#EAF4F0] flex justify-between items-center text-[11px] text-[#0A7A5E] font-medium">
                  <span>متوفر ضمن الخطة العلاجية</span>
                  <span>←</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* ================= 5. أوقات العمل وجدولة المواعيد الشخصية ================= */}
        <section className="space-y-6">
          {/* بطاقة العنوان واللوكيشن الرئيسية الفخمة */}
          <div className="p-8 rounded-[2.5rem] bg-white border border-[#D5EAE2] shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-3 text-center md:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4F0] border border-[#CDE5DC] text-[#0A7A5E] text-xs font-mono">
                <span>موقع العيادة الجغرافي // اللوكيشن الرسمي</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#1A2E26]">
                عنوان العيادة وطرق الوصول السريع
              </h2>
              <p className="text-sm text-[#587368] font-light leading-relaxed max-w-xl">
                القاهرة، المعادي، شارع النصر الرئيسي، برج الفيروز الطبي، الدور
                الثالث، بجوار محطة مترو المعادي.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="px-5 py-3 rounded-2xl bg-[#EAF4F0] border border-[#CDE5DC] text-center">
                <div className="text-xs text-[#587368]">خدمة ركن السيارات</div>
                <div className="text-sm font-bold text-[#1A2E26]">
                  متاحة مجاناً للعملاء
                </div>
              </div>
              <button className="bg-[#1A2E26] text-white font-bold px-6 py-3.5 rounded-2xl shadow-md text-sm hover:bg-[#0A7A5E] transition whitespace-nowrap">
                قاقوس (Google Maps)
              </button>
            </div>
          </div>

          {/* شبكة الأيام، الأوقات، والخصومات المكثفة بتصميم مختلف بالكامل */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* بطاقة الأيام وأوقات العمل التفصيلية */}
            <div className="lg:col-span-6 p-8 rounded-[2.5rem] bg-white border border-[#D5EAE2] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF4F0] border border-[#CDE5DC] flex items-center justify-center text-[#0A7A5E]">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#1A2E26]">
                  جدول الأيام وأوقات الاستقبال الكاملة
                </h2>
                <p className="text-sm text-[#587368] font-light">
                  نستقبلكم طوال أيام الأسبوع لضمان خدمتكم في الأوقات التي تناسب
                  جدولكم تماماً.
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F9FCFA] border border-[#CDE5DC]">
                  <span className="text-[#587368] font-medium">
                    السبت (أول الاسبوع):
                  </span>
                  <span className="font-bold text-[#1A2E26]">
                    09:00 صباحاً - 10:00 مساءً
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F9FCFA] border border-[#CDE5DC]">
                  <span className="text-[#587368] font-medium">الأحد:</span>
                  <span className="font-bold text-[#1A2E26]">
                    09:00 صباحاً - 10:00 مساءً
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F9FCFA] border border-[#CDE5DC]">
                  <span className="text-[#587368] font-medium">الاثنين:</span>
                  <span className="font-bold text-[#1A2E26]">
                    09:00 صباحاً - 10:00 مساءً
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F9FCFA] border border-[#CDE5DC]">
                  <span className="text-[#587368] font-medium">الثلاثاء:</span>
                  <span className="font-bold text-[#1A2E26]">
                    09:00 صباحاً - 10:00 مساءً
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F9FCFA] border border-[#CDE5DC]">
                  <span className="text-[#587368] font-medium">الأربعاء:</span>
                  <span className="font-bold text-[#1A2E26]">
                    09:00 صباحاً - 10:00 مساءً
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F9FCFA] border border-[#CDE5DC]">
                  <span className="text-[#587368] font-medium">
                    الخميس (ختام الأسبوع):
                  </span>
                  <span className="font-bold text-[#1A2E26]">
                    09:00 صباحاً - 11:30 مساءً
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#EAF4F0] border border-[#CDE5DC]">
                  <span className="text-[#1A2E26] font-bold">
                    الجمعة (عيادة الطوارئ والمتابعة):
                  </span>
                  <span className="font-bold text-[#0A7A5E]">
                    02:00 ظهراً - 09:00 مساءً
                  </span>
                </div>
              </div>
            </div>

            {/* بطاقة الخصومات والعروض الكثيرة والحصرية */}
            <div className="lg:col-span-6 p-8 rounded-[2.5rem] bg-gradient-to-br from-white via-[#F5F9F6] to-[#EAF4F0] border border-[#D5EAE2] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#CDE5DC] flex items-center justify-center text-[#0A7A5E]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#1A2E26]">
                  باقات الخصومات والعروض الكبرى
                </h2>
                <p className="text-sm text-[#587368] font-light">
                  استفد من التخفيضات الاستثنائية المتاحة طوال الشهر لجميع المرضى
                  والعملاء.
                </p>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-[#CDE5DC]">
                  <span className="text-[#1A2E26] font-medium">
                    خصم الحجز المبكر الأسبوعي:
                  </span>
                  <span className="text-emerald-700 bg-[#EAF4F0] px-2.5 py-1 rounded-full border border-[#CDE5DC] font-bold text-[11px]">
                    40% خصم
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-[#CDE5DC]">
                  <span className="text-[#1A2E26] font-medium">
                    خصم باقة الكشف الشامل والعائلة:
                  </span>
                  <span className="text-emerald-700 bg-[#EAF4F0] px-2.5 py-1 rounded-full border border-[#CDE5DC] font-bold text-[11px]">
                    35% خصم
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-[#CDE5DC]">
                  <span className="text-[#1A2E26] font-medium">
                    أيام الاثنين والأربعاء (ساعات التخفيض):
                  </span>
                  <span className="text-emerald-700 bg-[#EAF4F0] px-2.5 py-1 rounded-full border border-[#CDE5DC] font-bold text-[11px]">
                    كشف مجاني تام
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-[#CDE5DC]">
                  <span className="text-[#1A2E26] font-medium">
                    خصم خاص لكبار السن وأصحاب الهمم:
                  </span>
                  <span className="text-emerald-700 bg-[#EAF4F0] px-2.5 py-1 rounded-full border border-[#CDE5DC] font-bold text-[11px]">
                    50% خصم
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-[#CDE5DC]">
                  <span className="text-[#1A2E26] font-medium">
                    متابعة ما بعد الفحوصات الطبية:
                  </span>
                  <span className="text-emerald-700 bg-[#EAF4F0] px-2.5 py-1 rounded-full border border-[#CDE5DC] font-bold text-[11px]">
                    هدية مجانية
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white border border-[#CDE5DC]">
                  <span className="text-[#1A2E26] font-medium">
                    خصم التحاليل التابعة للعيادة:
                  </span>
                  <span className="text-emerald-700 bg-[#EAF4F0] px-2.5 py-1 rounded-full border border-[#CDE5DC] font-bold text-[11px]">
                    25% خصم
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#1A2E26] text-white font-bold py-3.5 rounded-2xl shadow-md text-sm hover:bg-[#0A7A5E] transition">
                احجز الآن واستفيد من كافة الخصومات
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
