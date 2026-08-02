import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Send, User, Sparkles, CheckCircle2, Quote, Phone, Mail } from 'lucide-react';

const initialReviews = [
  { id: 1, name: "د. خالد السعيد", comment: "تجربة علاجية استثنائية، احترافية عالية وأجهزة متطورة جداً.", rating: 5 },
  { id: 2, name: "منى عبدالله", comment: "أفضل دكتور تعاملت معه، اهتمام بالتفاصيل وراحة نفسية كبيرة.", rating: 5 },
  { id: 3, name: "ياسر إبراهيم", comment: "مستوى الرعاية الطبية فاق توقعاتي، شكراً لكم على كل شيء.", rating: 4 },
  { id: 4, name: "سارة محمود", comment: "تشخيص دقيق جداً وخطة علاجية واضحة من اليوم الأول.", rating: 5 },
];

const ReviewsLightSection = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview = { id: Date.now(), name, comment, rating };
    setReviews([newReview, ...reviews]);
    setName('');
    setPhone('');
    setEmail('');
    setComment('');
    setRating(5);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="relative py-32 px-6 bg-[#FAF9F6] text-gray-900 overflow-hidden" dir="rtl">
      
      {/* إضاءات خلفية بيضاء منورة وناعمة */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-emerald-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-teal-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* رأس القسم */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 text-xs font-mono tracking-widest shadow-sm"
          >
            <Sparkles size={14} />
            <span>PATIENT REVIEWS & FEEDBACK</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
            آراء <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">مرضانا</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">نعتز بثقتكم ونعمل دائماً لنكون عند حسن ظنكم في تقديم أعلى معايير الرعاية.</p>
        </div>

        {/* تخطيط ثابت متوازي: الآراء على اليمين ونموذج متكامل على اليسار */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* شبكة عرض التقييمات الثابتة (7 أعمدة) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, index) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col justify-between relative group"
              >
                <Quote className="absolute top-5 left-5 text-emerald-500/10 w-10 h-10 transform -scale-x-100" />
                
                <div>
                  <div className="flex gap-1 mb-3 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < rev.rating ? "currentColor" : "none"} className={i < rev.rating ? "text-amber-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">"{rev.comment}"</p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <User size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{rev.name}</h4>
                    <span className="text-[11px] text-emerald-600 font-semibold">مريض موثق</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* نموذج إرسال التقييم المتكامل والثابت (5 أعمدة) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <h3 className="text-2xl font-black mb-2 flex items-center gap-2.5 text-gray-900">
                <MessageSquare className="text-emerald-600" size={24} /> شاركنا برأيك
              </h3>
              <p className="text-gray-500 text-xs mb-6">املأ البيانات أدناه وسيتم نشر تقييمك مباشرة.</p>
              
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-6 rounded-2xl text-center font-bold text-sm space-y-2">
                  <CheckCircle2 size={28} className="mx-auto text-emerald-600" />
                  <p>شكراً لك! تم إضافة تقييمك بنجاح.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* تقييم النجوم التفاعلي */}
                  <div className="space-y-1.5 pb-2">
                    <label className="block text-xs font-bold text-gray-700">التقييم العام</label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                        >
                          <Star 
                            size={24} 
                            fill={(hoverRating || rating) >= star ? "currentColor" : "none"} 
                            className={(hoverRating || rating) >= star ? "text-amber-400" : "text-gray-300"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* الاسم */}
                  <div>
                    <input 
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:border-emerald-600 focus:bg-white outline-none transition-all" 
                      placeholder="اسمك الكريم *" 
                      required
                    />
                  </div>

                  {/* رقم الهاتف */}
                  <div>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:border-emerald-600 focus:bg-white outline-none transition-all" 
                      placeholder="رقم الهاتف" 
                    />
                  </div>

                  {/* البريد الإلكتروني */}
                  <div>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:border-emerald-600 focus:bg-white outline-none transition-all" 
                      placeholder="البريد الإلكتروني" 
                    />
                  </div>

                  {/* التعليق */}
                  <div>
                    <textarea 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:border-emerald-600 focus:bg-white outline-none transition-all h-28 resize-none" 
                      placeholder="اكتب تجربتك معنا هنا... *" 
                      required
                    />
                  </div>
                  
                  {/* زر الإرسال */}
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-600/20 text-sm cursor-pointer"
                  >
                    <span>نشر التقييم</span> <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewsLightSection;