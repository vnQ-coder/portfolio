const About = () => {
  const skills = [
    'MongoDB',
    'Express.js',
    'React',
    'Node.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'RESTful APIs',
    'GraphQL',
    'Mongoose',
    'JWT Authentication',
    'AWS & Cloud Services',
    'Docker & Kubernetes',
    'Git & Version Control',
    'Testing (Jest, Mocha)',
    'Agile Development'
  ]

  const achievements = [
    {
      title: '5+ Years Experience',
      description: 'Building scalable web applications with MERN stack',
      icon: '🎯'
    },
    {
      title: '50+ Projects',
      description: 'Full-stack applications delivered successfully',
      icon: '🚀'
    },
    {
      title: '15+ Technologies',
      description: 'Expertise in modern development tools and frameworks',
      icon: '💻'
    },
    {
      title: '100% Code Quality',
      description: 'Clean, maintainable, and well-tested code',
      icon: '⭐'
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden section-transition">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate Senior MERN Stack Developer with expertise in building scalable, full-stack web applications and delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-6 gradient-text-secondary">My Journey</h3>
            <div className="space-y-6 text-gray-300">
              <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                With over 5 years of experience in full-stack development, I have dedicated my career to mastering the MERN stack and delivering robust, scalable web applications. My journey began with a passion for JavaScript and quickly evolved into expertise across the entire development stack.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                I specialize in building end-to-end solutions using MongoDB for data management, Express.js for server-side logic, React for dynamic user interfaces, and Node.js for scalable backend services. My experience spans from startup MVPs to enterprise-level applications, always focusing on performance, security, and maintainability.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                My approach emphasizes clean code architecture, modern development practices, and continuous learning. I&apos;m passionate about staying current with the latest technologies and mentoring other developers to help them grow in their careers.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="glass px-3 py-1 rounded-full text-sm font-medium text-blue-300 hover:text-white hover-glow transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-8 gradient-text">Key Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-dark p-6 rounded-xl hover-lift card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Principles Section */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-12 gradient-text">Development Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up hover-lift" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 glass-dark rounded-full flex items-center justify-center mx-auto mb-4 animate-float hover-glow">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Clean Code</h4>
              <p className="text-gray-300">
                Writing maintainable, readable, and well-documented code that follows industry best practices and design patterns.
              </p>
            </div>
            <div className="text-center animate-slide-up hover-lift" style={{ animationDelay: '1.4s' }}>
              <div className="w-16 h-16 glass-dark rounded-full flex items-center justify-center mx-auto mb-4 animate-float hover-glow" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Performance</h4>
              <p className="text-gray-300">
                Optimizing applications for speed, scalability, and efficiency to deliver exceptional user experiences.
              </p>
            </div>
            <div className="text-center animate-slide-up hover-lift" style={{ animationDelay: '1.6s' }}>
              <div className="w-16 h-16 glass-dark rounded-full flex items-center justify-center mx-auto mb-4 animate-float hover-glow" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Security</h4>
              <p className="text-gray-300">
                Implementing robust security measures and following OWASP guidelines to protect applications and user data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
