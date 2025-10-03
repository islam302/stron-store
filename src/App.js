import { useState, useEffect } from 'react';

// Professional SS Logo Component with Image Support
function SSLogo({ size = 'medium', className = '', useImage = false, showBoth = false }) {
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-10 h-10 text-lg',
    large: 'w-12 h-12 text-xl',
    xlarge: 'w-16 h-16 text-2xl'
  };

  const imageSizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  // If showing both logos
  if (showBoth) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Image Logo */}
        <div className={`${imageSizeClasses[size]} relative group cursor-pointer`}>
          <img
            src="/strong-logo.jpg"
            alt="Strong Store Logo"
            className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* SS Text Logo */}
        <div className={`${sizeClasses[size]} relative group cursor-pointer`}>
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-red-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center">
              <span className="font-black text-white tracking-tight transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <span className="relative">S</span>
                <span className="relative ml-0.5">S</span>
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700 ease-in-out"></div>
          </div>
        </div>
      </div>
    );
  }

  // If using only image logo
  if (useImage) {
    return (
      <div className={`${imageSizeClasses[size]} ${className} relative group cursor-pointer`}>
        <img
          src="/strong-logo.jpg"
          alt="Strong Store Logo"
          className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 border-orange-200/50 group-hover:border-orange-300"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-20 blur-md -z-10 transform scale-110 transition-all duration-300"></div>
      </div>
    );
  }

  // Default SS text logo
  return (
    <div className={`${sizeClasses[size]} ${className} relative group cursor-pointer`}>
      {/* Main logo container with gradient background */}
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-red-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full"></div>
        </div>
        
        {/* SS Text with professional styling */}
        <div className="relative z-10 flex items-center justify-center">
          <span className="font-black text-white tracking-tight transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
            <span className="relative">
              S
              <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-orange-200 rounded-full opacity-60"></span>
            </span>
            <span className="relative ml-0.5">
              S
              <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-red-200 rounded-full opacity-60"></span>
            </span>
          </span>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700 ease-in-out"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-30 blur-md -z-10 transform scale-110 transition-all duration-300"></div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100" dir="rtl">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <div className="flex items-center space-x-3 sm:space-x-4 space-x-reverse">
              {/* Mobile: Show both logos in smaller size */}
              <SSLogo size="small" showBoth={true} className="sm:hidden" />
              {/* Desktop: Show both logos in larger size */}
              <SSLogo size="medium" showBoth={true} className="hidden sm:block" />
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 bg-clip-text text-transparent">
                  Strong Store
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block font-medium">اكسسوارات عصرية ومتميزة ✨</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 space-x-reverse">
              <a href="#products" className="relative group text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 px-3 py-2 rounded-lg hover:bg-orange-50">
                المنتجات
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="relative group text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 px-3 py-2 rounded-lg hover:bg-orange-50">
                من نحن
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative group text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 px-3 py-2 rounded-lg hover:bg-orange-50">
                تواصل
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2.5 rounded-xl text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 transition-all duration-300 hover:scale-105">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
        {/* Enhanced Floating Elements Background + SS tiles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* SS tiles (left) */}
          <div className="hidden sm:block absolute left-6 sm:left-12 top-24 sm:top-28 select-none">
            <div className="relative">
              {/* Orange S */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl rotate-[-16deg] bg-gradient-to-br from-orange-500 via-orange-400 to-red-500 shadow-2xl flex items-center justify-center animate-float" style={{animationDuration:'7s'}}>
                <span className="text-white font-black text-4xl sm:text-5xl">S</span>
              </div>
              {/* Dark S */}
              <div className="absolute -right-10 sm:-right-12 top-10 sm:top-12 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl rotate-12 bg-gradient-to-br from-neutral-900 via-zinc-800 to-zinc-700 shadow-2xl flex items-center justify-center animate-float" style={{animationDuration:'7s', animationDelay:'0.8s'}}>
                <span className="text-white font-black text-4xl sm:text-5xl">S</span>
              </div>
            </div>
          </div>
          {/* Primary floating elements */}
          <div className="absolute top-20 sm:top-28 left-4 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-orange-300 to-red-400 rounded-full blur-xl animate-bounce opacity-40"></div>
          <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-red-300 to-orange-400 rounded-full blur-lg animate-pulse opacity-35"></div>
          <div className="absolute bottom-20 sm:bottom-28 left-12 sm:left-24 w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-md animate-ping opacity-30"></div>

          {/* SS tiles (right) */}
          <div className="hidden sm:block absolute right-6 sm:right-12 top-24 sm:top-28 select-none">
            <div className="relative">
              {/* Dark S */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl rotate-[-12deg] bg-gradient-to-br from-neutral-900 via-zinc-800 to-zinc-700 shadow-2xl flex items-center justify-center animate-float" style={{animationDuration:'7s', animationDelay:'0.6s'}}>
                <span className="text-white font-black text-4xl sm:text-5xl">S</span>
              </div>
              {/* Orange S */}
              <div className="absolute -left-10 sm:-left-12 top-10 sm:top-12 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl rotate-12 bg-gradient-to-br from-orange-500 via-orange-400 to-red-500 shadow-2xl flex items-center justify-center animate-float" style={{animationDuration:'7s', animationDelay:'1.3s'}}>
                <span className="text-white font-black text-4xl sm:text-5xl">S</span>
              </div>
            </div>
          </div>
          
          {/* Secondary floating elements */}
          <div className="absolute top-40 sm:top-52 right-20 sm:right-40 w-8 sm:w-12 h-8 sm:h-12 bg-orange-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 sm:bottom-40 right-6 sm:right-16 w-12 sm:w-18 h-12 sm:h-18 bg-red-400 rounded-full blur-sm animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 sm:top-72 left-16 sm:left-32 w-6 sm:w-10 h-6 sm:h-10 bg-orange-500 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.5s'}}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-28 sm:top-36 right-32 sm:right-48 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-orange-400 to-red-500 rotate-45 animate-pulse opacity-40" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-40 sm:bottom-48 left-24 sm:left-40 w-3 sm:w-5 h-3 sm:h-5 bg-red-500 rotate-12 animate-bounce opacity-50" style={{animationDelay: '2.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Hero Logo Display */}
            <div className="mb-6 sm:mb-8">
              <SSLogo size="xlarge" useImage={true} className="mx-auto animate-float" />
            </div>
            
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-100 via-red-50 to-orange-100 border border-orange-200/50 text-orange-800 text-sm sm:text-base font-semibold mb-6 sm:mb-8 animate-bounce hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-orange-200/50">
              <span className="mr-2 text-lg">🔥</span>
              جديد: تشكيلة اكسسوارات 2025
              <span className="ml-2 text-lg">✨</span>
            </div>
            
            {/* Enhanced Main Heading */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 animate-fade-in-up leading-tight tracking-tight">
                اكسسوارات الموبايل
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent animate-gradient-x leading-relaxed pb-2 sm:pb-4">
                العصرية والأنيقة
                <span className="inline-block ml-2 animate-bounce" style={{animationDelay: '0.5s'}}>✨</span>
              </h2>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto animate-fade-in-up opacity-0 leading-relaxed px-4 sm:px-0 font-medium" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              اكتشف مجموعتنا الحصرية من اكسسوارات الهواتف الذكية بأحدث التصاميم وأفضل الأسعار
              <span className="block mt-2 text-lg text-gray-600">📱💎 جودة عالية • أسعار منافسة • خدمة ممتازة</span>
            </p>
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up opacity-0 px-4 sm:px-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              <button 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 overflow-hidden text-base sm:text-lg border border-orange-400/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>تصفح المنتجات</span>
                  <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🛍️</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group relative border-2 border-gray-300 bg-white text-gray-700 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold hover:bg-gradient-to-r hover:from-orange-50 hover:via-white hover:to-red-50 hover:border-orange-300 hover:text-orange-700 hover:scale-105 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>تواصل معنا</span>
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">💬</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">تصفح حسب الفئة</h2>
            <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-0">اختر من مجموعة واسعة من الاكسسوارات العصرية</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-3 sm:gap-4">
            <CategoryCard icon="⌚" title="ساعات ذكية" />
            <CategoryCard icon="📱" title="أغطية حماية" />
            <CategoryCard icon="🎧" title="سماعات رأس" />
            <CategoryCard icon="🎵" title="سماعات أذن" />
            <CategoryCard icon="🔋" title="باور بانك" />
            <CategoryCard icon="🔌" title="شواحن" />
            <CategoryCard icon="📷" title="حامل موبايل او كاميرا" />
            <CategoryCard icon="🔊" title="صب" />
            <CategoryCard icon="💾" title="فلاشات و ميموري" />
            <CategoryCard icon="📱" title="اسكرينات" />
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="products" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">معرض المنتجات</h2>
            <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-0">تصفح مجموعتنا الكاملة من الاكسسوارات</p>
          </div>
          
          <Gallery />
        </div>
      </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                عن سترونغ ستور
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                نمزج التصميم الجريء مع الجودة الموثوقة. كل منتج يعكس طاقة شعار Strong Store وتدرّج ألوان علامتنا الدافئ.
              </p>
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">تواصل معنا</h2>
          <p className="text-gray-600 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            تابعنا على شبكات التواصل الاجتماعي للحصول على آخر التحديثات
          </p>
          
          <div className="flex flex-col xs:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 max-w-md sm:max-w-none mx-auto">
            {/* Instagram App Icon */}
            <a 
              href="https://www.instagram.com/strongstore74" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative mx-auto xs:mx-0"
            >
              <div className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 rounded-[22%] p-0.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 hover:scale-105 sm:hover:scale-110 transition-transform duration-300 shadow-md">
                <div className="w-full h-full rounded-[20%] bg-white flex items-center justify-center">
                  <svg viewBox="0 0 512 512" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
                    <defs>
                      <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#fb923c" />
                      </linearGradient>
                    </defs>
                    <rect x="64" y="64" width="384" height="384" rx="110" ry="110" fill="none" stroke="url(#igGrad)" strokeWidth="38" />
                    <circle cx="256" cy="256" r="92" fill="none" stroke="url(#igGrad)" strokeWidth="38" />
                    <circle cx="356" cy="156" r="22" fill="url(#igGrad)" />
                  </svg>
                </div>
              </div>
              <span className="block text-xs sm:text-sm font-medium text-gray-700 mt-1 sm:mt-2">Instagram</span>
            </a>

            {/* WhatsApp App Icon */}
            <a 
              href="https://wa.link/6sr3fh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative mx-auto xs:mx-0"
            >
              <div className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 rounded-2xl sm:rounded-3xl bg-green-500 flex items-center justify-center hover:scale-105 sm:hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                </svg>
              </div>
              <span className="block text-xs sm:text-sm font-medium text-gray-700 mt-1 sm:mt-2">WhatsApp</span>
            </a>

            {/* Telegram App Icon */}
            <a 
              href="https://t.me/c/2219005299/1113" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative mx-auto xs:mx-0"
            >
              <div className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 rounded-2xl sm:rounded-3xl bg-blue-500 flex items-center justify-center hover:scale-105 sm:hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <span className="block text-xs sm:text-sm font-medium text-gray-700 mt-1 sm:mt-2">Telegram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-orange-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-red-400 rounded-full"></div>
          <div className="absolute top-32 right-32 w-12 h-12 bg-orange-400 rounded-full blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <SSLogo size="xlarge" useImage={true} className="mr-4" />
            <div className="text-right">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                Strong Store
              </h3>
              <p className="text-gray-300 text-base font-medium">اكسسوارات عصرية ومتميزة ✨</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} سترونغ ستور. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              تصميم عصري • جودة عالية • خدمة ممتازة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Enhanced Category Card Component
function CategoryCard({ icon, title }) {
  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-8 text-center hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-110 hover:-rotate-2 border border-gray-100 cursor-pointer relative overflow-hidden animate-float">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700 ease-in-out"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with enhanced styling */}
        <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
          <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>{icon}</span>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors text-base sm:text-lg">
          {title}
        </h3>
        
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
}

// Gallery Component
function Gallery() {
  const [activeCategory, setActiveCategory] = useState('watches');
  const [allImages, setAllImages] = useState({});
  const [loading, setLoading] = useState(true);
  
  const categories = [
    { id: 'watches', name: 'ساعات ذكية', icon: '⌚', folder: 'watches' },
    { id: 'covers', name: 'أغطية حماية', icon: '📱', folder: 'mobile-covers' },
    { id: 'headphones', name: 'سماعات رأس', icon: '🎧', folder: 'headphones' },
    { id: 'earbuds', name: 'سماعات أذن', icon: '🎵', folder: 'earbuds' },
    { id: 'powerbanks', name: 'باور بانك', icon: '🔋', folder: 'power-banks' },
    { id: 'adapters', name: 'شواحن', icon: '🔌', folder: 'adapters' },
    { id: 'carry', name: 'حامل موبايل او كاميرا', icon: '📷', folder: 'carry' },
    { id: 'sb', name: 'صب', icon: '🔊', folder: 'sb' },
    { id: 'memory', name: 'فلاشات و ميموري', icon: '💾', folder: 'memory' },
    { id: 'screen', name: 'اسكرينات', icon: '📱', folder: 'screen' }
  ];

  useEffect(() => {
    const loadAllImages = async () => {
      const imageMap = {};
      
      for (const category of categories) {
        try {
          // Try to fetch from server first
          const response = await fetch(`http://localhost:3001/api/files/${category.folder}`);
          if (response.ok) {
            const serverImages = await response.json();
            imageMap[category.id] = serverImages.map(path => `http://localhost:3001${path}`);
          } else {
            throw new Error('Server not available');
          }
        } catch (error) {
          console.log(`Using fallback images for ${category.name} (${category.folder}):`, error.message);
          // Fallback: use known images for existing folders
          const knownImages = {
            'watches': [
              '/assets/watches/photo_5945196712010304057_y.jpg',
              '/assets/watches/photo_5945196712010304059_y.jpg',
              '/assets/watches/photo_5945196712010304061_y.jpg',
              '/assets/watches/photo_5945196712010304067_x.jpg',
              '/assets/watches/photo_5945196712010304071_y.jpg',
              '/assets/watches/photo_5945196712010304073_y.jpg'
            ],
            'covers': [
              '/assets/mobile-covers/photo_5850337840972547492_x.jpg',
              '/assets/mobile-covers/photo_5850337840972547494_x.jpg',
              '/assets/mobile-covers/photo_5882141403784528946_y.jpg',
              '/assets/mobile-covers/photo_5882141403784528951_y.jpg',
              '/assets/mobile-covers/photo_6005777509188223813_x.jpg'
            ],
            'headphones': [
              '/assets/headphones/headphone1.jpg',
              '/assets/headphones/headphone2.jpg',
              '/assets/headphones/headphone3.jpg'
            ],
            'earbuds': [
              '/assets/earbuds/photo_5850465530350258451_y.jpg',
              '/assets/earbuds/photo_5931571035637925142_y.jpg',
              '/assets/earbuds/photo_5931571035637925147_y.jpg',
              '/assets/earbuds/photo_5931571035637925149_y.jpg',
              '/assets/earbuds/photo_5931571035637925158_y.jpg',
              '/assets/earbuds/photo_5931571035637925159_y.jpg'
            ],
            'powerbanks': [
              '/assets/power-banks/powerbank1.jpg',
              '/assets/power-banks/powerbank2.jpg',
              '/assets/power-banks/powerbank3.jpg'
            ],
            'adapters': [
              '/assets/adapters/adapter1.jpg',
              '/assets/adapters/adapter2.jpg',
              '/assets/adapters/adapter3.jpg'
            ],
            'carry': [
              '/assets/carry/carry1.jpg',
              '/assets/carry/carry2.jpg',
              '/assets/carry/carry3.jpg'
            ],
            'sb': [
              '/assets/sb/sb1.jpg',
              '/assets/sb/sb2.jpg',
              '/assets/sb/sb3.jpg'
            ],
            'memory': [
              '/assets/memory/memory1.jpg',
              '/assets/memory/memory2.jpg',
              '/assets/memory/memory3.jpg'
            ],
            'screen': [
              '/assets/screen/screen1.jpg',
              '/assets/screen/screen2.jpg',
              '/assets/screen/screen3.jpg'
            ]
          };
          imageMap[category.id] = knownImages[category.id] || [];
        }
      }
      
      setAllImages(imageMap);
      setLoading(false);
    };

    loadAllImages();
  }, []);

  const activeImages = allImages[activeCategory] || [];

  return (
    <div>
      {/* Enhanced Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`group relative flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-300 text-sm sm:text-base overflow-hidden ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-white scale-110 shadow-2xl shadow-orange-500/30'
                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 hover:border-orange-300 hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {/* Background shine effect for active tab */}
            {activeCategory === category.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full animate-shimmer"></div>
            )}
            
            {/* Icon */}
            <span className={`text-lg sm:text-xl transition-transform duration-300 ${
              activeCategory === category.id ? 'animate-bounce' : 'group-hover:scale-110'
            }`}>
              {category.icon}
            </span>
            
            {/* Text */}
            <span className="hidden xs:inline sm:inline relative z-10">
              {category.name}
            </span>
            
            {/* Active indicator */}
            {activeCategory === category.id && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل الصور...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {activeImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105 hover:-rotate-1"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`${categories.find(cat => cat.id === activeCategory)?.name} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onClick={() => window.open(image, '_blank')}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                
                {/* Overlay with enhanced styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* View button with enhanced design */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl">
                    <div className="flex items-center gap-2 text-gray-800">
                      <span className="text-xl sm:text-2xl animate-pulse">👁️</span>
                      <span className="text-sm font-semibold hidden sm:inline">عرض</span>
                    </div>
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                
                {/* Bottom gradient border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {activeImages.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-lg text-gray-600 mb-2">لا توجد صور في هذه الفئة</p>
              <p className="text-sm text-gray-500">
                ضع صور JPG أو PNG في المجلد: 
                <code className="bg-gray-200 px-2 py-1 rounded mx-1">
                  public/assets/{categories.find(cat => cat.id === activeCategory)?.folder}/
                </code>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;

