import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg",
    description: "A modern e-commerce solution built with React and Node.js"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/placeholder.svg",
    description: "Secure and intuitive banking application"
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "AI/ML",
    image: "/placeholder.svg",
    description: "Content generation powered by machine learning"
  },
  // Add more projects as needed
];

const categories = ["All", "Web Development", "Mobile", "AI/ML"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <span className="text-primary text-sm font-medium px-4 py-1 rounded-full bg-primary/10">
            Portfolio
          </span>
          <h1 className="text-4xl font-bold">Featured Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my most impactful work, showcasing innovation and technical excellence
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-xl overflow-hidden hover-scale"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <span className="text-primary text-sm">{project.category}</span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;