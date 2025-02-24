export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] bg-clip-text text-transparent">
          Our Courses
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your course cards here */}
          <div className="bg-[#0F172A] rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Course Title</h2>
            <p className="text-gray-400 mb-4">Course description goes here...</p>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] text-white font-medium">
              Learn More
            </button>
          </div>
          {/* Add more course cards as needed */}
        </div>
      </div>
    </div>
  );
} 