import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { sanityClient } from "../../client";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const query = `*[_type == "project" && _id == $id][0]`;
      const params = { id };
      const data = await sanityClient.fetch(query, params);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading project...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <Link to="/projects">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="glass-card rounded-xl overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary"
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
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Github size={20} />
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;