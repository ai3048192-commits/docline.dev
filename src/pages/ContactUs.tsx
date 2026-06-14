
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-20 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* المقدمة */}
       <motion.div
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  className="text-center space-y-4"
>
  <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D3436]">
    تواصل معنا
  </h1>

  <p className="text-gray-500 text-lg max-w-2xl mx-auto">
    نحن هنا للإجابة على استفساراتكم ودعمكم في رحلتكم الصحية.
  </p>
</motion.div> 
       

  <div className="grid lg:grid-cols-12 gap-12 items-start" dir="rtl">
  
<div className="lg:col-span-7">
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative bg-white p-10 md:p-12 rounded-[3rem] border border-stone-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]"
  >
    {/* لمسة فنية: دائرة ضوئية خفيفة في زاوية النموذج */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[100px] -z-10" />

    <div className="mb-10">
      <h2 className="text-4xl font-extrabold text-[#2D3436] mb-3">هل لديك استفسار؟</h2>
      <p className="text-gray-500 text-lg">نحن هنا لخدمتك. املأ البيانات وسيتواصل معك فريقنا في أقرب وقت.</p>
    </div>

    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-stone-600 mr-1">الاسم الكامل</label>
          <input type="text" placeholder="مثال: أحمد محمد" className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-stone-600 mr-1">رقم الهاتف</label>
          <input type="tel" placeholder="01X XXXX XXXX" className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-bold text-stone-600 mr-1">البريد الإلكتروني</label>
        <input type="email" placeholder="name@example.com" className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-stone-600 mr-1">نص الرسالة</label>
        <textarea placeholder="كيف يمكننا مساعدتك اليوم؟" rows={4} className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all outline-none"></textarea>
      </div>
      
      <button className="w-full group bg-[#2D3436] text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
        إرسال الرسالة الآن 
        <Send className="group-hover:translate-x-1 transition-transform" size={20} />
      </button>
    </form>
  </motion.div>
</div>

  {/* الجزء الأيمن */}
  <div className="lg:col-span-5 space-y-6">
    <div className="bg-emerald-900 text-white p-8 rounded-[2rem] relative overflow-hidden">
      <h3 className="text-xl font-bold mb-8 opacity-90">بيانات المكتب الرئيسي</h3>
      <div className="space-y-6">
        {[
          { icon: <MapPin />, text: "القاهرة، التجمع الخامس، شارع التسعين" },
          { icon: <Phone />, text: "+20 100 000 0000" },
          { icon: <Mail />, text: "care@clinic.com" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-900 transition-all">
              {item.icon}
            </div>
            <span className="font-medium group-hover:text-emerald-300">{item.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* الخريطة - تم إضافة z-0 لضمان عدم تداخلها مع العناصر الأخرى */}
    <div className="h-[300px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-0">
      <MapContainer center={[30.0333, 31.2333]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[30.0333, 31.2333]}>
          <Popup>عيادتنا هنا! ننتظر زيارتك.</Popup>
        </Marker>
      </MapContainer>
    </div>
  </div>
</div>

        {/* الأسئلة الشائعة & الدعم */}
      <section className="grid md:grid-cols-2 gap-8">
  
  {/* قسم الأسئلة الشائعة - بنظام Accordion بسيط */}
<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
  <h3 className="text-xl font-bold mb-8 text-[#2D3436]">الأسئلة الشائعة</h3>
  <div className="space-y-6">
    {[
      { q: "كيف يمكنني تغيير موعد الحجز؟", a: "يمكنك ذلك بسهولة من خلال الدخول إلى لوحة التحكم الخاصة بك، التوجه إلى قسم 'مواعيدي'، واختيار تعديل الموعد." },
      { q: "هل المنصة تدعم التأمين الطبي؟", a: "نعم، نحن متعاقدون مع أكثر من 50 شركة تأمين كبرى. يمكنك إضافة بيانات تأمينك في ملفك الشخصي." },
      { q: "هل يمكنني استشارة الطبيب عبر الإنترنت؟", a: "بالتأكيد، المنصة توفر خاصية الاستشارة المرئية المشفرة بالكامل." },
    ].map((item, i) => (
      <details key={i} className="group border-b border-stone-100 pb-6 last:border-0">
        <summary className="font-bold text-gray-700 cursor-pointer list-none flex justify-between items-center group-open:text-emerald-700 transition-colors">
          {item.q}
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 transition-transform group-open:rotate-180">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </summary>
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-gray-500 text-sm mt-4 leading-relaxed pl-8"
        >
          {item.a}
        </motion.p>
      </details>
    ))}
  </div>
</div>

  {/* قسم الدعم السريع - بتصميم بطاقة مميزة */}
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-emerald-900 text-white p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden"
  >
    {/* تأثير ديكوري */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-700 rounded-full blur-3xl opacity-50" />
    
    <div className="bg-emerald-800 p-4 rounded-2xl">
      <MessageSquare size={40} className="text-emerald-400" />
    </div>
    
    <div className="space-y-2">
      <h3 className="text-2xl font-bold">تحتاج لمساعدة فورية؟</h3>
      <p className="text-emerald-200 text-sm">فريق الدعم لدينا متاح للرد على استفساراتكم عبر واتساب في أي وقت.</p>
    </div>

    <button className="bg-white text-emerald-900 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all shadow-lg flex items-center gap-2">
      تواصل عبر واتساب <span>💬</span>
    </button>
  </motion.div>
</section>

      </div>
    </div>
  );
};
export default ContactPage;