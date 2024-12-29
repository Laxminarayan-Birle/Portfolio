import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles/Leadership.module.css'; // Import styles from Leadership.module.css

const Leadership = ({ leadershipText, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="leadership" className={styles.leadershipSection}> 
      <div className="flex flex-col items-center"> 
        <h2 className="text-4xl font-bold mb-8">{leadershipText}</h2> 
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-6">
            <p className="text-lg mb-6">
              As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies, and am able to innovate and inspire a positive, collaborative work environment.
            </p>
          </div>
          <div className="md:w-1/3 p-6">
            <div className="relative">
              <div
                className={`${styles.sliderInner} absolute top-0 left-0 transition-all duration-500 ease-in-out`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div key={index} className={styles.sliderItem}>
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      width={300}
                      height={200}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="text-white bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-2 mr-2"
                onClick={handlePrev}
              >
                ❮
              </button>
              <button
                className="text-white bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-2"
                onClick={handleNext}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;