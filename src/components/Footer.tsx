import React from 'react';
import { MapPin, Phone, Stethoscope, Home, ClipboardList, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // روابط النافبار عشان نستخدمها في الفوتر
const navLinks = [
  { name: "الرئيسية", path: "/", icon: <Home size={16} /> },
  { name: "الخدمات", path: "/services", icon: <ClipboardList size={16} /> },
  { name: "من نحن", path: "/about", icon: <Users size={16} /> },
  { name: "تواصل معنا", path: "/contact", icon: <Phone size={16} /> },
];
  return (
    <footer className="bg-[#FAF7F2] border-t border-stone-200 mt-12 py-12 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* الجزء الأول: تعريف بالعيادة */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#E8E2D9] flex items-center justify-center text-emerald-800">
              <Stethoscope size={18} />
            </div>
            <h2 className="text-[#2D3436] font-bold text-lg">عيادة الباطنة</h2>
          </div>
          <p className="text-[#57606f] text-sm leading-relaxed">
            نحن هنا لتقديم أفضل رعاية طبية شاملة لمرضانا. الجودة، الدقة، والراحة هي أولوياتنا دائماً.
          </p>
        </div>

        {/* الجزء الثاني: روابط النافبار (مكررة من النافبار) */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#2D3436] font-bold">تصفح الموقع</h3>
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-2 text-[#57606f] text-sm hover:text-emerald-700 transition cursor-pointer">
              {link.icon}
              <a href={link.path} className="hover:text-emerald-700 transition">
                {link.name}
              </a>
            </div>
          ))}
        </div>

        {/* الجزء الثالث: معلومات التواصل */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#2D3436] font-bold">تواصل معنا</h3>
          <div className="flex items-center gap-2 text-[#57606f] text-sm hover:text-emerald-700 transition">
            <Phone size={16} />
            <span>010xxxxxxxx</span>
          </div>
          <div className="flex items-center gap-2 text-[#57606f] text-sm">
            <MapPin size={16} />
            <span>مدينة القاهرة، شارع الطب</span>
          </div>
        </div>

        {/* الجزء الرابع: روابط إضافية */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#2D3436] font-bold">قانوني</h3>
          <p className="text-[#57606f] text-sm cursor-pointer hover:text-emerald-700 transition">سياسة الخصوصية</p>
          <p className="text-[#57606f] text-sm cursor-pointer hover:text-emerald-700 transition">شروط الاستخدام</p>
        </div>
      </div>

      {/* الخط السفلي */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-stone-200 text-center text-[#57606f] text-xs">
        <p>&copy; {currentYear} جميع الحقوق محفوظة لعيادة دكتور الباطنة.</p>
      </div>
    </footer>
  );
};

export default Footer;