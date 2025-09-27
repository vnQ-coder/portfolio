import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring advanced search, payment integration, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'JWT'],
      category: 'Mobile Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A sophisticated analytics platform that uses machine learning to provide business insights and predictive analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'React', 'TensorFlow', 'Docker', 'Kubernetes'],
      category: 'Data Science',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Cloud Migration Project',
      description: 'Successfully migrated a legacy enterprise system to AWS cloud infrastructure, improving performance by 300%.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      category: 'DevOps',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with virtual tours, property management, and integrated CRM system.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebRTC'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Healthcare Management System',
      description: 'A HIPAA-compliant healthcare management system with patient records, appointment scheduling, and telemedicine features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'HIPAA'],
      category: 'Healthcare',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'DevOps', 'Healthcare']

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent work and the innovative solutions I've delivered for clients across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                        View Live
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-400 to-gray-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-blue-700 transition-colors duration-200">
                      View
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm font-semibold hover:bg-gray-50 transition-colors duration-200">
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
