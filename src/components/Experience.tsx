import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ExperienceItem {
  company: string;
  location: string;
  title: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const { ref: timelineRef, isVisible: timelineVisible } = useIntersectionObserver({ threshold: 0.1 });

  const experiences: ExperienceItem[] = [
    {
      company: "Walmart",
      location: "Nashville, TN",
      title: "Principal Data Scientist, Supply Chain Finance",
      period: "Oct 2023 – Feb 2025",
      achievements: [
        "Spearheaded $180MM labor optimization initiative: architected predictive analytics system analyzing historical throughput patterns across fulfillment network, reducing operational variance by 25%",
        "Built enterprise data infrastructure: designed 15+ production pipelines processing 500M+ daily records, enabling real-time supply chain visibility and predictive forecasting",
        "Scaled organizational analytics capability: trained 50+ finance professionals on SQL/BigQuery, reducing technical team dependency by 60% and accelerating decision-making cycles",
        "Led cross-functional collaboration with C-suite executives and operations teams, translating $3B+ business requirements into scalable data science solutions"
      ]
    },
    {
      company: "Amazon",
      location: "Nashville, TN",
      title: "Senior Business Intelligence Engineer, AWS Talent Acquisition",
      period: "Jan 2022 – Oct 2023",
      achievements: [
        "Architected high-performance ETL pipelines processing 500M+ rows, reducing data processing time by 40% and enabling machine learning model deployment",
        "Delivered executive-level analytics platform using Amazon QuickSight, creating self-service dashboards that automated 80% of manual reporting processes",
        "Managed complex data migration project: led 10-engineer team to migrate 15 critical data tables with zero downtime, completing 6 months ahead of schedule",
        "Developed strategic business cases for $50M+ annual planning cycles, leveraging predictive analytics to improve forecast accuracy by 30%",
        "Implemented automated regression models for talent acquisition, optimizing hiring strategies and reducing time-to-fill by 25%"
      ]
    },
    {
      company: "Amazon",
      location: "Nashville, TN",
      title: "Finance Manager",
      period: "Nov 2021 – Jan 2022",
      achievements: []
    },
    {
      company: "Amazon",
      location: "Nashville, TN",
      title: "Senior Financial Analyst",
      period: "Mar 2020 – Nov 2021",
      achievements: []
    },
    {
      company: "Amazon",
      location: "Nashville, TN",
      title: "Financial Analyst",
      period: "Jun 2018 – Mar 2020",
      achievements: [
        "Led digital transformation initiative: built web-based analytics platform replacing Excel workflows, saving 2,000+ analyst hours annually and improving data accuracy by 90%",
        "Developed automated forecasting system using advanced SQL, enabling real-time $3B cost predictions and reducing forecast preparation time from weeks to hours",
        "Created executive reporting system with automated variance analysis, providing C-suite with real-time operational insights and predictive recommendations",
        "Scaled enterprise PowerBI solution across 170+ fulfillment centers, optimizing spare parts inventory management and delivering $12.3M in verified cost savings"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">A track record of delivering impactful solutions across major organizations</p>
        
        <div ref={timelineRef} className={`timeline ${timelineVisible ? 'visible' : 'fade-in-left'}`}>
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${timelineVisible ? 'animate-fade-in-left' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-2">{exp.title}</h3>
                    <p className="text-lg text-indigo-600 font-medium">{exp.company}</p>
                    <p className="text-gray-600 text-base">{exp.location}</p>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-4">
                    <span className="inline-block bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium border border-indigo-200">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                {exp.achievements.length > 0 && (
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 leading-relaxed text-base">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;