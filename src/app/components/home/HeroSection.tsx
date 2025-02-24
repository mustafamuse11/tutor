'use client';

export default function HeroSection() {
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#020817]">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-0 px-4">
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
          <img
            src="https://edwardconsulting.org/wp-content/uploads/2022/07/laughing-black-man-glasses-expressing-excitement-emotional-international-student-holding-computer-1568x1045.jpg"
            alt="https://edwardconsulting.org/wp-content/uploads/2022/07/laughing-black-man-glasses-expressing-excitement-emotional-international-student-holding-computer-1568x1045.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#04F9FC]/10 via-[#7573F7]/10 to-[#BF1CF0]/10 rounded-full mb-6">
            <span className="text-[#04F9FC] font-medium">
              Welcome to Our Platform
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] bg-clip-text text-transparent">
            Transform Your Future With Our Courses
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Learn from industry experts and take your skills to the next level.
            Join our community of successful learners today.
          </p>

          <button 
            onClick={scrollToCourses}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] text-white font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
} 