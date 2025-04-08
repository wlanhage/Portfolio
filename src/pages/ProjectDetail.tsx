import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { sanityClient, urlFor } from "../../client";
import { Button } from "@/components/ui/button";
import Loader from "@/wComponents/loader";
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
        <Loader />
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
            src={urlFor(project.image).width(1200).url()}
            alt={project.image.alt}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <p className="text-sm text-gray-500">{project.time}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Main takeaways</h3>
                  {project.learnings.map((learning) => {
                    const [learningTitle, learningDescription] = learning.split(':').map(str => str.trim());
                    return (
                      <p key={learning} className="text-sm text-muted-foreground mb-2">
                        <span className="font-bold text-primary">{learningTitle}:</span> {learningDescription}
                      </p>
                    );
                  })}
                </div>
              </div>
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
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
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