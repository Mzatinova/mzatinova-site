import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
//import ProjectCard from './ProjectCard';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Mzatinova Eduspace',
      description: 'AI-powered learning platform with flashcards, progress tracking, and community features.',
      category: 'Education',
      filter: 'education',
      status: 'coming-soon'
    },
    {
      id: 2,
      title: 'Smartfielectronics',
      description: 'Electronics e-commerce store with delivery and church/school-specific products.',
      category: 'E-commerce',
      filter: 'ecommerce',
      link: 'http://localhost:8081',
      status: 'live'
    },
    {
      id: 3,
      title: 'Zanga Social',
      description: 'Social media app for youth and creatives with sharing, gamification, and reactions.',
      category: 'Social Media',
      filter: 'social',
      status: 'in-development'
    },
    {
      id: 4,
      title: 'HealthCare Management System',
      description: 'Comprehensive healthcare management solution with patient records and appointment scheduling.',
      category: 'Healthcare',
      filter: 'web'
    },
    {
      id: 5,
      title: 'FinTech Mobile App',
      description: 'Secure mobile banking application with real-time transactions and financial analytics.',
      category: 'Mobile App',
      filter: 'mobile'
    },
    {
      id: 6,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced analytics platform using machine learning for business intelligence.',
      category: 'AI/ML',
      filter: 'ai'
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'education', label: 'Education' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'social', label: 'Social Media' },
    { key: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.filter === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the platforms we're building, their purpose, and their current development stage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeFilter === filter.key
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              link={project.link}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
