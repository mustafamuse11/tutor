'use client';

export default function StatsSection() {
  return (
    <div className="container mx-auto px-4 py-12 bg-[#020817]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Stat */}
          <div className="group bg-[#0A0A0A] rounded-3xl p-8 border border-[#1a1a1a] transition-all duration-300
                        hover:border-[#4EEEB0]/50 hover:shadow-[0_0_40px_rgba(78,238,176,0.3)]
                        relative after:absolute after:inset-0 after:rounded-3xl 
                        after:border after:border-[#4EEEB0]/0 after:transition-all after:duration-300
                        group-hover:after:border-[#4EEEB0]/20 after:shadow-[0_0_30px_rgba(78,238,176,0)]
                        group-hover:after:shadow-[0_0_30px_rgba(78,238,176,0.2)]">
            <h2 className="text-[80px] font-bold mb-1 text-center text-[#4EEEB0] group-hover:glow-green">
              50+
            </h2>
            <p className="text-[#E5E5E5] text-2xl text-center font-light">
              Students Taught
            </p>
          </div>

          {/* Second Stat */}
          <div className="group bg-[#0A0A0A] rounded-3xl p-8 border border-[#1a1a1a] transition-all duration-300
                        hover:border-[#FF3BF4]/50 hover:shadow-[0_0_40px_rgba(255,59,244,0.3)]
                        relative after:absolute after:inset-0 after:rounded-3xl 
                        after:border after:border-[#FF3BF4]/0 after:transition-all after:duration-300
                        group-hover:after:border-[#FF3BF4]/20 after:shadow-[0_0_30px_rgba(255,59,244,0)]
                        group-hover:after:shadow-[0_0_30px_rgba(255,59,244,0.2)]">
            <h2 className="text-[80px] font-bold mb-1 text-center text-[#FF3BF4] group-hover:glow-pink">
              4
            </h2>
            <p className="text-[#E5E5E5] text-2xl text-center font-light">
              Courses Created
            </p>
          </div>

          {/* Third Stat */}
          <div className="group bg-[#0A0A0A] rounded-3xl p-8 border border-[#1a1a1a] transition-all duration-300
                        hover:border-[#FFA14E]/50 hover:shadow-[0_0_40px_rgba(255,161,78,0.3)]
                        relative after:absolute after:inset-0 after:rounded-3xl 
                        after:border after:border-[#FFA14E]/0 after:transition-all after:duration-300
                        group-hover:after:border-[#FFA14E]/20 after:shadow-[0_0_30px_rgba(255,161,78,0)]
                        group-hover:after:shadow-[0_0_30px_rgba(255,161,78,0.2)]">
            <h2 className="text-[80px] font-bold mb-1 text-center text-[#FFA14E] group-hover:glow-orange">
              5+
            </h2>
            <p className="text-[#E5E5E5] text-2xl text-center font-light">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
