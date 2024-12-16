import { motion } from "framer-motion";
import { Code, Database, Github, Paintbrush } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "12+" },
  { label: "Projects Completed", value: "46+" },
  { label: "Worldwide Clients", value: "20+" }
];

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-5 h-5" />,
    skills: [
      "React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap",
      "JavaScript", "TypeScript"
    ]
  },
  {
    title: "Backend Development",
    icon: <Code className="w-5 h-5" />,
    skills: [
      "PHP", "Node.js", "C#", "WordPress", "Laravel"
    ]
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "SQL", "Supabase", "Sanity", "Git", "GitHub",
      "Vercel", "Cypress"
    ]
  },
  {
    title: "Design Tools",
    icon: <Paintbrush className="w-5 h-5" />,
    skills: [
      "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"
    ]
  }
];

const About = () => {
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
            About Me
          </span>
          <h1 className="text-4xl font-bold">Passionate Developer</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences with precision and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl text-center"
            >
              <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">My Journey</h2>
            <p className="text-muted-foreground">
              With over a decade of experience in software development, I've had the privilege of working with amazing clients and teams around the world. My passion lies in creating intuitive and engaging user experiences that make a difference.
            </p>
            <p className="text-muted-foreground">
              I specialize in full-stack development with a focus on modern web technologies and best practices. My approach combines technical expertise with creative problem-solving to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-primary">
                    {category.icon}
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="glass-card px-4 py-2 rounded-full text-sm hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;