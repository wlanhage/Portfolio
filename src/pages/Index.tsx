import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, Variant } from "framer-motion";
import { Mail, Twitter, Instagram, Dribbble, Facebook, Github, Linkedin } from 'lucide-react';
import MainNavbar from '@/wComponents/mainNavbar';
import byline from './imgs/byline.jpg';
import SBG from './imgs/SBG.png';
import waveryFingerprint from '../imgs/wavey-fingerprint.svg';
import sunTornado from '../imgs/sun-tornado.svg';
import protrudingSquares from '../imgs/protruding-squares.svg';
import rosePetals from '../imgs/rose-petals.svg';
import largeTriangles from '../imgs/large-triangles.svg';
import liquidCheese from '../imgs/liquid-cheese.svg';
import Cursor from '@/components/CustomCursor';

import { Link } from "react-router-dom";

const Index = () => {
  // Custom motion values for interactive elements
  const y = useMotionValue(0);
  const rotate = useTransform(y, [-100, 100], [-10, 10]);
  
  // Content container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  // Profile card variants
  const profileVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: 45
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        duration: 0.7
      }
    }
  };
  
  // Text item variants with floating effect
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 10,
        duration: 0.8
      }
    }
  };
  
  // Stat card variants with 3D perspective
  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 12
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  // Skill card variants
  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        bounce: 0.3,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Social icon variants
  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.8 + (i * 0.1)
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className='w-screen h-screen-minus-500'>
      <Cursor />
      <div className="min-h-screen max-w-[1300px] mx-auto p-6">

        {/* Main Content */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 items-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Card */}
          <motion.div
            variants={profileVariants}
            className="bg-white rounded-3xl p-6 w-full lg:w-96 relative overflow-hidden"
            style={{
              backgroundImage: `url(${liquidCheese})`,
              backgroundSize: 'cover',
            }}
            whileHover={{
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-white opacity-10"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear"
              }}
            />
            <div className="relative">
              <motion.div 
                className="bg-orange-600 rounded-2xl overflow-hidden mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="aspect-square">
                  <img src="/byline.jpg" alt="William Lanhage" className="object-cover" />
                </div>
              </motion.div>
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold text-black mb-2"
              >
                WILLIAM LANHAGE
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 mb-6"
              >
                Web developers student, excited about evolving in the field of software development. Always keeping track of the latest trends and the hottest topic in the area.
              </motion.p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <Link to="https://www.linkedin.com/in/william-lanhage/">
                  <motion.div
                    custom={0}
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <Linkedin size={35} className="w-105 h-105 text-gray-400 cursor-pointer" />
                  </motion.div>
                </Link>
                <Link to="https://github.com/wlanhage">
                  <motion.div
                    custom={1}
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <Github size={35} className="w-105 h-105 text-gray-400 cursor-pointer" />
                  </motion.div>
                </Link>
                <Link to="mailto:lanhagew@gmail.com">
                  <motion.div
                    custom={2}
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <Mail size={35} className="w-105 h-105 text-gray-400 cursor-pointer" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="flex-1 w-full h-full lg:w-1/3 flex justify-between flex-col"
            variants={containerVariants}
          >
            <div className='h-full w-full'>
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.h1 
                  variants={itemVariants}
                  className="text-6xl font-bold text-white mb-2 relative z-10"
                >
                  WEB
                </motion.h1>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-5 bg-orange-500/20 w-full -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-6xl font-bold text-gray-700 mb-6"
              >
                DEVELOPER
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-400 mb-12 max-w-2xl"
              >
                Junior web developer with a passion for web technologies and a keen eye for design. With a bachelors degree in communication/design and a web developers graduate in May 2025. I have experience in both building websites and being part of the full process from an idea to a finished product.
              </motion.p>

              {/* Stats */}
              <div className="flex gap-12 mb-12">
                <motion.div
                  variants={statVariants}
                  whileHover="hover"
                  style={{ perspective: "1000px" }}
                >
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    animate={{ 
                      y: [0, -5, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 3,
                        repeatType: "mirror" 
                      }
                    }}
                  >
                    5
                  </motion.h3>
                  <p className="text-gray-400 text-sm">YEARS OF<br />STUDIES</p>
                </motion.div>
                
                <motion.div
                  variants={statVariants}
                  whileHover="hover"
                  style={{ perspective: "1000px" }}
                >
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    animate={{ 
                      y: [0, -5, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 3,
                        repeatType: "mirror",
                        delay: 0.3
                      }
                    }}
                  >
                    10+
                  </motion.h3>
                  <p className="text-gray-400 text-sm">OPEN SOURCE<br />GITHUB PROJECTS</p>
                </motion.div>
                
                <motion.div
                  variants={statVariants}
                  whileHover="hover"
                  style={{ perspective: "1000px" }}
                >
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    animate={{ 
                      y: [0, -5, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 3,
                        repeatType: "mirror",
                        delay: 0.6
                      }
                    }}
                  >
                    6+
                  </motion.h3>
                  <p className="text-gray-400 text-sm">MONTHS OF <br /> DEVELOPERS <br />INTERN EXPERIENCE</p>
                </motion.div>
              </div>
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/projects">
                <motion.div 
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="bg-orange-500 p-6 rounded-xl cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${waveryFingerprint})`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'soft-light'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  />
                  <div className="flex justify-between h-full w-full flex-col relative z-10">
                    <motion.h3 
                      className="text-white text-xl font-bold mb-8"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                    >
                      CURRENT OCUPATION:
                    </motion.h3>
                    <motion.h2 
                      className="text-white text-4xl font-bold"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      INTERN
                    </motion.h2>
                  </div>
                  <div className="flex justify-between relative z-10">
                    <motion.h3 
                      className='text-white text-lg font-bold'
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      GOTHIA DIGITAL SOLUTIONS
                    </motion.h3>
                    <motion.svg 
                      className="w-6 h-6 text-white" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </motion.div>
              </Link>
              
              <motion.div 
                variants={skillCardVariants}
                whileHover="hover"
                className="bg-lime-400 p-6 rounded-xl cursor-pointer relative overflow-hidden"
                style={{
                  backgroundImage: `url(${largeTriangles})`,
                  backgroundSize: 'cover',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-lime-300/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                />
                <motion.h3 
                  className="text-black text-xl font-bold mb-8 relative z-10"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  CURRENTLY WORKING ON:
                </motion.h3>
                <motion.h2 
                  className='text-black text-4xl font-bold relative z-10'
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  A PORTFOLIO
                </motion.h2>
                <div className="flex justify-between relative z-10">
                  <motion.h3 
                    className='text-black text-lg font-bold'
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    REACT, TS, NODE, EXPRESS, TAILWIND
                  </motion.h3>
                  <motion.svg 
                    className="w-6 h-6 text-black" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
