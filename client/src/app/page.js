//@next/react use client
'use client'
import React ,{useState,useEffect} from 'react';
import Image from 'next/image';
import styles from'./styles/Home.module.css';
import Skills from './skills';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
const projects = [
  {
    title: 'myportfolio',
    description: '',
    languages: 'JavaScript: 51.5%, SCSS: 45.3%, HTML: 3%',
    stars: 0,
    updated: 'January 17, 2024',
    cloneUrl: '/clone1',
    repoUrl: '/repo1',
  },
  {
    title: 'create-react-app-lambda',
    description: 'Config files for my GitHub profile.',
    languages: 'code yet to be deployed.',
    stars: 0,
    updated: 'December 7, 2023',
    cloneUrl: '/clone2',
    repoUrl: '/repo2',
  },
  {
    title: 'Task-Management',
    description: 'It is a task management system where all user can track their own tasks with the status of in-progress, pending and completed.',
    languages: 'JavaScript: 78.8%, CSS: 5%, HTML: 2.1%',
    stars: 0,
    updated: 'February 5, 2023',
    cloneUrl: '/clone3',
    repoUrl: '/repo3',
  },
  {
    title: 'Mohd-shahid-iqbal',
    description: 'Config files for my GitHub profile.',
    languages: 'code yet to be deployed.',
    stars: 0,
    updated: 'October 27, 2021',
    cloneUrl: '/clone4',
    repoUrl: '/repo4',
  },
];

const images = [
  "/images/add1.png",
  "/images/add2.png",
  "/images/add3.png",
  "/images/add4.png",
  "/images/add5.png",
  "/images/add6.png",
];

export default function Home() {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
   <>
   <div className="bg-gradient-to-b from-pink-200 to-pink-400 min-h-screen flex flex-col items-center justify-center text-center">
      <header className="fixed  top-0 w-full p-5 flex gap-10 items-center text-sm text-gray-800">
        <div className="text-xl font-semibold">
          &lt;Mohd /&gt;
        </div>
        <nav className="text-xl space-x-4 font-sans font-thin">
          <a href="#projects" className="hover:text-gray-600">Projects</a>
          <a href="#resume" className="hover:text-gray-600">Resume</a>
          <a href="#aboutme" className="hover:text-gray-600">About</a>
          <a href="#skills" className="hover:text-gray-600">Skills</a>
        </nav>
      </header>

      <main className="flex flex-col items-center w-2/3">
        <h1 className="text-7xl font-sans font-thin text-white mb-4">Mohd Shahid Iqbal</h1>
        <div className="overflow-hidden w-full h-8 relative">
    <p className="whitespace-nowrap animate-scroll text-lg font-sans font-thin text-white">
      Passionate about changing the world with technology.
    </p>
</div>

        <div className="flex space-x-4 mb-8">
          <a href="https://github.com/Laxminarayan-Birle/RaceTask" target="_blank" rel="noopener noreferrer">
          <GitHubIcon/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        <a href="#aboutme"><button className="px-6 py-3  text-white font-medium border border-white rounded-md hover:shadow-lg hover:bg-gray-100 hover:text-black transition-all">
        
        More about me
        </button></a>
      </main>
    </div>
 

  <main className="w-full p-20 bg-gray-200">
    
    <div className="flex flex-col md:flex-row justify-around items-center  md:space-y-0 md:space-x-8">
      <div className="hidden md:block w-80 h-80 rounded-full overflow-hidden border-4">
        <Image 
          src="/images/shahid.png"
          alt="Profile Picture"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>

      <div id="aboutme" className="flex justify-center flex-col p-10 w-2/4">
      <h1 className="text-4xl text-center font-sans font-thin text-gray-800 mb-6">About Me</h1>
        <p className="text-lg font-sans font-thin text-gray-500 leading-relaxed mb-4">
          My name is Mohd Shahid Iqbal. I’m a post-graduate of 2020 from Jamia Hamdard University at New Delhi with a degree in Masters of
          Computer Application. I am most passionate about giving back to
          the community, and my goal is to pursue this passion within the
          field of software engineering. In my free time I like working on
          open source projects.
        </p>
        <a href="https://drive.google.com/file/d/1PvGOBXBxGKhrUFPC3SsgOtbhlAqrD457/view?usp=drive_link " target='_blank'>
        <button className="px-6 py-3 items-center text-black font-medium rounded-md border border-black  hover:shadow-lg hover:bg-black hover:text-white">
          Resume
        </button></a>
      </div>
    </div>
  </main>


  <div className="container mx-auto py-10">
      <h1 className=" text-6xl font-sans font-thin mb-8 text-center">Experiences</h1>

      <div className="grid w-full p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex items-center flex-col gap-10">
          <div className="mr-4">
            <Image src="/images/simpana.png" alt="Simpana Technology" width={250} height={100} />
          </div>
          <div>
            <h3 className="text-xl  font-sans font-thin">React Developer</h3>
            <p className=" text-xl font-sans font-thin">Aug 2020 - May 2022</p>
          </div>
        </div>

        <div className="flex items-center flex-col gap-10">
          <div className="mr-4">
            <Image src="/images/vendify.png" alt="Vendify" width={250} height={100} />
          </div>
          <div>
            <h3 className="text-xl  font-sans font-thin">Senior Software Engineer</h3>
            <p className=" text-xl font-sans font-thin">May 2022 - March 2023</p>
          </div>
        </div>

        <div className="flex items-center flex-col gap-10">
          <div className="mr-4">
            <Image src="/images/paceTrader.png" alt="PACE" width={250} height={200} />
          </div>
          <div>
            <h3 className="text-xl  font-sans font-thin">React Developer</h3>
            <p className=" text-xl font-sans font-thin">March 2023 - Present</p>
          </div>
        </div>
      </div>
    </div>

    <div id="projects" className="container  mx-auto py-10 bg-gray-50 ">
      <h1 className="text-5xl font-sans font-thin mb-8 text-center">Recent Projects</h1>

      <div className="grid shadow-lg grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-md shadow-md p-6 mb-8"
          >
            <h2 className="text-xl font-thin mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex gap-2 flex-col md:flex-row">
              <button className="border border-gray-600 hover:bg-gray-500 font-bold py-2 px-4 rounded transition-none">
                <GitHubIcon/>
                <a
                  href={project.cloneUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 ml-3 hover:text-white font-sans font-thin"
                >
                  Clone Project
                </a>
              </button>
              <button className="border border-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded transition-all font-sans font-thin">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-thin text-gray-500 hover:text-white">
                  Repo
                </a>
              </button>
            </div>

            <hr className="my-4" />

            <div className="flex items-center mb-2">
              <span className="mr-2 font-sans font-thin">Languages:</span>
              <span className="text-gray-500 font-sans font-thin">{project.languages}</span>
            </div>

            <div className="flex gap-10 items-center mb-2">
              <button className="font-sans border border-black p-1 rounded-md hover:bg-gray-500 hover:text-white">Stars</button>
              <span className="text-gray-500 text-sm">Updated on {project.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <section id="leadership" className={styles.projects}>
  <div className="flex flex-col items-center justify-center">
    <h2 className="text-5xl font-thin mb-8">Leadership</h2>
    <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
      <div className="lg:w-1/2 p-6">
        <p className="text-lg text-gray-600 leading-relaxed">
          As a React developer with leadership experience, I bring technical expertise, project management skills,
          and strong communication abilities to the table. I have a proven track record of building large-scale applications,
          optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects,
          creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work.
          <br />
          <br />
          I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled
          listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help
          them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always
          up-to-date with the latest developments in React and related technologies, and I am able to innovate and inspire a positive,
          collaborative work environment.
        </p>
      </div>

      <div className="lg:w-1/2 p-6 relative">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    <Skills id="skills"/>

      <div className=" mx-auto py-16 text-center bg-gray-200">
        <h1 className="text-5xl font-sans font-thin mb-8">Get In Touch</h1>
        <p className="text-lg font-sans font-thin mb-6 mx-20">
          I m currently looking for full-time React Developer/Frontend Developer
          opportunities. If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me at{' '}
          <a
            href="mailto:khansait59@gmail.com"
            className="text-blue-500 underline"
          >
            khansait59@gmail.com
          </a>
          .
        </p>
        <p className=" font-bold">
        &lt;/&gt; <FavoriteIcon/> by{' '} 
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Mohd Shahid Iqbal
          </a>{' '}
          using{' '}
          &lt;Next.js/&gt;
        </p>
      </div>
   </>
  );
}
