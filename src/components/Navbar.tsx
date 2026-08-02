import React, { useState } from "react";
import {
  Stethoscope,
  Home,
  ClipboardList,
  Users,
  Phone,
  CalendarPlus,
  Sparkles,
  ChevronLeft
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("الرئيسية");

  const navLinks = [
    { name: "الرئيسية", icon: <Home size={17} />, path: "/" },
    { name: "الخدمات", icon: <ClipboardList size={17} />, path: "/services" },
    { name: "من نحن", icon: <Users size={17} />, path: "/about" },
    { name: "تواصل معنا", icon: <Phone size={17} />, path: "/contact" },
  ];

  return (
    <nav dir="rtl">
      {/* 1. Desktop Luxury Floating Navbar */}
      <div className="hidden md:flex fixed top-5 left-0 right-0 z-[9999] justify-center px-6">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl w-full bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] px-5 py-3 flex items-center justify-between ring-1 ring-stone-900/5"
        >
          {/* Logo Brand مع شارة نبض فاخرة */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-800/20 group-hover:scale-105 transition-transform duration-300">
              <Stethoscope size={21} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#2D3436] font-extrabold text-base tracking-tight group-hover:text-emerald-700 transition-colors">
                عيادة الباطنة
              </span>
              <span className="text-stone-400 text-[10px] font-medium tracking-wider">
                رعاية طبية متقدمة
              </span>
            </div>
          </Link>

          {/* Navigation Links بتصميم زجاجي عائم دقيق */}
          <ul className="flex items-center gap-1.5 bg-stone-100/60 p-1.5 rounded-full border border-stone-200/50 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setActive(link.name)}
                  className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-emerald-800"
                      : "text-stone-500 hover:text-stone-800 hover:bg-white/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="luxuryFloatingTab"
                      className="absolute inset-0 bg-white border border-stone-200/60 rounded-full shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className={`${isActive ? "text-emerald-600" : "text-stone-400"}`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </ul>

          {/* Action Button المميز مع أيقونة تفاعلية */}
          <Link
            to="/reservation"
            className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-800 to-teal-700 text-white px-6 py-3 rounded-2xl text-xs md:text-sm font-extrabold hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 shadow-xl shadow-emerald-800/20 hover:scale-[1.02] active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
            <CalendarPlus size={17} />
            <span>حجز موعد فوري</span>
            <ChevronLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

{/* 2. Mobile Floating Bottom Navigation - تصميم نظيف، شيك، ومضبوط بالمللي للموبايل */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-[9999]">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white/95 backdrop-blur-2xl border 
          border-stone-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-[2rem] px-3 py-2 flex items-center justify-between"
        >
          {navLinks.map((link) => {
            const isActive = active === link.name;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActive(link.name)}
                className={`relative flex flex-col items-center gap-1 py-1.5 px-3 rounded-2xl transition-all ${
                  isActive ? "text-emerald-700" : "text-stone-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 bg-emerald-50 border border-emerald-100 rounded-2xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  className="transition-transform"
                >
                  {link.icon}
                </motion.div>
                <span className={`text-[10px] tracking-tight ${isActive ? "text-emerald-800 font-bold" : "text-stone-400 font-medium"}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}

          {/* زر الحجز السريع بتصميم متناسق تماماً مع باقي الأيقونات */}
          <Link
            to="/reservation"
            className="flex flex-col items-center gap-1 py-1.5 px-3 rounded-2xl text-emerald-700 group"
          >
            <motion.div 
              whileTap={{ scale: 0.85 }}
              className="p-2 rounded-xl bg-emerald-700 text-white shadow-md shadow-emerald-700/20 group-hover:bg-emerald-800 transition-colors"
            >
              <CalendarPlus size={18} />
            </motion.div>
            <span className="text-[10px] font-bold text-emerald-800">حجز الآن</span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;