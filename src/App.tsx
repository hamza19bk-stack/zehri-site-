import { useState } from "react";
import { ArrowRight, Search, Play, ArrowUpRight, Shield, Stethoscope, HeartPulse, Activity, ArrowLeft, Star, Phone, Mail, Facebook, Instagram, Linkedin, ChevronDown, Menu, X, Globe } from "lucide-react";
import { translations, Lang } from "./i18n";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('fr');

  const t = translations[lang];
  const isRtl = lang === 'ar';
  const arrowClass = isRtl ? "rotate-180" : "";

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-black">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40">
          <source src="https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1776784549/AQNdQHBXosZAcqZHllaMZgWymW8nZr_JqKVst-rYUNIAWZ5CbZDtgTkRAYDGwCzZ8wkJyU_VYn72zBzSGMxbuunR8JHIHO7YOuO5JBll2WwRzw_hx4cpo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60 z-10 pointer-events-none"></div>

        <nav className="relative z-50 w-full px-6 py-6 lg:py-8 max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight text-white">
            <img src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776784599/462333902_122094971666569422_5488416332180898713_n_t8rgbu.jpg" alt="Cabinet Zouhri Logo" className="w-10 h-10 object-cover rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <span className="tracking-widest uppercase text-lg">{t.cabinet}</span>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-xs font-bold tracking-widest text-white/80 uppercase">
            <a href="#" className="hover:text-white transition-colors">{t.nav_home}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.nav_about}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.nav_services}</a>
            <a href="#reviews" className="hover:text-white transition-colors">{t.nav_reviews}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav_contact}</a>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-white">
            <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 border border-white/20">
              <button onClick={() => setLang('fr')} className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'fr' ? 'bg-white text-black shadow-sm' : 'text-white/70 hover:text-white'}`}>FR</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'en' ? 'bg-white text-black shadow-sm' : 'text-white/70 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('ar')} className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'ar' ? 'bg-white text-black shadow-sm' : 'text-white/70 hover:text-white'}`}>AR</button>
            </div>
            <div className="w-px h-5 bg-white/30 hidden xl:block"></div>
            <a href="#contact" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-lg">
              {t.nav_book}
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-4 text-white">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hover:text-gray-300 transition-colors p-1">
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="absolute top-[88px] start-0 w-full bg-black/95 backdrop-blur-xl z-40 border-t border-white/10 shadow-2xl pb-8 px-6 lg:hidden">
            <div className="flex flex-col items-center gap-6 pt-8 text-white font-bold tracking-widest text-sm uppercase">
              
              <div className="flex items-center gap-2 bg-white/10 rounded-full p-2 border border-white/20 mb-2">
                <button onClick={() => setLang('fr')} className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${lang === 'fr' ? 'bg-white text-black' : 'text-white/70 hover:text-white'}`}>FR</button>
                <button onClick={() => setLang('en')} className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${lang === 'en' ? 'bg-white text-black' : 'text-white/70 hover:text-white'}`}>EN</button>
                <button onClick={() => setLang('ar')} className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${lang === 'ar' ? 'bg-white text-black' : 'text-white/70 hover:text-white'}`}>AR</button>
              </div>

              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">{t.nav_home}</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">{t.nav_about}</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">{t.nav_services}</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">{t.nav_reviews}</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">{t.nav_contact}</a>
              <div className="w-12 h-px bg-white/20 my-2"></div>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-xs font-bold uppercase mt-4">
                {t.nav_book_now}
              </a>
            </div>
          </div>
        )}

        <div className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-4 w-full h-full pb-10">
          <h1 className="flex flex-col items-center justify-center font-black uppercase tracking-tighter w-full max-w-6xl">
            <span className="text-[2.2rem] sm:text-6xl md:text-7xl lg:text-[6rem] text-white drop-shadow-lg mb-2">
              {t.hero_title1}
            </span>
            <span className="text-[1.3rem] sm:text-[2.2rem] md:text-5xl lg:text-[4.5rem] text-white leading-[1.2] py-2 drop-shadow-md">
              {t.hero_title2}
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 md:mt-16 w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto bg-white text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-xs sm:text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors uppercase">
              {t.hero_btn_book} <ArrowRight className={`w-5 h-5 ${arrowClass}`}/>
            </a>
            <a href="#services" className="w-full sm:w-auto border border-white/40 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-xs sm:text-sm tracking-widest hover:bg-white/10 transition-colors uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {t.hero_btn_services}
            </a>
          </div>
          
          <div className="mt-16 sm:mt-24 flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full py-2 px-4 pe-6 shadow-2xl">
            <div className="flex -space-x-3 rtl:space-x-reverse">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border border-black relative z-30" alt="Patient 1" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border border-black relative z-20" alt="Patient 2" />
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border border-black relative z-10" alt="Patient 3" />
            </div>
            <div className={`text-xs leading-tight text-white/80 ${isRtl ? 'text-right' : 'text-left'}`}>
              <span className="font-bold text-white uppercase tracking-wider">{t.hero_rating_by}</span><br/>
              {t.hero_rating_base} <span className="font-bold text-white">32+</span> {t.hero_rating_clients}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-[#fdf4ed] py-16">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8 text-center text-slate-800">
          {[
            { v: t.stat_yrs, d: t.stat_yrs_d },
            { v: t.stat_rtg, d: t.stat_rtg_d },
            { v: t.stat_clt, d: t.stat_clt_d }
          ].map((s, i) => (
             <div key={i} className="flex items-center gap-4">
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">{s.v}</h3>
                <p className={`text-xs text-slate-500 max-w-[100px] leading-tight ${isRtl ? 'text-right' : 'text-left'}`}>{s.d}</p>
             </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
           <div>
             <div className="flex items-center gap-4 text-sm font-semibold text-slate-700 mb-6 uppercase tracking-wider">
               <span className="w-6 h-px bg-slate-400"></span> {t.srv_badge}
             </div>
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
               {t.srv_title}
             </h2>
           </div>
           <p className="max-w-md text-sm text-slate-500 leading-relaxed">
             {t.srv_desc}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
             <div className="bg-[#e6fbf2] flex flex-col justify-between p-8 hover:shadow-xl transition-shadow cursor-pointer group rounded-xl min-h-[300px]">
                <div>
                   <Shield className="w-8 h-8 text-emerald-800 mb-6" strokeWidth={1.5} />
                   <h3 className="text-xl font-medium text-slate-900 mb-4">{t.srv_1_t}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{t.srv_1_d}</p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 mt-8 group-hover:gap-3 transition-all uppercase tracking-widest">
                   {t.read_more} <ArrowRight className={`w-4 h-4 ${arrowClass}`} />
                </a>
             </div>

             <div className="bg-[#fef2f2] flex flex-col justify-between p-8 hover:shadow-xl transition-shadow cursor-pointer group rounded-xl min-h-[300px]">
                <div>
                   <HeartPulse className="w-8 h-8 text-red-800 mb-6" strokeWidth={1.5} />
                   <h3 className="text-xl font-medium text-slate-900 mb-4">{t.srv_2_t}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{t.srv_2_d}</p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 mt-8 group-hover:gap-3 transition-all uppercase tracking-widest">
                   {t.read_more} <ArrowRight className={`w-4 h-4 ${arrowClass}`} />
                </a>
             </div>

             <div className="bg-[#fdf4ed] flex flex-col justify-between p-8 hover:shadow-xl transition-shadow cursor-pointer group rounded-xl min-h-[300px]">
                <div>
                   <Activity className="w-8 h-8 text-orange-800 mb-6" strokeWidth={1.5} />
                   <h3 className="text-xl font-medium text-slate-900 mb-4">{t.srv_3_t}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{t.srv_3_d}</p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 mt-8 group-hover:gap-3 transition-all uppercase tracking-widest">
                   {t.read_more} <ArrowRight className={`w-4 h-4 ${arrowClass}`} />
                </a>
             </div>

             <div className="bg-[#eef3ff] flex flex-col justify-between p-8 hover:shadow-xl transition-shadow cursor-pointer group rounded-xl min-h-[300px]">
                <div>
                   <Stethoscope className="w-8 h-8 text-blue-800 mb-6" strokeWidth={1.5} />
                   <h3 className="text-xl font-medium text-slate-900 mb-4">{t.srv_4_t}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{t.srv_4_d}</p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 mt-8 group-hover:gap-3 transition-all uppercase tracking-widest">
                   {t.read_more} <ArrowRight className={`w-4 h-4 ${arrowClass}`} />
                </a>
             </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100" id="gallery">
        <div className="max-w-[1400px] mx-auto">
           <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-4 text-sm font-semibold text-slate-700 mb-6 uppercase tracking-wider">
               <span className="w-6 h-px bg-slate-400"></span> {t.gal_badge} <span className="w-6 h-px bg-slate-400"></span>
             </div>
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
               {t.gal_title}
             </h2>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776786612/Screenshot_2026-04-21_174950_jxaxvr.png",
                "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776786612/Screenshot_2026-04-21_175002_nw750q.png",
                "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776786613/1D_sgqlo3.png",
                "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776786613/Screenshot_2026-04-21_174939_hjgmhx.png",
                "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776786613/Screenshot_2026-04-21_174903_m8hqaj.png",
                "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776786613/Screenshot_2026-04-21_174927_lupa73.png"
              ].map((src, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                   <img src={src} alt={`Cabinet image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section id="reviews" className="py-24 bg-white text-center px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-slate-900">{t.rev_title}</h2>
        <p className="text-slate-500 text-sm mb-12">{t.rev_desc}</p>
        
        <div className="bg-[#f9f9f9] rounded-3xl p-12 md:p-20 relative max-w-5xl mx-auto shadow-sm">
           <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed max-w-3xl mx-auto">
             {t.rev_quote}
           </p>
        </div>
        
        <div className="flex items-center justify-between max-w-5xl mx-auto mt-8 px-4">
           <div className="flex gap-4">
             <button className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"> <ArrowLeft className={`w-4 h-4 ${arrowClass}`}/> </button>
             <button className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"> <ArrowRight className={`w-4 h-4 ${arrowClass}`}/> </button>
           </div>
           
           <div className="flex flex-col items-center -mt-20 relative z-10 w-64 text-center">
              <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-md mb-3 text-2xl font-bold text-slate-400">
                K
              </div>
              <h4 className="font-bold text-lg text-slate-900">{t.rev_auth}</h4>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-2 font-medium">{t.rev_date}</p>
              <div className="flex gap-1 text-yellow-400 justify-center">
                <Star fill="currentColor" className="w-3.5 h-3.5" />
                <Star fill="currentColor" className="w-3.5 h-3.5" />
                <Star fill="currentColor" className="w-3.5 h-3.5" />
                <Star fill="currentColor" className="w-3.5 h-3.5" />
                <Star fill="currentColor" className="w-3.5 h-3.5" />
              </div>
           </div>
           
           <div className="text-sm font-semibold text-slate-500">1/3</div>
        </div>
      </section>

      {/* 5. APPOINTMENT BOOKING SECTION */}
      <section className="bg-[#fdf4ed] py-24 px-6 relative overflow-hidden" id="contact">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
           <div>
             <div className="flex items-center gap-4 text-sm font-semibold text-slate-700 mb-6 uppercase tracking-wider">
               <span className="w-6 h-px bg-slate-400"></span> {t.book_badge}
             </div>
             <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-medium tracking-tight text-slate-900 mb-6">
               {t.book_title}
             </h2>
             <p className="text-slate-500 text-sm leading-relaxed mb-12 max-w-md">
               {t.book_desc}
             </p>
             
             <div className="flex flex-col gap-5 text-slate-800 font-medium">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full border border-orange-200/50 flex flex-shrink-0 items-center justify-center"><Phone className="w-4 h-4 text-slate-700" /></div>
                   <span className="text-sm">+212 644-279993</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full border border-orange-200/50 flex flex-shrink-0 items-center justify-center"><Mail className="w-4 h-4 text-slate-700" /></div>
                   <span className="text-sm">dr.zouhri.jalal1@gmail.com</span>
                </div>
             </div>
           </div>
           
           <div className="flex flex-col gap-4 max-w-xl w-full lg:ms-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder={t.form_name} className="w-full bg-white/50 border border-orange-200/80 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-slate-800 transition-colors placeholder:text-slate-400 text-slate-900" />
                <input type="tel" placeholder={t.form_phone} className="w-full bg-white/50 border border-orange-200/80 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-slate-800 transition-colors placeholder:text-slate-400 text-slate-900" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="relative"><input type="date" className="w-full bg-white/50 border border-orange-200/80 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-slate-800 transition-colors text-slate-500" /></div>
                 <div className="relative">
                   <select className="w-full bg-white/50 border border-orange-200/80 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-slate-800 transition-colors appearance-none text-slate-500" defaultValue=''>
                     <option value="" disabled hidden>{t.form_time}</option>
                     <option>{t.form_time_opt1}</option>
                     <option>{t.form_time_opt2}</option>
                     <option>{t.form_time_opt3}</option>
                     <option>{t.form_time_opt4}</option>
                   </select>
                   <ChevronDown className="w-4 h-4 text-slate-400 absolute end-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                 </div>
              </div>
              <textarea placeholder={t.form_rsn} rows={5} className="w-full bg-white/50 border border-orange-200/80 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-slate-800 transition-colors resize-none placeholder:text-slate-400 text-slate-900" />
              <button className="bg-[#111111] text-white w-full rounded-xl py-4 text-sm font-semibold hover:bg-slate-800 transition-colors mt-2">{t.form_btn}</button>
           </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
             <div className="flex items-center gap-3 font-bold text-2xl tracking-tight text-slate-900">
               <img src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776784599/462333902_122094971666569422_5488416332180898713_n_t8rgbu.jpg" alt="Cabinet Zouhri Logo" className="w-10 h-10 object-cover rounded-full" />
               {t.cabinet}
             </div>
             <div className="flex gap-3">
               <a href="https://facebook.com/cabinet.dentaire.zouhri" target="_blank" rel="noreferrer" className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-colors"><Facebook className="w-4 h-4"/></a>
               <a href="https://instagram.com/cabinet.dentaire.zouhri" target="_blank" rel="noreferrer" className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-colors"><Instagram className="w-4 h-4"/></a>
               <a href="#" className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-colors"><Linkedin className="w-4 h-4"/></a>
             </div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 mb-16 text-sm">
              <div className="col-span-1">
                <h4 className="font-bold text-slate-900 mb-6">{t.ft_menu}</h4>
                <ul className="flex flex-col gap-4 text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-slate-900 transition-colors">{t.nav_home}</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">{t.nav_about}</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">{t.nav_services}</a></li>
                  <li><a href="#reviews" className="hover:text-slate-900 transition-colors">{t.nav_reviews}</a></li>
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">{t.nav_contact}</a></li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="font-bold text-slate-900 mb-6">{t.ft_srv}</h4>
                <ul className="flex flex-col gap-4 text-slate-500 font-medium">
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">{t.ft_prev}</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">{t.ft_esth}</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">{t.ft_paro}</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">{t.ft_urg}</a></li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="font-bold text-slate-900 mb-6">{t.ft_about}</h4>
                <ul className="flex flex-col gap-4 text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-slate-900 transition-colors">{t.ft_team}</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">{t.ft_com}</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">{t.ft_clin}</a></li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="font-bold text-slate-900 mb-6">{t.ft_info}</h4>
                <ul className="flex flex-col gap-4 text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-slate-900 transition-colors">{t.nav_about}</a></li>
                  <li><a href="#" className="hover:text-slate-900 transition-colors">{t.ft_faq}</a></li>
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">{t.ft_cont}</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1 border-t md:border-t-0 border-slate-100 pt-8 md:pt-0">
                <h4 className="font-bold text-slate-900 mb-6">{t.ft_loc}</h4>
                <div className="w-full h-[200px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <iframe title="Google Maps Location" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cabinet%20dentaire%20zouhri%20azrou+(Cabinet%20Zouhri)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
           </div>
        </div>
      </footer>

    </div>
  );
}
