import React, { useState } from "react";
import {
  LayoutDashboard,
  Stethoscope,
  Home,
  ClipboardList,
  Users,
  Phone,
  CalendarPlus,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("الرئيسية");

  const navLinks = [
    { name: "الرئيسية", icon: <Home size={20} />, path: "/" },
    { name: "الخدمات", icon: <ClipboardList size={20} />, path: "/services" },
    { name: "من نحن", icon: <Users size={20} />, path: "/about" },
    { name: "تواصل معنا", icon: <Phone size={20} />, path: "/contact" },
  ];

  return (
    <nav dir="rtl">
      {/* 
        التعديل هنا: استبدلنا hidden بـ hidden md:flex 
        لضمان أن النافبار يظهر فقط في الشاشات المتوسطة فما فوق
      */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-[9999] bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200 h-16 items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#E8E2D9] flex items-center justify-center text-emerald-800">
              <Stethoscope size={18} />
            </div>
            <h1 className="text-[#2D3436] font-bold text-lg whitespace-nowrap">
              عيادة الباطنة
            </h1>
          </div>

          <ul className="flex items-center gap-8 text-[#57606f] font-medium whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActive(link.name)}
                className={`cursor-pointer transition-colors ${active === link.name ? "text-emerald-700 font-bold" : "hover:text-emerald-600"}`}
              >
                {link.name}
              </Link>
            ))}
          </ul>

       <Link
  to="/dashboard"
  className="flex items-center gap-2 bg-emerald-700 text-white px-5 py-2 rounded-2xl hover:bg-emerald-800 transition shadow-lg flex-shrink-0"
>
  {/* استبدلنا LayoutDashboard بـ CalendarPlus لتناسب كلمة "حجز" */}
  <CalendarPlus size={18} /> 
  حجز الآن
</Link>
        </div>
      </div>

      {/* Bottom Navigation للموبايل (يختفي في الشاشات الكبيرة) */}
      <div className="md:hidden fixed bottom-0 w-full z-50 bg-[#FAF7F2] border-t border-stone-200 shadow-[0_-4px_15px_rgba(0,0,0,0.05)] pb-3 pt-3 px-2">
        <div className="flex justify-between items-center px-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setActive(link.name)}
              className={`flex flex-col items-center gap-1 transition-all ${active === link.name ? "text-emerald-700" : "text-[#57606f]"}`}
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: active === link.name ? 1.1 : 1 }}
              >
                {link.icon}
              </motion.div>
              <span className="text-[10px] font-bold">{link.name}</span>
            </Link>
          ))}

          <Link
            to="/dashboard"
            className="flex flex-col items-center gap-1 text-emerald-700"
          >
            <CalendarPlus size={20} />
            <span className="text-[10px] font-bold">حجز الان</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
