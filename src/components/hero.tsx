'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 20
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="particles absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              background: `hsl(${(particle.id * 137.5) % 360}, 70%, 60%)`
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 animate-slide-up">
              <h2 className="text-lg font-semibold gradient-text-secondary mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                SENIOR MERN STACK DEVELOPER
              </h2>
              <h3 className="text-2xl font-light text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Hello I&apos;m
              </h3>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-scale-in gradient-text" style={{ animationDelay: '0.6s' }}>
                Your Name
              </h1>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
              As a Senior MERN Stack Developer, I specialize in building scalable, full-stack web applications using MongoDB, Express.js, React, and Node.js. With over 5 years of experience in modern web development, I&apos;ve delivered robust solutions for startups and enterprises, focusing on performance, security, and user experience.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '1s' }}>
              I&apos;m passionate about clean code, modern development practices, and mentoring fellow developers. I enjoy tackling complex technical challenges and am always eager to learn new technologies that can enhance my development toolkit and deliver better solutions to clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <div className="text-center glass p-4 rounded-xl hover-lift">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center glass p-4 rounded-xl hover-lift">
                <div className="text-3xl font-bold gradient-text-secondary">50+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="text-center glass p-4 rounded-xl hover-lift">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <button className="btn-animate text-white px-8 py-3 rounded-lg font-semibold hover-lift">
                Hire Me
              </button>
              <button className="glass border border-blue-500/30 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-300 hover-lift">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden shadow-2xl animate-float">
                  {/* Glowing Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-pulse-glow">
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center relative">
                      {/* Placeholder for profile image */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-6xl font-bold gradient-text">YN</span>
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
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-8 -right-8 w-16 h-16 glass rounded-xl flex items-center justify-center animate-float hover-glow" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-8 -left-8 w-14 h-14 glass rounded-xl flex items-center justify-center animate-float hover-glow" style={{ animationDelay: '2s' }}>
                  <span className="text-xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -left-12 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float hover-glow" style={{ animationDelay: '3s' }}>
                  <span className="text-lg">💻</span>
                </div>
                <div className="absolute top-1/4 -right-12 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float hover-glow" style={{ animationDelay: '4s' }}>
                  <span className="text-lg">🎯</span>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
