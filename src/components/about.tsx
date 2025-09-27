const About = () => {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'AWS & Cloud Computing',
    'Database Design',
    'UI/UX Design',
    'Project Management',
    'Team Leadership',
    'Agile Methodologies'
  ]

  const achievements = [
    {
      title: '5+ Years Experience',
      description: 'Leading technology teams and delivering complex solutions',
      icon: '🎯'
    },
    {
      title: '200+ Projects',
      description: 'Successfully completed projects across various industries',
      icon: '🚀'
    },
    {
      title: '50+ Team Members',
      description: 'Managing and mentoring a talented development team',
      icon: '👥'
    },
    {
      title: '99% Client Satisfaction',
      description: 'Maintaining high standards and client relationships',
      icon: '⭐'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate technology leader with a proven track record of delivering innovative solutions and building high-performing teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-600">
              <p>
                With over 5 years of experience in the technology industry, I have dedicated my career to creating meaningful impact through innovative software solutions. My journey began as a passionate developer who quickly realized the power of technology to transform businesses and improve lives.
              </p>
              <p>
                As the Founder and CEO of Your Company, I've built a team of 50+ skilled engineers who share my vision of delivering exceptional technology solutions. We've successfully completed over 200 projects, helping startups and enterprises scale their digital presence and achieve their business goals.
              </p>
              <p>
                My approach combines technical expertise with strategic thinking, ensuring that every solution we deliver not only meets current needs but also scales for future growth. I'm passionate about mentoring young entrepreneurs and providing them with the resources and guidance they need to succeed.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">My Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h4>
              <p className="text-gray-600">
                Building strong partnerships and fostering teamwork to achieve exceptional results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">
                Maintaining the highest standards in everything we do, from code quality to client relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
