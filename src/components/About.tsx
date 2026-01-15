import React from 'react';

export const About = () => {
  const aboutMeText = "Experienced IT professional with 4 years of experience in the technology sector, with strong skills in .NET, React.js, C#, SQL Server, Entity Framework, and Python. Specialized in data model design, software architecture, service implementation, web server maintenance, team management, and project leadership.\n\nI have a proven track record in engineering problem-solving and goal-oriented team management, successfully leading technical teams to deliver high-impact solutions. I bring a positive, resilient, and structured approach to challenges, focusing on process systematization and continuous improvement to ensure efficient execution and achievement of shared objectives.\n\nPassionate about building scalable systems, optimizing workflows, and driving results through well-defined technical and organizational strategies.";

  return (
    <section id="about" className="py-24 px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
          About Me
        </h2>
        <div className="text-slate-300 text-lg space-y-6 text-justify">
          {aboutMeText.split('\n\n').map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
