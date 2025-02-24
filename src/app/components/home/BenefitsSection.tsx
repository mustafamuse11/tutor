'use client';

export default function BenefitsSection() {
  return (
    <section className="px-8 lg:px-16 py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-[#04F9FC]">
            Who Will Benefit Most
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Skilled Professionals */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" />
              <div className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300">
                <svg className="w-8 h-8 text-[#04F9FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300">
              Business Owners
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto">
              
            </p>
          </div>

          {/* Content Creators */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" />
              <div className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300">
                <svg className="w-8 h-8 text-[#04F9FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300">
              Shop Keepers
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto">
              
            </p>
          </div>

          {/* Service Providers */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" />
              <div className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300">
                <svg className="w-8 h-8 text-[#04F9FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300">
              Unemployed youth
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto">
              
            </p>
          </div>

          {/* Aspiring Entrepreneurs */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" />
              <div className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300">
                <svg className="w-8 h-8 text-[#04F9FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300">
              Product Suppliers
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 