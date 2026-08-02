import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Headphones, 
  ShieldCheck,
  Compass,
  ArrowUpLeft,
  LifeBuoy
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactPage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الاتصال المباشر",
      value: "+20 100 000 0000",
      desc: "متاح طوال أيام الأسبوع لخدمتكم",
      action: "اتصل الآن",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-200"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      value: "care@clinic.com",
      desc: "نرد على جميع الاستفسارات خلال ساعة",
      action: "أرسل رسالة",
      color: "from-teal-500/10 to-emerald-500/10 text-teal-700 border-teal-200"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "المقر الرئيسي",
      value: "القاهرة، التجمع الخامس",
      desc: "شارع التسعين الشمالي، مول العيادات",
      action: "عرض على الخريطة",
      color: "from-emerald-500/10 to-stone-500/10 text-emerald-800 border-stone-200"
    }
  ];

const faqs = [
    { 
      q: "كيف يمكنني تغيير موعد الحجز الخاص بي؟", 
      a: "يمكنك ذلك بسهولة من خلال الدخول إلى لوحة التحكم الخاصة بك، التوجه إلى قسم 'مواعيدي'، واختيار تعديل الموعد أو إلغاؤه بنقرة واحدة." 
    },
    { 
      q: "هل المنصة تدعم شركات التأمين الطبي؟", 
      a: "نعم، نحن متعاقدون مع أكثر من 50 شركة تأمين كبرى. يمكنك إضافة بيانات تأمينك الطبي مباشرة في ملفك الشخصي." 
    },
    { 
      q: "هل يمكنني إجراء استشارة طبية مرئية عن بُعد؟", 
      a: "بالتأكيد، توفر المنصة خاصية الاستشارة المرئية عالية الدقة والمشفرة بالكامل لضمان سرية التقرير الطبي." 
    },
    { 
      q: "كيف يمكنني الحصول على الروشتة الطبية بعد الكشف؟", 
      a: "بمجرد انتهاء الاستشارة، ستصلك الروشتة الطبية الرقمية المعتمدة مباشرة على حسابك الشخصي وتطبيق الهاتف، ويمكنك تحميلها أو طباعتها في أي وقت." 
    },
    { 
      q: "ما هي طرق الدفع المتاحة داخل المنصة؟", 
      a: "نحن ندعم كافة طرق الدفع الآمنة، بما في ذلك البطاقات الائتمانية (Visa, MasterCard)، المحافظ الإلكترونية، والدفع النقدي بالعيادة عند الحضور." 
    },
    { 
      q: "هل بياناتي الطبية والشخصية محمية وآمنة؟", 
      a: "نعم تماماً، نستخدم أعلى معايير التشفير العالمية لحماية كافة بياناتك الطبية والشخصية وفقاً لبروتوكولات الأمان العالمية للرعاية الصحية." 
    }
  ];

  return (
    <div dir="rtl" className="bg-[#FAF7F2] min-h-screen text-[#2D3436] selection:bg-[#E5D7C3] selection:text-[#1A1A1A] py-20 px-6 relative overflow-hidden">
      
      {/* خلفيات جمالية ناعمة ومنسجمة مع الهوية */}
      <div className="absolute top-16 right-1/4 w-[600px] h-[600px] bg-emerald-200/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-32 left-1/4 w-[600px] h-[600px] bg-teal-100/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* المقدمة الفخمة والمنسقة تماماً */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-5 max-w-3xl mx-auto py-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-stone-200/90 text-emerald-700 text-xs shadow-xs backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
            <span>نحن هنا دائماً لدعم رحلتك الطبية والصحية</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2D3436] tracking-tight leading-[1.15]">
            تواصل معنا بكل سهولة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800">
              فريقنا المختص بانتظارك الآن
            </span>
          </h1>

          <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed">
            نقدم لك قنوات اتصال متعددة ومباشرة لضمان حصولك على الإجابات والدعم بكل سرعة واحترافية.
          </p>
        </motion.div>

        {/* 3 بطاقات تواصل رئيسية فخمة وبارزة (تصميم رايق جداً) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, idx) => (
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 25px 50px -15px rgba(16, 185, 129, 0.12)" }}
              transition={{ duration: 0.3 }}
              key={idx}
              className="bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] border border-stone-200/80 shadow-xs flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    {method.icon}
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    متاح دائماً
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-400 block">{method.title}</span>
                  <h3 className="text-xl font-extrabold text-[#2D3436] group-hover:text-emerald-700 transition-colors">
                    {method.value}
                  </h3>
                  <p className="text-stone-500 text-xs font-light leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>{method.action}</span>
                <ArrowUpLeft className="w-4 h-4 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* قسم نموذج التواصل والخريطة الذكية */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* نموذج التواصل الفاخر والمطور */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] border border-stone-200/80 shadow-xl shadow-stone-200/40 relative overflow-hidden h-full flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-100/50 rounded-full blur-[80px] pointer-events-none" />

              <div className="mb-8 space-y-2">
                <h2 className="text-3xl font-extrabold text-[#2D3436]">هل لديك استفسار خاص؟</h2>
                <p className="text-stone-500 text-sm md:text-base font-light">املأ النموذج أدناه وسيتواصل معك أحد مختصينا في أقرب وقت.</p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4 bg-emerald-50/50 rounded-3xl border border-emerald-100 my-auto"
                >
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-stone-600 text-sm max-w-sm mx-auto">شكراً لتواصلك معنا. سنقوم بمراجعة رسالتك والرد عليك في أسرع وقت ممكن.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-600 mr-1">الاسم الكامل</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="مثال: أحمد محمد" 
                        className="w-full p-4 rounded-2xl bg-stone-50/80 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none text-sm" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-600 mr-1">رقم الهاتف</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="01X XXXX XXXX" 
                        className="w-full p-4 rounded-2xl bg-stone-50/80 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none text-sm" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-600 mr-1">البريد الإلكتروني</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full p-4 rounded-2xl bg-stone-50/80 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none text-sm" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-600 mr-1">نص الرسالة</label>
                    <textarea 
                      required 
                      placeholder="كيف يمكننا مساعدتك اليوم؟" 
                      rows={4} 
                      className="w-full p-4 rounded-2xl bg-stone-50/80 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none text-sm resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full group bg-[#2D3436] hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold text-base transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <span>إرسال الرسالة الآن</span>
                    <Send className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* الخريطة الذكية ومعلومات أوقات العمل بتصميم راقي */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">

            <div className="h-[360px] w-full rounded-[3rem] overflow-hidden shadow-xl border-4 border-white z-0 relative flex-1">
              <MapContainer center={[30.0333, 31.2333]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[30.0333, 31.2333]}>
                  <Popup>عيادتنا هنا! ننتظر زيارتك بكل شوق.</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

        </div>

<section className="space-y-8 pt-6">
      
      {/* رأس القسم */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
            <Headphones size={16} />
            <span>الأسئلة الشائعة والدعم</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#2D3436]">كل ما تحتاج معرفته قبل البدء</h3>
        </div>
        <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold self-start md:self-auto border border-emerald-100">
          إجابات سريعة وواضحة
        </span>
      </div>

      {/* شبكة الأسئلة بتصميم بطاقات متجاورة فخمة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((item, i) => (
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(16, 185, 129, 0.1)" }}
            transition={{ duration: 0.3 }}
            key={i}
            className="bg-white/95 backdrop-blur-xl p-7 rounded-[2.5rem] border border-stone-200/80 shadow-xs flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            
            <div className="space-y-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center">
                0{i + 1}
              </span>
              <h4 className="text-base font-extrabold text-[#2D3436] group-hover:text-emerald-700 transition-colors leading-snug">
                {item.q}
              </h4>
            </div>

            <p className="text-stone-500 text-xs font-light leading-relaxed border-t border-stone-100 pt-4">
              {item.a}
            </p>
          </motion.div>
        ))}
      </div>

      {/* شريط الدعم الفوري المدمج أسفل الشبكة */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-8 md:p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-5 text-right z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-300 border border-white/10 shrink-0 shadow-inner">
            <MessageSquare size={32} />
          </div>
          <div className="space-y-1">
            لم تجد إجابة لسؤالك؟ فريقنا جاهز لمساعدتك فوراً
            <h4 className="text-xl md:text-2xl font-extrabold">تحتاج لمساعدة أو استفسار خاص؟</h4>
            <p className="text-emerald-100 text-xs md:text-sm font-light">تواصل معنا عبر واتساب وسيقوم أحد مختصينا بالرد عليك خلال دقائق.</p>
          </div>
        </div>

        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white hover:bg-emerald-50 text-emerald-950 px-8 py-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg flex items-center gap-3 shrink-0 group z-10 cursor-pointer"
        >
          <span>تواصل عبر واتساب فوراً</span>
          <span className="text-lg">💬</span>
        </a>
      </motion.div>

    </section>

      </div>
    </div>
  );
};

export default ContactPage;