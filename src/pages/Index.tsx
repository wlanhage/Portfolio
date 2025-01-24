import React from 'react';
import { Mail, Twitter, Instagram, Dribbble, Facebook, Github, Linkedin } from 'lucide-react';
import MainNavbar from '@/wComponents/mainNavbar';
import byline from './imgs/byline.jpg';
import SBG from './imgs/SBG.png';


import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className=' w-screen h-screen-minus-500'>
      {/* Navbar */}
     
      <div className="min-h-screen max-w-[1300px] mx-auto p-6">

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl p-6 w-full lg:w-96">
            <div className="relative">
              <div className="bg-orange-600 rounded-2xl overflow-hidden mb-4">
                <div className="aspect-square">
                  <img src="/byline.jpg" alt="William Lanhage" className="object-cover" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">WILLIAM LANHAGE</h2>
              <p className="text-gray-600 mb-6">A web developers student, excited about evolving in the field of software development. Always keeping track of the latest trends and the hottest topic in the area.</p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <Linkedin size={35} className="w-105 h-105 text-gray-400 transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
                <Github size={35} className="w-105 h-105 text-gray-400 transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
                <Mail size={35} className="w-105 h-105 text-gray-400 transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full h-full lg:w-1/3 flex justify-between flex-col">
          <div className='h-full w-full'>
            <h1 className="text-6xl font-bold text-white mb-2">WEB</h1>
            <h1 className="text-6xl font-bold text-gray-700 mb-6">DEVELOPER</h1>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Junior web developer with a passion for web technologies and a keen eye for design. With a bachelors degree in communication/design and a web developers graduate in May 2025. I have experience in both building websites and being part of the full process from an idea to a finished product.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-12">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">5</h3>
                <p className="text-gray-400 text-sm">YEARS OF<br />EXPERIENCE</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">+46</h3>
                <p className="text-gray-400 text-sm">PROJECTS<br />COMPLETED</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">+20</h3>
                <p className="text-gray-400 text-sm">WORLDWIDE<br />CLIENTS</p>
              </div>
            </div>
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/projects">
              <div className="bg-orange-500 p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="flex justify-between h-full w-full flex-col">
                  <h3 className="text-white text-xl font-bold mb-8">CURRENT OCUPATION:</h3>
                  <h2 className="text-white text-xl font-bold mb-8">INTERN</h2>
                </div>
                <div className="flex justify-end">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
              <div className="bg-lime-400 p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <h3 className="text-black text-xl font-bold mb-8">CURRENTLY WORKING ON : <br /> A PORTFOLIO <br /> </h3>
                <div className="flex justify-end">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
