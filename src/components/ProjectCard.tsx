import React from 'react';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
}

export const ProjectCard = ({ title, description, tags, repoUrl }: ProjectData) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-teal-400 mb-4">{title}</h3>
        <p className="text-slate-300 mb-6">{description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="bg-slate-700 text-teal-300 text-sm py-1 px-3 rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
          >
            View on GitHub &rarr;
          </a>
        )}
      </div>
    </div>
  );
};
