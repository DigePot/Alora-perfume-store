// src/pages/Home.jsx

import backgroundVideo from "../assets/background.mp4"

function Home() {
  return (
    // This container holds the video and the content
    <div className="absolute top-0 left-0 w-full h-screen">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Hero Section Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Welcome to Alora
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
            Discover our exquisite collection of luxury fragrances and timeless elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
              Explore Collection
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home