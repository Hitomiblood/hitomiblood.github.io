import React from 'react';
import { ProjectCard, type ProjectData } from './ProjectCard';

const projectsData: ProjectData[] = [
  {
    title: "Bank Loan Simulator",
    description: "A complete full-stack web system for managing and simulating bank loans, developed with a layered architecture and modern technologies. It allows users to apply for loans and administrators to manage them, featuring JWT authentication and accurate financial calculations.",
    tags: [".NET 8", "React", "TypeScript", "EF Core", "Material-UI", "JWT"],
    repoUrl: "https://github.com/Hitomiblood/BankLoanSimulator"
  },
  {
    title: "Master's Works in Data Science & AI",
    description: "A collection of relevant works from the Master of Data Science and AI. Key projects include exploring clustering techniques, advanced data preprocessing, and a final thesis on using Deep Learning for analyzing the sperm quality of bee drones.",
    tags: ["Python", "Pandas", "Numpy", "Scikit-learn", "Deep Learning", "Clustering"],
    repoUrl: "https://github.com/Hitomiblood/TrabajosMaestriaCienciadeDatos"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
