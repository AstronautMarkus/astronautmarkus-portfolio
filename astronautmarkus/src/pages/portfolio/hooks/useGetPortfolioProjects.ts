import { useState } from 'react';

export type Technology = string;

export type Project = {
    slug: string;
    title: string;
    description: string;
    technologies: Technology[];
    imageUrl?: string;
    categorySlug: string;
    githubUrl?: string;
    privateRepo?: boolean;
};

export type Category = {
    slug: string;
    title: string;
    description: string;
};

const categories: Category[] = [
    {
        slug: 'personal',
        title: 'Proyectos Personales',
        description: 'Proyectos personales desarrollados para aprender y experimentar con nuevas tecnologías y contribuir a la comunidad.',
    },
    {
        slug: 'professional-practice',
        title: 'Práctica Profesional',
        description: 'Proyectos realizados durante mi práctica profesional, aplicando conocimientos adquiridos en un entorno real.',
    },
    {
        slug: 'institute',
        title: 'Proyectos del Instituto',
        description: 'Proyectos desarrollados como parte de mi formación académica en el instituto, Duoc UC. Enfocados en el aprendizaje práctico.',
    },
    {
        slug: 'collaborated',
        title: 'Proyectos Colaborativos',
        description: 'Proyectos donde he colaborado con otros desarrolladores, conocidos y amigos, para crear soluciones innovadoras y útiles.',
    },
];

const projects: Project[] = [
    {
        slug: 'fumo-index',
        title: 'Fumo Index',
        description: 'Plataforma web para la documentación y recolección de peluches FumoFumo basados en la serie de videojuegos Touhou. Ahora adaptados a más franquicias.',
        technologies: ['React', 'TypeScript','Laravel','MySQL', 'Tailwind CSS'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/astronautmarkus/fumoindex',
        imageUrl: '/projects/fumoindex.jpg',
        privateRepo: false,
    },
];

export function useGetPortfolioProjects() {
    const [projectList] = useState<Project[]>(projects);
    const [categoryList] = useState<Category[]>(categories);

    return {
        projects: projectList,
        categories: categoryList,
    };
}