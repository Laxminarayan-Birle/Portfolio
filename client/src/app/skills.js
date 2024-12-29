"use client"
import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [progress, setProgress] = useState(0);

  const skillData = [
    { name: 'React', target: 80 },
    { name: 'JavaScript', target:70 },
    { name: 'Data Structures',target: 60 },
    { name: 'HTML/CSS', target:75 },
    { name: 'TypeScript', target:50 },
    { name: 'SQL',target: 65 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust animation speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col items-center my-20 mx-auto py-10 ">
      <h2 className="text-5xl font-sans font-thin mb-8">Skills</h2>
      <div className="flex gap-10 flex-row justify-center w-3/4">
        <div className='w-2/4'>
          <h3 className="text-xl text-center font-sans font-thin mb-4">Technical Skills</h3>
          {skillData.slice(0, 3).map((skill) => (
            <div key={skill.name} className="mb-2 ">
              <span className="mr-2 text-2xl font-sans font-thin">{skill.name}</span>
              <div className="w-full h-4 bg-gray-200 rounded-full relative overflow-hidden">
                <div
                  className="bg-blue-500 h-4 w-full rounded-full absolute top-0 left-0 transition-all duration-1000 ease-in-out"
                  style={{ width: `${Math.min(progress, skill.target)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='w-2/4'>
          <h3 className="text-xl text-center font-sans font-thin mb-4">Soft Skills</h3>
          {skillData.slice(3).map((skill) => (
            <div key={skill.name} className="mb-2">
              <span className="mr-2 text-2xl font-sans font-thin">{skill.name}</span>
              <div className="w-full h-4 bg-gray-200 rounded-full relative overflow-hidden">
                <div
                  className="bg-blue-500 h-4 rounded-full absolute top-0 left-0 transition-all duration-1000 ease-in-out"
                  style={{ width: `${Math.min(progress, skill.target)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;