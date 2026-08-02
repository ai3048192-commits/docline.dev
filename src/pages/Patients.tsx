import React from 'react';
import { Search, Plus, Filter } from 'lucide-react';

// تعريف واجهة المريض (Data Type)
interface Patient {
  id: number;
  name: string;
  status: string;
  bp: string;
  glucose: string;
  lastVisit: string;
}

const Patients = () => {
  // بيانات تجريبية (يمكنك ربطها بـ API لاحقاً)
  const patients: Patient[] = [
    { id: 1, name: "أحمد محمود محمد", status: "مستقر", bp: "120/80", glucose: "95", lastVisit: "14/06/2026" },
    { id: 2, name: "فاطمة علي مصطفى", status: "حذر", bp: "140/90", glucose: "120", lastVisit: "12/06/2026" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* رأس الصفحة */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">سجل المرضى</h1>
          <p className="text-slate-500 font-medium mt-1">متابعة دقيقة للمؤشرات الحيوية</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-2xl font-bold text-slate-700 hover:bg-slate-50">
            <Filter size={18} /> تصفية
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20">
            <Plus size={20} /> إضافة مريض
          </button>
        </div>
      </div>

      {/* شريط البحث */}
      <div className="relative">
        <Search className="absolute right-4 top-4 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="ابحث عن مريض بالاسم أو الكود..." 
          className="w-full bg-white border border-slate-200 py-4 pr-12 pl-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
        />
      </div>

      {/* بطاقات المرضى */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center font-black text-emerald-600 text-lg">
                  {patient.name.split(' ')[0][0]}
                </div>
                <div>
                  <h3 className="font-black text-slate-900">{patient.name}</h3>
                  <p className="text-slate-400 text-xs font-bold mt-1">آخر زيارة: {patient.lastVisit}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">الضغط</p>
                <p className="font-black text-slate-800">{patient.bp}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">السكر</p>
                <p className="font-black text-slate-800">{patient.glucose}</p>
              </div>
            </div>

            <button className="w-full py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition">
              عرض الملف الطبي
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;