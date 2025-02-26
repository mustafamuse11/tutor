'use client';

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {/* Students Taught */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_50px_rgba(4,249,252,0.35)] border border-[#04F9FC]/30 w-full md:w-1/3">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-[#04F9FC] mb-4 drop-shadow-[0_0_8px_rgba(4,249,252,0.5)]">200+</span>
              <span className="text-2xl text-white">Students Taught</span>
            </div>
          </div>

          {/* Courses Created */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_50px_rgba(191,28,240,0.35)] border border-[#BF1CF0]/30 w-full md:w-1/3">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-[#BF1CF0] mb-4 drop-shadow-[0_0_8px_rgba(191,28,240,0.5)]">4</span>
              <span className="text-2xl text-white">Live Training</span>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_50px_rgba(255,165,0,0.35)] border border-[#FFA500]/30 w-full md:w-1/3">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-[#FFA500] mb-4 drop-shadow-[0_0_8px_rgba(255,165,0,0.5)]">5+</span>
              <span className="text-2xl text-white">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
