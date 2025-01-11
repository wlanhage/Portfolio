import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, PlusCircle } from "lucide-react";
import { sanityClient } from "../../client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const query = '*[_type == "project"] | order(_createdAt desc)';
      const data = await sanityClient.fetch(query);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading projects...</div>
      </div>
    );
  }

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
            Explore my latest work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/projects/${project._id}`}>
                <Card className="glass-card hover-scale overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;