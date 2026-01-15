import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-slate-900">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 pb-4">
          Miguel Santiago Gómez Suárez
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-300">
          .NET FullStack Developer & Data Scientist
        </p>
      </div>
    </section>
  );
};
