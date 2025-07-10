import React from 'react';

interface ExperienceItem {
  company: string;
  location: string;
  title: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Walmart",
      location: "Nashville, TN",
      title: "Principal Data Scientist, Supply Chain Finance",
      period: "Oct 2023 – Feb 2025",
      achievements: [
        "Led end-to-end development of labor optimization system, including roadmap planning with JIRA, analyzing historical throughput patterns to reduce variance and deliver forecasted $180MM annual savings",
        "Architected and maintained 15+ cross-platform data pipelines (SQL Server, Python, BigQuery) processing millions of daily records for real-time supply chain analytics",
        "Drove adoption of self-service analytics by designing and delivering technical training programs, empowering 50+ finance partners with SQL and BigQuery capabilities",
        "Partnered with business stakeholders to translate complex requirements into scalable technical solutions"
      ]
    },
    {
      company: "Amazon",
      location: "Nashville, TN",
      title: "Senior Business Intelligence Engineer, AWS Talent Acquisition",
      period: "Jan 2022 – Oct 2023",
      achievements: [
        "Developed and optimized data pipelines for large datasets (500M+ rows) using ETL, enabling advanced data analysis and predictive modeling",
        "Leveraged Amazon Quicksight to create and improve data visualization dashboards, utilizing Asana for customer viewpoint, assisting the development of advanced financial models for forecasting and self-service reporting",
        "Led the migration of 15 key data tables from a legacy source to a new source, necessitating change management, timeline forecasting, and tactical oversight of 10 engineers",
        "Authored comprehensive business documents as part of the financial full-year planning process, integrating data science best-practices to represent overall initiatives accurately",
        "Conducted automatic regression analysis to provide data-driven recommendations for recruiting strategies"
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
        "Created business requirements and SQL logic to launch a suite of web platforms to translate existing productivity improvement process out of Excel into web-based platform, reducing manual work time by over 40 minutes per week per analyst",
        "Created methodology in SQL to automate applying inputs from different business units to forecast $3B full year in variable fulfillment cost",
        "Developed reporting to automatically explain productivity variances to plan for non-controllable factors, writing business narratives for executive review",
        "Developed and rolled out to over 170 Fulfillment Centers a PowerBI tool and standard work process to track spare parts inventory in inefficient locations, with realized savings of $12.3M"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">A track record of delivering impactful solutions across major organizations</p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-600 text-base">{exp.location}</p>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-4">
                    <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                {exp.achievements.length > 0 && (
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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