import { useState, useCallback } from 'react';

export interface ExperienceProject {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

export const useGetExperienceProjects = () => {
  const [projects, setProjects] = useState<ExperienceProject[]>([
    {
      id: '1',
      title: 'Multi Stock Sync',
      company: 'Centro de prácticas LastDon',
      startDate: 'Dic 2024',
      endDate: 'Feb 2025',
      description: 'Desarrollo de un software de sincronización de productos con conexión a Mercado Libre, utilizando JWT para autenticación y autorización, y una API RESTful para la gestión de productos.',
      technologies: ['React', 'Node.js', 'Bootstrap', 'Chart.js'],
      imageUrl: '/experience_projects/multistock-sync.png'
    }
  ]);

  const addProject = useCallback((project: Omit<ExperienceProject, 'id'>) => {
    const newProject: ExperienceProject = {
      ...project,
      id: Date.now().toString()
    };
    setProjects(prev => [...prev, newProject]);
  }, []);

  const removeProject = useCallback((id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<ExperienceProject>) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id ? { ...project, ...updates } : project
      )
    );
  }, []);

  const getProject = useCallback((id: string) => {
    return projects.find(project => project.id === id);
  }, [projects]);

  return {
    projects,
    addProject,
    removeProject,
    updateProject,
    getProject
  };
};
