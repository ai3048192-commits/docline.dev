import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Heart, ArrowRight, RotateCcw, Sparkles, 
  Flame, Droplets, ShieldCheck, Zap, Gauge, FileText, CheckCircle2 
} from 'lucide-react';

const AdvancedHealthCalculator = () => {
  // --- مدخلات البيانات الكثيرة ---
  const [age, setAge] = useState<number | ''>(32);
  const [weight, setWeight] = useState<number | ''>(82);
  const [height, setHeight] = useState<number | ''>(174);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.375); // خفيف التمارين
  const [sleepHours, setSleepHours] = useState<number>(6); // ساعات النوم
  const [waterIntake, setWaterIntake] = useState<number>(1.5); // لتر الماء يومياً

  // --- حالات النتائج ---
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [results, setResults] = useState({
    bmi: 0,
    bmr: 0,
    tdee: 0,
    bioAge: 0,
    metabolismEfficiency: 0,
    waterScore: '',
    sleepScore: '',
    adviceList: [] as string[]
  });

  // --- خيارات النشاط ---
  const activityLevels = [
    { label: "خامل تماماً (عمل مكتبي)", value: 1.2 },
    { label: "خفيف النشاط (تمارين خفيفة 1-3 أيام)", value: 1.375 },
    { label: "نشيط متوسط (تمارين 3-5 أيام)", value: 1.55 },
    { label: "نشيط جداً (تمارين يومية مكثفة)", value: 1.725 },
  ];

  // --- خوارزمية الحساب المتقدمة ---
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !weight || !height) return;

    const numAge = Number(age);
    const numWeight = Number(weight);
    const numHeight = Number(height);

    // 1. حساب مؤشر كتلة الجسم BMI
    const heightM = numHeight / 100;
    const bmiVal = Number((numWeight / (heightM * heightM)).toFixed(1));

    // 2. حساب معدل الأيض الأساسي BMR (معادلة Mifflin-St Jeor)
    let bmrVal = (10 * numWeight) + (6.25 * numHeight) - (5 * numAge);
    bmrVal = gender === 'male' ? bmrVal + 5 : bmrVal - 161;

    // 3. السعرات الكلية المستهلكة TDEE
    const tdeeVal = Math.round(bmrVal * activity);

    // 4. العمر البيولوجي التقديري
    let bioAgeVal = numAge;
    if (bmiVal > 25) bioAgeVal += Math.round((bmiVal - 25) * 0.9);
    if (sleepHours < 7) bioAgeVal += 2;
    if (waterIntake < 2) bioAgeVal += 1;
    if (activity === 1.2) bioAgeVal += 3;

    // 5. كفاءة الأيض %
    let metaEff = 80;
    if (bmiVal >= 18.5 && bmiVal <= 24.9) metaEff += 15;
    else metaEff -= Math.abs(bmiVal - 22) * 2;
    if (activity >= 1.55) metaEff += 10;
    if (sleepHours < 6) metaEff -= 10;
    metaEff = Math.min(Math.max(Math.round(metaEff), 35), 98);

    // 6. توليد التوصيات الذكية
    const advices: string[] = [];
    if (bmiVal > 25) advices.push("مؤشر كتلة الجسم يشير لزيادة في الدهون الحشوية، مما يضغط على كفاءة الأيض.");
    else if (bmiVal < 18.5) advices.push("وزنك أقل من المعدل الصحي الطبيعي، وتحتاج لبرنامج بناء كتلة عضلية صحية.");
    
    if (sleepHours < 7) advices.push("نقص ساعات النوم يؤثر سلبياً على هرمونات الحرق (اللبتين والجرلين) ويزيد مقاومة الإنسولين.");
    if (waterIntake < 2.5) advices.push("معدل شرب الماء لديك منخفض، وهو المسبب الرئيسي لبطء عمليات التخلص من السموم وحرق الدهون.");
    if (activity === 1.2) advices.push("نمط الحياة الخامل يرفع من عمرك البيولوجي، ونقترح إدخال نشاط حركي بسيط منتظم.");

    if (advices.length === 0) {
      advices.push("مؤشراتك العامة ممتازة! لديك أساس قوي للوصول إلى أقصى درجات الحيوية المستدامة.");
    }

    setResults({
      bmi: bmiVal,
      bmr: Math.round(bmrVal),
      tdee: tdeeVal,
      bioAge: bioAgeVal,
      metabolismEfficiency: metaEff,
      waterScore: waterIntake < 2 ? 'منخفض (يحتاج تحسين)' : 'ممتاز وكافي',
      sleepScore: sleepHours < 7 ? 'غير كافٍ للإصلاح الخلوي' : 'مثالي لعملية الاستشفاء',
      adviceList: advices
    });

    setIsCalculated(true);
  };

  const handleReset = () => {
    setIsCalculated(false);
  };

  return (
    <section className="relative py-32 px-6 bg-[#FAF9F6] text-stone-900 overflow-hidden" dir="rtl">
      
      {/* إضاءات خلفية بيضاء ونعومة بيج فاخرة */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-100/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* رأس القسم */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 text-xs font-mono tracking-widest shadow-sm">
            <Sparkles size={14} />
            <span>CLINICAL BIO-METRIC DIAGNOSTIC ENGINE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-950">
            لوحة التقييم الحيوي <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">الشاملة</span>
          </h2>
          <p className="text-stone-600 text-base md:text-lg">
            أدخل بياناتك التفصيلية لتحصل على تقرير طبي مبدئي يحلل كفاءة الأيض، العمر البيولوجي، واحتياجاتك الحيوية بدقة.
          </p>
        </div>

        {/* الحاوية الرئيسية */}
        <div className="bg-white border border-stone-200/90 rounded-[2.5rem] p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isCalculated ? (
              /* نموذج البيانات الكثيرة والمتكاملة */
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleCalculate} 
                className="space-y-8"
              >
                {/* الصف الأول: الجنس والعمر والوزن والطول */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* الجنس */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-800">الجنس</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`py-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${gender === 'male' ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/10' : 'bg-stone-50 border-stone-200 text-stone-600'}`}
                      >
                        ذكر
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`py-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${gender === 'female' ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/10' : 'bg-stone-50 border-stone-200 text-stone-600'}`}
                      >
                        أنثى
                      </button>
                    </div>
                  </div>

                  {/* العمر */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-800">العمر (بالسنوات)</label>
                    <input 
                      type="number" min="15" max="100"
                      value={age}
                      onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 font-bold text-base focus:border-emerald-600 focus:bg-white outline-none transition-all"
                      required
                    />
                  </div>

                  {/* الوزن */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-800">الوزن الحالي (كجم)</label>
                    <input 
                      type="number" min="30" max="250"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 font-bold text-base focus:border-emerald-600 focus:bg-white outline-none transition-all"
                      required
                    />
                  </div>

                  {/* الطول */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-800">الطول (سم)</label>
                    <input 
                      type="number" min="100" max="230"
                      value={height}
                      onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 font-bold text-base focus:border-emerald-600 focus:bg-white outline-none transition-all"
                      required
                    />
                  </div>

                </div>

                {/* الصف الثاني: معدل النشاط اليومي */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-stone-800">معدل النشاط والحركة الأسبوعي</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {activityLevels.map((lvl, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setActivity(lvl.value)}
                        className={`p-3.5 rounded-xl border text-right font-medium text-xs transition-all cursor-pointer ${
                          activity === lvl.value 
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/10 shadow-sm' 
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* الصف الثالث: تفاصيل إضافية (ساعات النوم وشرب الماء) لزيادة غنى البيانات */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* ساعات النوم */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-800">متوسط ساعات النوم يومياً</label>
                    <select
                      value={sleepHours}
                      onChange={(e) => setSleepHours(Number(e.target.value))}
                      className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 font-bold text-sm focus:border-emerald-600 focus:bg-white outline-none transition-all cursor-pointer"
                    >
                      <option value={5}>أقل من 6 ساعات (غير كافٍ)</option>
                      <option value={6}>6 إلى 7 ساعات (متوسط)</option>
                      <option value={7}>7 إلى 8 ساعات (جيد)</option>
                      <option value={9}>8 ساعات فأكثر (مثالي)</option>
                    </select>
                  </div>

                  {/* شرب الماء */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-800">معدل شرب الماء اليومي</label>
                    <select
                      value={waterIntake}
                      onChange={(e) => setWaterIntake(Number(e.target.value))}
                      className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 font-bold text-sm focus:border-emerald-600 focus:bg-white outline-none transition-all cursor-pointer"
                    >
                      <option value={1.0}>أقل من 1.5 لتر (قليل جداً)</option>
                      <option value={1.5}>1.5 إلى 2 لتر (متوسط)</option>
                      <option value={2.5}>أكثر من 2.5 لتر (ممتاز)</option>
                    </select>
                  </div>

                </div>

                {/* زر الإرسال للحساب */}
                <button
                  type="submit"
                  className="w-full py-4.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-600/20 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Gauge size={22} />
                  <span>تحليل وعرض التقرير الحيوي الشامل</span>
                  <ArrowRight size={20} />
                </button>
              </motion.form>
            ) : (
              /* لوحة نتائج التقرير الشامل والمكثفة بالبيانات */
              <motion.div 
                key="results"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* شبكة المؤشرات الأربعة الرئيسية */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* العمر البيولوجي */}
                  <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-center space-y-1">
                    <span className="text-stone-500 text-xs font-bold">العمر البيولوجي المقدر</span>
                    <div className="text-3xl font-black text-emerald-700">{results.bioAge} <span className="text-xs text-stone-400 font-normal">سنة</span></div>
                    <p className="text-[11px] text-stone-500">مقارنة بعمرك ({age} سنة)</p>
                  </div>

                  {/* مؤشر كتلة الجسم BMI */}
                  <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-center space-y-1">
                    <span className="text-stone-500 text-xs font-bold">مؤشر كتلة الجسم (BMI)</span>
                    <div className="text-3xl font-black text-teal-700">{results.bmi}</div>
                    <p className="text-[11px] text-stone-500">
                      {results.bmi < 18.5 ? 'نحافة' : results.bmi <= 24.9 ? 'وزن مثالي' : results.bmi <= 29.9 ? 'زيادة وزن' : 'سمنة'}
                    </p>
                  </div>

                  {/* كفاءة الأيض */}
                  <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-center space-y-1">
                    <span className="text-stone-500 text-xs font-bold">كفاءة الأيض والحرق</span>
                    <div className="text-3xl font-black text-cyan-700">{results.metabolismEfficiency}%</div>
                    <p className="text-[11px] text-stone-500">معدل نشاط الخلايا للطاقة</p>
                  </div>

                  {/* الاحتياج اليومي من السعرات TDEE */}
                  <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-center space-y-1">
                    <span className="text-stone-500 text-xs font-bold">حرق السعرات اليومي (TDEE)</span>
                    <div className="text-3xl font-black text-amber-600">{results.tdee} <span className="text-xs text-stone-400 font-normal">سعرة</span></div>
                    <p className="text-[11px] text-stone-500">استهلاك الجسم الكلي</p>
                  </div>

                </div>

                {/* قسم التحليلات والتوصيات الطبية المخصصة */}
                <div className="bg-emerald-50/60 border border-emerald-200/80 p-6 rounded-2xl space-y-4">
                  <h4 className="font-extrabold text-emerald-950 flex items-center gap-2 text-base">
                    <ShieldCheck size={20} className="text-emerald-600" />
                    تحليل الأداء الحيوي والملاحظات الإكلينيكية:
                  </h4>
                  <ul className="space-y-2.5">
                    {results.adviceList.map((adv, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-stone-700 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-1" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* أزرار الإجراء النهائي (الهدف: دفع العميل لنموذج الحجز) */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="#booking-section"
                    className="flex-1 py-4.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
                  >
                    <span>احجز استشارتك مع الطبيب لتعديل هذه المؤشرات</span>
                    <ArrowRight size={18} />
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-4.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <RotateCcw size={16} />
                    <span>تعديل المدخلات</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default AdvancedHealthCalculator;