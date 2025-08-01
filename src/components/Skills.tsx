import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const { ref: skillsRef, isVisible: skillsVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: competenciesRef, isVisible: competenciesVisible } = useIntersectionObserver({ threshold: 0.2 });

  const skillCategories = [
    {
      category: "SQL & Data Science",
      skills: ["Advanced SQL (Redshift, BigQuery, MySQL)", "Python (NumPy, Pandas, Scikit-learn, SciPy)", "Machine Learning & Predictive Analytics", "ETL/ELT Pipelines", "Statistical Analysis"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS (S3, Lambda, EC2, Glue, QuickSight)", "Google Cloud Platform (BigQuery)", "Docker & Kubernetes", "Cloud Data Architecture", "Scalable Infrastructure Design"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      category: "Analytics & Visualization",
      skills: ["PowerBI", "Tableau", "AWS QuickSight", "Executive Dashboard Design", "Data Storytelling", "KPI Development", "Business Intelligence Strategy"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      category: "Leadership & Strategy",
      skills: ["Cross-functional Team Leadership", "Agile/Scrum Methodologies", "Stakeholder Management", "Strategic Planning", "Budget Management", "JIRA & Asana", "Change Management", "Executive Communication"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      category: "Business Operations",
      skills: ["Advanced Excel & Financial Modeling", "Process Automation", "Business Case Development", "Supply Chain Optimization", "Cost-Benefit Analysis"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
        </svg>
      )
    }
  ];

  const competencies = [
    {
      title: "Data Analytics",
      description: "Enterprise-scale analytics driving $180M+ savings through predictive modeling and optimization algorithms",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      colorClass: "bg-blue-100 text-blue-600"
    },
    {
      title: "Process Optimization",
      description: "Proven expertise scaling operations across 170+ facilities, reducing costs by $12.3M+ through new tools for inventory management, process automation, and data-driven efficiency improvements",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      colorClass: "bg-purple-100 text-purple-600"
    },
    {
      title: "Team Leadership",
      description: "Led cross-functional teams of 10+ engineers, scaling analytics capabilities and delivering enterprise solutions across Fortune 10 companies"
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      colorClass: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Enterprise-proven technical stack driving $192M+ in measurable business outcomes</p>
        
        <div ref={skillsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ${skillsVisible ? 'visible' : 'fade-in-up'}`}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`card ${skillsVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-600">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div ref={competenciesRef} className={`card ${competenciesVisible ? 'visible' : 'scale-in'}`}>
          <h3 className="text-xl font-semibold mb-8 text-gray-800 text-center">Key Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {competencies.map((competency, index) => (
              <div key={index} className={`text-center ${competenciesVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                <div className={`w-16 h-16 ${competency.colorClass} rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110`}>
                  {competency.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">{competency.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;