import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radio, Calendar, Clock, Users, Send, 
  CheckCircle2, Sparkles, MessageSquarePlus, ShieldAlert,
  FileText, ArrowRight, Play, Headphones, HelpCircle, 
  Activity, Stethoscope, BookmarkCheck, ChevronLeft, Volume2
} from 'lucide-react';

const UltimateDoctorLiveSpace = () => {
  // --- حالات التفاعل ---
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [patientQuestion, setPatientQuestion] = useState('');
  const [patientName, setPatientName] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('مقاومة الإنسولين وأيض السكر');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'library'>('upcoming');

  // --- بيانات غنية ومكثفة ---
  const upcomingSpaces = [
    {
      id: 1,
      title: "التعايش الآمن مع مقاومة الانسولين وتخفيض السكر التراكمي بدون حرمان",
      doctor: "د. أحمد الشريف",
      role: "استشاري الأمراض الباطنة والسكري وغدد صماء",
      date: "اليوم، السبت",
      time: "9:00 مساءً",
      listenersCount: 420,
      status: "مباشر قريباً",
      category: "الغدد الصماء والأيض",
      description: "جلسة افتراضية مفتوحة للإجابة على كافة استفساراتكم حول أعراض التعب المزمن، ضبط السكر، وإيقاف تدهور الخلايا."
    },
    {
      id: 2,
      title: "أسرار القولون العصبي الخفي: كيف تفرق بينه وبين سوء الامتصاص الحاد؟",
      doctor: "د. أحمد الشريف",
      role: "استشاري الأمراض الباطنة والجهاز الهضمي",
      date: "الثلاثاء القادم",
      time: "8:30 مساءً",
      listenersCount: 310,
      status: "مجدول",
      category: "الجهاز الهضمي والمناعة",
      description: "مناقشة الأسباب الجذرية للانتفاخات المزمنة، حساسية الأطعمة الخفية، وطرق إعادة بناء جدار الأمعاء."
    },
    {
      id: 3,
      title: "ارتفاع الضغط الصامت وعلاقته باحتباس السوائل ووظائف الكلى",
      doctor: "د. أحمد الشريف",
      role: "استشاري الأمراض الباطنة",
      date: "الخميس القادم",
      time: "9:00 مساءً",
      listenersCount: 280,
      status: "مجدول",
      category: "القلب والكلى",
      description: "قراءة في قراءات الضغط اليومية، متى تكون مقلقة؟ وكيف تحمي الأوعية الدموية بطرق طبيعية وطبية دقيقة."
    }
  ];

  const archivedLibrary = [
    {
      id: 101,
      title: "الضغط المرتفع الصامت: الأسباب الطبية وطرق السيطرة بالأدوية الحديثة",
      duration: "45 دقيقة",
      listens: "1.4k استماع حي",
      date: "منذ 3 أيام",
      category: "القلب والأوعية",
      icon: Activity,
      highlights: ["جرعات الأدوية الآمنة", "تأثير الأملاح الخفية", "إرشادات الطوارئ المنزلية"]
    },
    {
      id: 102,
      title: "نقص فيتامين د ومخزون الحديد.. العلاقة الخفية بالإرهاق المستمر وفقدان التركيز",
      duration: "52 دقيقة",
      listens: "2.8k استماع حي",
      date: "منذ أسبوع",
      category: "الفيتامينات والأيض",
      icon: Headphones,
      highlights: ["الفرق بين الأنواع المختلفة", "أفضل وقت للامتصاص", "الجرعات التداخلية الخاطئة"]
    },
    {
      id: 103,
      title: "إدارة الكوليسترول الضار والدهون الثلاثية دون أعراض جانبية للعضلات",
      duration: "40 دقيقة",
      listens: "3.1k استماع حي",
      date: "منذ أسبوعين",
      category: "الدهون والقلب",
      icon: ShieldAlert,
      highlights: ["حماية الكبد", "التحاليل الدورية المطلوبة", "النظام الغذائي المرافق"]
    }
  ];

  const presetTopics = [
    "مقاومة الإنسولين وأيض السكر",
    "القولون العصبي والانتفاخات",
    "ارتفاع ضغط الدم والدوخة",
    "خمول الغدة الدرقية وزيادة الوزن",
    "نقص الحديد ومخزون الفيتامينات",
    "الكبد الدهني والسموم الحشوية"
  ];

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientQuestion.trim()) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsQuestionModalOpen(false);
      setPatientQuestion('');
      setPatientName('');
      setCustomTopic('');
    }, 3000);
  };

  return (
    <section className="relative py-32 px-6 bg-[#FAF9F6] text-stone-900 overflow-hidden" dir="rtl">
      
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-100/65 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 text-xs tracking-widest shadow-sm">
            <Sparkles size={14} className="text-emerald-600" />
            <span>CLINICAL LIVE Q&A & AUDIO HUB</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-950">
            السبيسم الطبي المباشر <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">وجداول الحوار</span>
          </h2>
          <p className="text-stone-600 text-base md:text-lg">
            منصة صوتية حية تتيح لك مناقشة طبيبك مباشرة، طرح أسئلتك الباطنية بحرية، والاطلاع على أرشيف الحلقات الإكلينيكية بدقة متناهية.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white border border-stone-200 p-1.5 rounded-2xl shadow-sm inline-flex gap-2">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'upcoming' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Radio size={16} />
              <span>السبيسمات القادمة والمباشرة ({upcomingSpaces.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'library' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Headphones size={16} />
              <span>أرشيف الحلقات الطبية ({archivedLibrary.length})</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'upcoming' ? (
            <motion.div 
              key="upcoming"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="bg-white border border-stone-200/90 rounded-[2.5rem] p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
                
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-bold text-red-600 tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200">
                      {upcomingSpaces[0].status}
                    </span>
                    <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full border border-stone-200">
                      {upcomingSpaces[0].category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-stone-600 text-xs font-medium">
                    <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200/80 px-3 py-1.5 rounded-xl">
                      <Calendar size={14} className="text-emerald-600" />
                      <span>{upcomingSpaces[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200/80 px-3 py-1.5 rounded-xl">
                      <Clock size={14} className="text-teal-600" />
                      <span>{upcomingSpaces[0].time}</span>
                    </div>
                  </div>
                </div>

                <div className="py-8 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-stone-900 leading-snug">
                    {upcomingSpaces[0].title}
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed max-w-3xl">
                    {upcomingSpaces[0].description}
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <Stethoscope size={16} className="text-emerald-600" />
                      <span className="font-bold text-stone-900">{upcomingSpaces[0].doctor}</span>
                    </div>
                    <span className="hidden sm:inline text-stone-300">|</span>
                    <span className="text-stone-500">{upcomingSpaces[0].role}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-stone-600 text-xs w-full sm:w-auto justify-center sm:justify-start">
                    <Users size={16} className="text-emerald-600" />
                    <span>انضم حتى الآن <strong className="text-stone-900">{upcomingSpaces[0].listenersCount} مريض ومتابع</strong> في الانتظار</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setIsQuestionModalOpen(true)}
                      className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
                    >
                      <MessageSquarePlus size={16} />
                      <span>أرسل سؤالك مسبقاً لايف</span>
                    </button>

                    <button 
                      onClick={() => alert("تم تفعيل التذكير بنجاح! سننبهك قبل بدء السبيسم بدقائق.")}
                      className="px-5 py-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs md:text-sm transition-all cursor-pointer border border-stone-200"
                    >
                      تذكيرني بالموعد
                    </button>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingSpaces.slice(1).map((space) => (
                  <div key={space.id} className="bg-white border border-stone-200/90 rounded-3xl p-6 shadow-sm space-y-4 hover:border-emerald-500/50 transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">{space.category}</span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">{space.status}</span>
                    </div>
                    <h4 className="font-bold text-stone-900 text-lg leading-snug">{space.title}</h4>
                    <p className="text-stone-600 text-xs line-clamp-2">{space.description}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-stone-100 text-xs text-stone-500">
                      <span>📅 {space.date} - {space.time}</span>
                      <button 
                        onClick={() => setIsQuestionModalOpen(true)}
                        className="text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>احجز سؤالك</span> <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="library"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {archivedLibrary.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="bg-white border border-stone-200/90 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm">
                          <IconComponent size={24} />
                        </div>
                        <span className="text-[11px] text-stone-500 bg-stone-100 px-3 py-1 rounded-full">{item.date}</span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">{item.category}</span>
                        <h4 className="font-bold text-stone-900 text-base leading-snug">{item.title}</h4>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-stone-100">
                        <span className="text-[11px] font-bold text-stone-500 block">أبرز المحاور التي نوقشت:</span>
                        <ul className="space-y-1">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-stone-600 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                      <div className="space-y-0.5">
                        <span className="text-stone-500 block">⏱️ {item.duration}</span>
                        <span className="text-stone-900 font-bold">{item.listens}</span>
                      </div>
                      <button 
                        onClick={() => alert(`جاري تشغيل التسجيل الصوتي للحلقة: ${item.title}`)}
                        className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                      >
                        <Volume2 size={14} />
                        <span>استماع</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isQuestionModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                  <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                    <MessageSquarePlus className="text-emerald-600" size={20} />
                    <span>طرح سؤال مباشر للدكتور</span>
                  </h4>
                  <button 
                    onClick={() => setIsQuestionModalOpen(false)}
                    className="text-stone-400 hover:text-stone-900 text-sm cursor-pointer p-1"
                  >
                    ✕
                  </button>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmitQuestion} className="space-y-4">
                    
                    <div className="space-y-2 text-right">
                      <label className="block text-xs font-bold text-stone-700">اختر المحور الطبي للسؤال أو اكتبه يدوياً</label>
                      <select 
                        value={selectedTopic}
                        onChange={(e) => {
                          setSelectedTopic(e.target.value);
                          setCustomTopic('');
                        }}
                        className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs font-bold focus:border-emerald-600 focus:bg-white outline-none cursor-pointer"
                      >
                        {presetTopics.map((topic, i) => (
                          <option key={i} value={topic}>{topic}</option>
                        ))}
                        <option value="custom">✨ كتابة محور مخصص يدوياً...</option>
                      </select>

                      {selectedTopic === 'custom' && (
                        <input 
                          type="text"
                          placeholder="اكتب المحور الطبي الخاص بك هنا..."
                          value={customTopic}
                          onChange={(e) => setCustomTopic(e.target.value)}
                          className="w-full mt-2 p-3 rounded-xl bg-stone-50 border border-emerald-500 text-stone-900 text-xs focus:bg-white outline-none"
                          required
                        />
                      )}
                    </div>

                    <div className="space-y-1.5 text-right">
                      <label className="block text-xs font-bold text-stone-700">اسمك (اختياري للخصوصية)</label>
                      <input 
                        type="text" 
                        placeholder="مثال: أبو محمد"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs md:text-sm focus:border-emerald-600 focus:bg-white outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 text-right">
                      <label className="block text-xs font-bold text-stone-700">اكتب سؤالك الباطني بوضوح *</label>
                      <textarea 
                        rows={4}
                        placeholder="مثال: أعاني من شعور بالحموضة المستمرة بعد الأكل..."
                        value={patientQuestion}
                        onChange={(e) => setPatientQuestion(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs md:text-sm focus:border-emerald-600 focus:bg-white outline-none transition-all resize-none"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2 bg-emerald-50/80 border border-emerald-200 p-3 rounded-xl text-emerald-800 text-[11px]">
                      <ShieldAlert size={16} className="shrink-0 text-emerald-600" />
                      <span>جميع الأسئلة تخضع للسرية الطبية التامة وتتم الإجابة عليها استشارياً وليس كبديل عن الكشف السريري.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-600/20"
                    >
                      <Send size={16} />
                      <span>إرسال السؤال إلى جدول الدكتور المباشر</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-600 mx-auto animate-bounce" />
                    <h5 className="text-stone-900 font-bold text-lg">تم إرسال سؤالك بنجاح!</h5>
                    <p className="text-stone-600 text-xs">سيقوم الدكتور بمناقشة حالتك والإجابة عنها خلال السبيسم المباشر القادم.</p>
                  </div>
                )}

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default UltimateDoctorLiveSpace;
