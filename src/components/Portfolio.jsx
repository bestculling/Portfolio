import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project7 from "../assets/project7.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: "https://raw.githubusercontent.com/bestculling/Jaifoo-Chatbot/main/client/public/banner.png",
    title: "Jaifoo AI Chatbot 🤖",
    description: "Jaifoo chatbot app built with MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS) and Google Generative AI.",
    links: {
      github: "https://github.com/bestculling/Jaifoo-Chatbot",
    },
  },
  {
    img: "https://raw.githubusercontent.com/bestculling/Bitkub-Price-Dashboard/main/public/preview.png",
    title: "Real-time Cryptocurrency prices",
    description: "This React.js application displays real-time cryptocurrency prices from the Bitkub API 📈. It lists popular cryptocurrencies with their latest price, price change, 24-hour high/low, and other relevant information 💰.",
    links: {
      github: "https://github.com/bestculling/Bitkub-Price-Dashboard",
    },
  },
  {
    img: project7,
    title: "AI Resume Builder 🤖",
    description: "This React application is an AI-powered resume builder that leverages Google Generative AI 🤖. It offers intelligent suggestions for profile summaries and experience descriptions, features a Markdown-based resume editor, and includes a content management system using Strapi. Built with ReactJS and Tailwind CSS, it provides a responsive and user-friendly interface for creating professional resumes with AI assistance 📄✨.",
    links: {
      github: "https://github.com/bestculling/AI-Resume-Builder",
    },
  },
  {
    img: "https://raw.githubusercontent.com/bestculling/ShopTouch-Web-Application/main/public/thubmnail.png",
    title: "ShopTouch",
    description: "This is a full-stack e-commerce platform built using Next.js for the frontend, Tailwind CSS for styling, and MongoDB for the database. It provides a seamless shopping experience with features for browsing products, managing a shopping cart, and processing orders.",
    links: {
      github: "https://github.com/bestculling/ShopTouch-Web-Application",
    },
  },
  {
    img: project2,
    title: "Traveling Assitence",
    description: "Traveling assistance application that allows users to browse tourist attractions in Thailand with dynamic features such as option filters by using React and JSON.",
    links: {
      github: "https://github.com/bestculling/Traveling-Assitence",
    },
  },
  {
    img: project1,
    title: "Responsive education website",
    description: "A data visualization project using D3.js and other libraries.",
    links: {
      github: "https://github.com/bestculling/react-education-web",
    },
  },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                {/* <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a> */}
                <a href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                  <AiOutlineGithub />
                </a>

              </div>

            </div>

          </div>
        </Reveal>
      ))}

    </div>
  )
}

export default Portfolio