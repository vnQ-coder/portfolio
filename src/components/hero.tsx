import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-blue-600 mb-2">FOUNDER & CEO at YOUR COMPANY</h2>
              <h3 className="text-2xl font-light text-gray-700 mb-4">Hello I'm</h3>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Name
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              As the Founder and CEO of Your Company, I have been driving innovation and delivering exceptional technology solutions to startups and enterprises for over 5 years. My mission is to create a lasting impact through technology and partnerships. At Your Company, we provide access to 50+ skilled software engineers, empowering businesses to scale efficiently and succeed in their digital transformation journey.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              In addition to leading Your Company, I am passionate about supporting young entrepreneurs, offering guidance and resources to help them bring their visions to life. I am constantly learning and open to new opportunities that push the boundaries of what's possible.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Technologies Mastered</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get In Touch
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden shadow-2xl">
                {/* Placeholder for profile image - you can replace this with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">YN</span>
                </div>
                {/* You can replace the above div with an actual Image component:
                <Image
                  src="/profile-image.jpg"
                  alt="Your Name"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
