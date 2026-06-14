import React from 'react';
import { Calendar, User, Phone, ChevronDown, FileText, CheckCircle, Activity, Scale, Ruler, UserCircle } from 'lucide-react';

const DashboardBookingForm = () => {
  return (
    <section className="py-20 px-6 bg-[#faf7f2]" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]">
          
          <div className="mb-10 border-b border-gray-100 pb-8">
            <h2 className="text-3xl font-black text-gray-900">بيانات المريض الأساسية</h2>
            <p className="text-gray-500 mt-2">يرجى ملء كافة التفاصيل لضمان دقة التشخيص</p>
          </div>

          <form className="space-y-8">
            {/* القسم الأول: البيانات الشخصية */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">اسم المريض الرباعي</label>
                <div className="relative flex items-center">
                  <User className="absolute right-4 text-emerald-500" size={20} />
                  <input className="w-full bg-gray-50 border border-gray-200 p-4 pr-12 rounded-2xl outline-none focus:border-emerald-500 transition-all" placeholder="محمد أحمد..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">رقم الهاتف</label>
                <div className="relative flex items-center">
                  <Phone className="absolute right-4 text-emerald-500" size={20} />
                  <input className="w-full bg-gray-50 border border-gray-200 p-4 pr-12 rounded-2xl outline-none focus:border-emerald-500 transition-all" placeholder="010xxxxxxx" />
                </div>
              </div>
            </div>

            {/* القسم الثاني: القياسات الحيوية */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">العمر</label>
                <div className="relative flex items-center">
                  <UserCircle className="absolute right-4 text-emerald-500" size={20} />
                  <input type="number" className="w-full bg-gray-50 border border-gray-200 p-4 pr-12 rounded-2xl outline-none focus:border-emerald-500 transition-all" placeholder="30" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">الوزن (كجم)</label>
                <div className="relative flex items-center">
                  <Scale className="absolute right-4 text-emerald-500" size={20} />
                  <input type="number" className="w-full bg-gray-50 border border-gray-200 p-4 pr-12 rounded-2xl outline-none focus:border-emerald-500 transition-all" placeholder="75" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">الطول (سم)</label>
                <div className="relative flex items-center">
                  <Ruler className="absolute right-4 text-emerald-500" size={20} />
                  <input type="number" className="w-full bg-gray-50 border border-gray-200 p-4 pr-12 rounded-2xl outline-none focus:border-emerald-500 transition-all" placeholder="175" />
                </div>
              </div>
            </div>

            {/* القسم الثالث: الموعد ونوع الحالة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">تاريخ الموعد (يوم/شهر/سنة)</label>
  <div className="relative flex items-center">
    <Calendar className="absolute right-4 text-emerald-500" size={20} />
    <input 
      type="text" 
      className="w-full bg-gray-50 border border-gray-200 p-4 pr-12 rounded-2xl outline-none focus:border-emerald-500 transition-all" 
      placeholder="مثلاً: 15/06/2026" 
    />
  </div>
</div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">نوع الاستشارة</label>
                <div className="relative flex items-center">
                  <select className="w-full bg-gray-50 border border-gray-200 p-4 pr-4 rounded-2xl outline-none focus:border-emerald-500 transition-all appearance-none">
                    <option>كشف جديد</option>
                    <option>متابعة دورية</option>
                    <option>استشارة تغذية</option>
                  </select>
                  <ChevronDown className="absolute left-4 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
            </div>

            {/* القسم الرابع: التاريخ المرضي */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">التاريخ المرضي أو الحساسية</label>
              <div className="relative flex items-start">
                <Activity className="absolute right-4 top-4 text-emerald-500" size={20} />
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-4 pr-12 rounded-2xl outline-none focus:border-emerald-500 transition-all" placeholder="هل تعاني من أي أمراض مزمنة أو حساسية من أدوية أو أطعمة معينة؟" />
              </div>
            </div>

            <button className="w-full py-5 bg-gray-900 hover:bg-emerald-600 text-white font-black text-lg rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3">
              <CheckCircle size={22} />
              حفظ الملف الطبي للمريض
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DashboardBookingForm;