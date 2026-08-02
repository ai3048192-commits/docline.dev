import React from "react";
import {
  Stethoscope,
  Home,
  ClipboardList,
  Users,
  Phone,
  MapPin,
  Mail,
  Clock,
  HeartPulse,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: <Home size={15} /> },
    {
      name: "الخدمات الطبية",
      path: "/services",
      icon: <ClipboardList size={15} />,
    },
    { name: "من نحن", path: "/about", icon: <Users size={15} /> },
    { name: "تواصل معنا", path: "/contact", icon: <Phone size={15} /> },
  ];

  const quickServices = [
    { name: "استشارة باطنة عامة", path: "/services" },
    { name: "فحص الجهاز الهضمي", path: "/services" },
    { name: "متابعة الأمراض المزمنة", path: "/services" },
    { name: "التحاليل والفحوصات المخبرية", path: "/services" },
  ];

  return (
    <footer
      className="bg-[#FAF7F2] border-t border-stone-200/90 pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden text-right"
      dir="rtl"
    >
      {/* لمسات خلفية جمالية متناسقة */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-200/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-200/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* شبكة الفوتر الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* الجزء الأول: التعريف بالعيادة (4 أعمدة) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-2xs">
                <Stethoscope size={22} />
              </div>
              <div>
                <h2 className="text-[#2D3436] font-extrabold text-lg tracking-tight">
                  عيادة الباطنة التخصصية
                </h2>
                <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                  <Sparkles size={11} /> رعاية صحية متكاملة
                </span>
              </div>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed font-light">
              نحن نلتزم بتقديم أعلى معايير الرعاية الصحية الشاملة والدقيقة
              باستخدام أحدث التقنيات الطبية لضمان راحتكم وصحتكم الدائمة.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-2xs text-xs text-stone-600 font-medium">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>معتمدة رسمياً</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-2xs text-xs text-stone-600 font-medium">
                <HeartPulse size={14} className="text-emerald-600" />
                <span>رعاية على مدار الساعة</span>
              </div>
            </div>
          </div>

          {/* الجزء الثاني: تصفح الموقع (2 أعمدة) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-[#2D3436] font-extrabold text-sm tracking-wide uppercase text-stone-800">
              تصفح الموقع
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-2.5 text-stone-500 hover:text-emerald-700 text-sm transition-all font-light"
                  >
                    <span className="text-stone-400 group-hover:text-emerald-600 transition-colors">
                      {link.icon}
                    </span>
                    <span className="group-hover:translate-x-[-3px] transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* الجزء الثالث: خدماتنا الطبية (3 أعمدة) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-[#2D3436] font-extrabold text-sm tracking-wide uppercase text-stone-800">
              أبرز الخدمات
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickServices.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="group flex items-center justify-between text-stone-500 hover:text-emerald-700 text-sm transition-all font-light"
                  >
                    <span className="group-hover:translate-x-[-3px] transition-transform">
                      {service.name}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* الجزء الرابع: معلومات التواصل السريع (3 أعمدة) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-[#2D3436] font-extrabold text-sm tracking-wide uppercase text-stone-800">
              معلومات التواصل
            </h3>

            <div className="space-y-3 text-sm font-light">
              <div className="flex items-start gap-3 text-stone-500">
                <MapPin
                  size={17}
                  className="text-emerald-700 shrink-0 mt-0.5"
                />
                <span className="leading-snug">
                  القاهرة، التجمع الخامس، شارع التسعين الشمالي
                </span>
              </div>

              <div className="flex items-center gap-3 text-stone-500">
                <Phone size={17} className="text-emerald-700 shrink-0" />
                <span dir="ltr" className="font-medium">
                  +20 100 000 0000
                </span>
              </div>

              <div className="flex items-center gap-3 text-stone-500">
                <Mail size={17} className="text-emerald-700 shrink-0" />
                <span>care@clinic.com</span>
              </div>

              <div className="flex items-center gap-3 text-stone-500">
                <Clock size={17} className="text-emerald-700 shrink-0" />
                <span>السبت - الخميس: 9 ص - 10 م</span>
              </div>
            </div>
          </div>
        </div>

        {/* خط الفاصل السفلي وحقوق النشر */}
        <div className="pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>
            &copy; {currentYear} جميع الحقوق محفوظة لعيادة دكتور الباطنة
            التخصصية.
          </p>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-emerald-700 transition">
              سياسة الخصوصية
            </a>
            <span className="text-stone-300">•</span>
            <a href="/terms" className="hover:text-emerald-700 transition">
              شروط الاستخدام
            </a>
            <span className="text-stone-300">•</span>
            <a href="/sitemap" className="hover:text-emerald-700 transition">
              خريطة الموقع
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
