import React from 'react';

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/miguel-santiago-g%C3%B3mez-su%C3%A1rez/",
  github: "https://github.com/Hitomiblood",
  email: "miguelsantiago1999@hotmail.com"
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">
          Get In Touch
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`mailto:${socialLinks.email}`} className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
            Say Hello
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
            LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
