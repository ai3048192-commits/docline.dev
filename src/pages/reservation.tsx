import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  User,
  Phone,
  ChevronDown,
  CheckCircle,
  Activity,
  Scale,
  Ruler,
  UserCircle,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Mail,
  MapPin,
  Heart,
  Pill,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Reservation: React.FC = () => {
  const navigate = useNavigate();
  
  // حالة البيانات الشاملة لملف المريض الاحترافي
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "ذكر",
    age: "",
    weight: "",
    height: "",
    bloodType: "A+",
    city: "القاهرة",
    date: "",
    timeSlot: "05:00 م - 06:00 م",
    consultationType: "كشف جديد",
    customConsultation: "", // حقل مخصص لو اختار "أخرى"
    chronicDiseases: "",
    currentMedications: "",
    allergies: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("تم حفظ بيانات المريض الشاملة:", formData);
    navigate("/");
  };

  return (
    <section className="min-h-screen py-28 px-4 md:px-8 bg-gradient-to-b from-[#FAF7F2] via-stone-100/50 to-[#FAF7F2] relative overflow-hidden flex items-center justify-center" dir="rtl">
      
      {/* خلفيات جمالية تفاعلية متطورة */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl w-full relative z-10"
      >
        <div className="bg-white/90 backdrop-blur-3xl p-6 md:p-12 rounded-[3rem] border border-stone-200/90 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] ring-1 ring-stone-900/5">
          
          {/* رأس الصفحة الفاخر */}
          <div className="mb-10 border-b border-stone-100 pb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black border border-emerald-100 shadow-xs">
                <Sparkles size={14} className="text-emerald-600" />
                <span>حجز موعد طبي متقدم ومؤمن</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#2D3436] tracking-tight">
                استمارة الملف الطبي الشامل
              </h2>
              <p className="text-stone-500 text-sm font-medium leading-relaxed max-w-2xl">
                نظام حجز ذكي مصمم لجمع كافة التفاصيل الطبية والبدنية بدقة عالية لضمان تقديم أفضل رعاية صحية وتشخيص متكامل من قبل الاستشاري.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200/60 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-stone-800 font-bold text-xs">سري تماماً</h4>
                <p className="text-stone-400 text-[11px]">بياناتك محمية بمعايير أمان عالية</p>
              </div>
            </div>
          </div>

          {/* الفورم الرئيسي */}
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* 1. قسم المعلومات الشخصية الأساسية */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <User size={18} className="text-emerald-700" />
                <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider">
                  أولاً: البيانات الشخصية وطرق الاتصال
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    اسم المريض الرباعي <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <User className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="محمد أحمد محمود..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    رقم الهاتف المحمول <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Phone className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="010xxxxxxxx"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    البريد الإلكتروني (اختياري)
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="name@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    النوع <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none text-sm font-medium text-stone-800 cursor-pointer"
                    >
                      <option value="ذكر">ذكر</option>
                      <option value="أنثى">أنثى</option>
                    </select>
                    <ChevronDown className="absolute left-4 text-stone-400 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    المدينة / المحافظة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <MapPin className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="القاهرة، الجيزة..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    فصيلة الدم
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none text-sm font-medium text-stone-800 cursor-pointer"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="لا أعرف">لا أعرف تحديداً</option>
                    </select>
                    <ChevronDown className="absolute left-4 text-stone-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. قسم المؤشرات الحيوية والقياسات */}
            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <HeartPulse size={18} className="text-emerald-700" />
                <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider">
                  ثانياً: المؤشرات الحيوية والقياسات الجسدية
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    العمر (بالسنوات) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <UserCircle className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      required
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="مثال: 32"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    الوزن الحالي (كجم) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Scale className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      required
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="مثال: 80"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    الطول (سم) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Ruler className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      required
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="مثال: 178"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. قسم تفاصيل الموعد واستشارة الطبيب */}
            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <Calendar size={18} className="text-emerald-700" />
                <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider">
                  ثالثاً: تفاصيل موعد الاستشارة ونوع الكشف
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    تاريخ الموعد المقترح <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Calendar className="absolute right-4 text-emerald-700" size={18} />
                    <input
                      required
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-12 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                      placeholder="مثلاً: 15/06/2026"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    الفترة الزمنية المفضلة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none text-sm font-medium text-stone-800 cursor-pointer"
                    >
                      <option value="02:00 م - 03:00 م">02:00 م - 03:00 م</option>
                      <option value="03:00 م - 04:00 م">03:00 م - 04:00 م</option>
                      <option value="04:00 م - 05:00 م">04:00 م - 05:00 م</option>
                      <option value="05:00 م - 06:00 م">05:00 م - 06:00 م</option>
                      <option value="07:00 م - 08:00 م">07:00 م - 08:00 م</option>
                      <option value="08:00 م - 09:00 م">08:00 م - 09:00 م</option>
                    </select>
                    <ChevronDown className="absolute left-4 text-stone-400 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    نوع الاستشارة الطبية <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-stone-200/90 p-4 pr-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none text-sm font-medium text-stone-800 cursor-pointer"
                    >
                      <option value="كشف جديد">كشف جديد (استشارة أولية شاملة)</option>
                      <option value="متابعة دورية">متابعة دورية وفحص نتائج التحاليل</option>
                      <option value="استشارة تغذية">استشارة تغذية علاجية وعلاج السمنة</option>
                      <option value="أمراض مزمنة">متابعة أمراض مزمنة (ضغط الدم / السكري)</option>
                      <option value="أخرى">أخرى (تحديد نوع الاستشارة يدوياً)</option>
                    </select>
                    <ChevronDown className="absolute left-4 text-stone-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              {/* حقل إضافي يظهر بذكاء إذا اختار المستخدم "أخرى" */}
              <AnimatePresence>
                {formData.consultationType === "أخرى" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-2"
                  >
                    <div className="space-y-2 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                      <label className="text-xs font-extrabold text-emerald-900 px-1 flex items-center gap-1.5">
                        <HelpCircle size={15} className="text-emerald-700" />
                        <span>يرجى كتابة نوع الاستشارة الخاصة بك بدقة <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        required={formData.consultationType === "أخرى"}
                        type="text"
                        name="customConsultation"
                        value={formData.customConsultation}
                        onChange={handleChange}
                        className="w-full bg-white border border-emerald-200 p-4 rounded-xl outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                        placeholder="مثال: استشارة باطنة عامة / فحص أعصاب..."
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. قسم التاريخ المرضي والأدوية */}
            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <Activity size={18} className="text-emerald-700" />
                <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider">
                  رابعاً: التاريخ المرضي، الأدوية الحالية، والحساسية
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1 flex items-center gap-1.5">
                    <Heart size={14} className="text-emerald-700" />
                    <span>هل تعاني من أمراض مزمنة؟</span>
                  </label>
                  <textarea
                    rows={3}
                    name="chronicDiseases"
                    value={formData.chronicDiseases}
                    onChange={handleChange}
                    className="w-full bg-stone-50/80 border border-stone-200/90 p-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                    placeholder="مثل: ارتفاع ضغط الدم، السكري، أمراض القلب، الغدة الدرقية..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1 flex items-center gap-1.5">
                    <Pill size={14} className="text-emerald-700" />
                    <span>الأدوية الحالية التي تتناولها بانتظام</span>
                  </label>
                  <textarea
                    rows={3}
                    name="currentMedications"
                    value={formData.currentMedications}
                    onChange={handleChange}
                    className="w-full bg-stone-50/80 border border-stone-200/90 p-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                    placeholder="اكتب أسماء الأدوية والجرعات إن وجدت..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    هل توجد حساسية تجاه أدوية أو أطعمة معينة؟
                  </label>
                  <textarea
                    rows={2}
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="w-full bg-stone-50/80 border border-stone-200/90 p-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                    placeholder="مثل: حساسية البنسلين، أدوية السلفا، المكسرات..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-stone-600 px-1">
                    ملاحظات إضافية أو أعراض تود إخبار الطبيب بها
                  </label>
                  <textarea
                    rows={2}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full bg-stone-50/80 border border-stone-200/90 p-4 rounded-2xl outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-stone-800"
                    placeholder="اكتب باختصار سبب زيارتك الرئيسي..."
                  />
                </div>
              </div>
            </div>

            {/* زر الحفظ والتأكيد النهائي */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-600 text-white font-black text-base md:text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-emerald-900/30 flex items-center justify-center gap-3 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer border border-white/20"
              >
                <CheckCircle size={24} />
                <span>حفظ الملف الطبي وتأكيد حجز الموعد الفوري</span>
              </button>
            </div>

          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Reservation;