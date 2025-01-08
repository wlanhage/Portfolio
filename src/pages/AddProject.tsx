import React, { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const AddProject = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github_url: '',
    live_url: '',
    image_url: '',
    technologies: '',
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (newProject) => {
      const { data, error } = await supabase
        .from("projects")
        .insert(newProject);
      if (error) throw error;
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("projects");
      },
    }
  );

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'your_password') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      ...formData,
      technologies: formData.technologies.split(',').map((tech) => tech.trim()),
    };
    mutation.mutate(newProject);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <label className="block text-sm font-medium">Enter Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Project Title"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors min-h-[150px]"
            placeholder="Project Description"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">GitHub URL</label>
          <input
            type="url"
            name="github_url"
            value={formData.github_url}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="GitHub URL"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Live URL</label>
          <input
            type="url"
            name="live_url"
            value={formData.live_url}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Live URL"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Image URL</label>
          <input
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Image URL"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Technologies (comma separated)</label>
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Technologies"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;