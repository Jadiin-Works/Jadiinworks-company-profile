import React from 'react';
import Link from 'next/link';

const PortfoliosComponent = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce platform with advanced features',
      image: '/portfolio/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Food Delivery App',
      category: 'Mobile Apps',
      description: 'Cross-platform mobile app for food delivery',
      image: '/portfolio/food-delivery.jpg',
      technologies: ['React Native', 'Firebase']
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'UI/UX Design',
      description: 'Complete redesign with modern principles',
      image: '/portfolio/corporate.jpg',
      technologies: ['Figma', 'HTML/CSS']
    }
  ];

  return (
    <section id="portfolios" className="relative mx-auto w-full max-w-6xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full blur-3xl bg-gradient-to-br from-blue-500/10 via-teal-400/10 to-fuchsia-500/10" />
      </div>
      
      <div
        className="text-center mb-16"
        style={{
          transition: 'all 0.6s ease'
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
          Our Portfolio
        </h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          Discover our latest projects and creative solutions that have helped businesses grow and succeed.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        style={{
          transition: 'all 0.6s ease'
        }}
      >
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="bg-transparent backdrop-blur border border-gray-300/60 dark:border-white/20 rounded-2xl p-6 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-105"
            style={{ 
              transition: 'all 0.6s ease',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl mb-6 flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="opacity-80 mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div
        className="flex items-center justify-center"
        style={{
          transition: 'all 0.6s ease'
        }}
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300/60 dark:border-white/20 bg-transparent backdrop-blur hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <span>View All Projects</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PortfoliosComponent;
