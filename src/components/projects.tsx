import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'Task Management App',
      description: 'A full-stack MERN application for project and task management with real-time collaboration, file sharing, and team analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT'],
      category: 'MERN Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'E-Learning Platform',
      description: 'A comprehensive learning management system with video streaming, progress tracking, quizzes, and certificate generation.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AWS S3', 'Stripe'],
      category: 'MERN Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'A social media management platform with post scheduling, analytics, and multi-platform integration using MERN stack.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Chart.js'],
      category: 'MERN Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Inventory Management System',
      description: 'A robust inventory tracking system with barcode scanning, automated reordering, and comprehensive reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mongoose', 'PDF Generation'],
      category: 'MERN Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Restaurant Ordering System',
      description: 'A full-stack restaurant management system with online ordering, kitchen display, and payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'PayPal API'],
      category: 'MERN Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real Estate Portal',
      description: 'A comprehensive property listing platform with advanced search, virtual tours, and agent management system.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AWS S3', 'Google Maps API'],
      category: 'MERN Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const categories = ['All', 'MERN Stack', 'React Applications', 'Node.js APIs', 'Database Solutions', 'Full-Stack']

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">MERN Stack Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of my recent full-stack MERN applications showcasing modern web development practices and scalable architecture.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-lift ${
                category === 'All'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-pulse-glow'
                  : 'glass text-gray-300 hover:text-white hover:bg-blue-500/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-white mb-8 gradient-text-secondary">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="glass-dark rounded-xl overflow-hidden hover-lift card-hover animate-slide-up"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold gradient-text">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="glass px-3 py-1 rounded-full text-sm font-medium text-blue-300">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="glass px-2 py-1 rounded text-xs font-medium text-blue-300 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="btn-animate text-white px-4 py-2 rounded-lg font-semibold hover-lift">
                        View Live
                      </button>
                      <button className="glass border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-300 hover-lift">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-white mb-8 gradient-text">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-dark rounded-xl overflow-hidden hover-lift card-hover animate-slide-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="relative h-40 bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold gradient-text">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="glass px-2 py-1 rounded text-xs font-medium text-blue-300">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="glass px-2 py-1 rounded text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="glass px-2 py-1 rounded text-xs text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded text-sm font-semibold hover-lift">
                      View
                    </button>
                    <button className="glass border border-blue-500/30 text-blue-400 px-3 py-1 rounded text-sm font-semibold hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-300">
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-dark rounded-xl p-8 text-white animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="animate-scale-in" style={{ animationDelay: '1.7s' }}>
                <div className="text-3xl font-bold mb-2 gradient-text">50+</div>
                <div className="text-gray-300">MERN Projects</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '1.9s' }}>
                <div className="text-3xl font-bold mb-2 gradient-text-secondary">15+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '2.1s' }}>
                <div className="text-3xl font-bold mb-2 gradient-text">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '2.3s' }}>
                <div className="text-3xl font-bold mb-2 gradient-text-secondary">100%</div>
                <div className="text-gray-300">Code Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
