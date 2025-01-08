import { motion } from "framer-motion";
import { Code, Database, Github, Paintbrush } from "lucide-react";

const stats = [
  { label: "Years of universal study", value: "5" },
  { label: "Years of developing", value: "2+" },
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
          <h1 className="text-4xl font-bold">William Lanhage</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creating digital artifacts with precision and creativity
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
              During my bachelors degree in Information Technology, with focus on communication and design, I had courses in HTML, CSS and JS which I found highly interesting. During my intern at Sigma Technology I spent time with developers and realised that the courses in dev were the most exciting, this led to me applying for the web developers program at Yrgo.
            </p>
            <p className="text-muted-foreground">
              During the first few months I learned courses in basic web development inlcuding HTML, CSS, JS & PHP. I also had courses in design and UX/UI. Later on the focus was turned towards frameworks such as React, WP and Laravel. At the same time we also spent time learning other technologies like databases with SQL, design patterns and CMS systems like Sanity. The education is more aimed at front end but we have also covered classes in C# and NodeJs. 
            </p>
            <p className="text-muted-foreground">
              For my last 6 months of the education I will be spending time as an intern. I landed an internship at Gothia Digital Solutions, in Gothenburg, where I mainly work in the front end. As Gothia Digital uses Angular in the front end solution, which I had never prior used, I therefore spent my final examination project in school building an API visualizer in Angular.
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