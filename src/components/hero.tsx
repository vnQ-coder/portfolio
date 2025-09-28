"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-transition"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 animate-slide-up">
              <h2
                className="text-lg font-semibold gradient-text-secondary mb-2 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                SENIOR MERN STACK DEVELOPER
              </h2>
              <h3
                className="text-2xl font-light text-gray-300 mb-4 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Hello I&apos;m
              </h3>
              <h1
                className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-scale-in gradient-text"
                style={{ animationDelay: "0.6s" }}
              >
                Rohail Butt
              </h1>
            </div>

            <p
              className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              As a Senior MERN Stack Developer, I specialize in building
              scalable, full-stack web applications using MongoDB, Express.js,
              React, and Node.js. With over 5 years of experience in modern web
              development, I&apos;ve delivered robust solutions for startups and
              enterprises, focusing on performance, security, and user
              experience.
            </p>

            <p
              className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              I&apos;m passionate about clean code, modern development
              practices, and mentoring fellow developers. I enjoy tackling
              complex technical challenges and am always eager to learn new
              technologies that can enhance my development toolkit and deliver
              better solutions to clients.
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mb-8 animate-slide-up"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="text-center glass p-4 rounded-xl hover-lift">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center glass p-4 rounded-xl hover-lift">
                <div className="text-3xl font-bold gradient-text-secondary">
                  50+
                </div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="text-center glass p-4 rounded-xl hover-lift">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "1.4s" }}
            >
              <button 
                className="btn-animate text-white px-8 py-3 rounded-lg font-semibold hover-lift"
                aria-label="Hire me for your next MERN stack project"
              >
                Hire Me
              </button>
              <button 
                className="glass border border-cyan-500/30 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 hover-lift"
                aria-label="View my portfolio projects"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className="flex justify-center lg:justify-end animate-slide-in-right"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden shadow-2xl animate-float aspect-square">
                  {/* Glowing Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-rose-500 to-purple-500 p-1 animate-pulse-glow">
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center relative profile-container">
                      {/* Your Profile Image */}
                      <Image
                        src="/1759055542079.jpg"
                        alt="Rohail Butt - Senior MERN Stack Developer"
                        fill
                        className="profile-image"
                        priority
                        quality={95}
                        sizes="(max-width: 768px) 320px, 384px"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div
                  className="absolute -top-8 -right-8 w-16 h-16 glass rounded-xl flex items-center justify-center animate-float hover-glow border-cyan-500/20"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-2xl">⚡</span>
                </div>
                <div
                  className="absolute -bottom-8 -left-8 w-14 h-14 glass rounded-xl flex items-center justify-center animate-float hover-glow border-cyan-500/20"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-xl">🚀</span>
                </div>
                <div
                  className="absolute top-1/2 -left-12 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float hover-glow border-cyan-500/20"
                  style={{ animationDelay: "3s" }}
                >
                  <span className="text-lg">💻</span>
                </div>
                <div
                  className="absolute top-1/4 -right-12 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float hover-glow border-cyan-500/20"
                  style={{ animationDelay: "4s" }}
                >
                  <span className="text-lg">🎯</span>
                </div>

                {/* Orbiting Elements */}
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
