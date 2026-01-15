import React from 'react';

const skillsList = [
  "C#",
  ".NET",
  "SQL Server",
  "React.js",
  "TypeScript",
  "Vite",
  "Python",
  "Pandas",
  "Numpy",
  "Entity Framework",
  "Data Science",
  "Machine Learning",
  "Clustering",
  "Deep Learning"
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <div className="bg-slate-700 text-teal-300 py-2 px-5 rounded-md font-mono font-medium shadow-lg transform hover:scale-105 transition-transform duration-200">
    {skill}
  </div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-8 bg-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-teal-400">
          Core Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsList.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
