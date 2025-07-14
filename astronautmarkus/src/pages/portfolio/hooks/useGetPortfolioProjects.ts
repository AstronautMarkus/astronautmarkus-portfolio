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
    
    {
        slug: 'abbybot-project',
        title: 'AbbyBot Project',
        description: 'Bot multifuncional para Discord, con funciones de moderación, música y más. Desarrollado con Discord.py y amor (lo más importante).',
        technologies: ["Discord.py", "Python", "MySQL"],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AbbyBot/Discord-AbbyBot',
        imageUrl: '/projects/abbybotproject.png',

    },

    {
        slug: 'blog-astronautmarkus',
        title: 'Blog de AstronautMarkus',
        description: 'Blog informático donde se comparten artículos sobre desarrollo web, programación y tecnología en general. Creado con Laravel y Tailwind CSS.',
        technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "PHP"],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AstronautMarkus/blog.astronautmarkus.dev',
        imageUrl: '/projects/blog-astronautmarkus.png',

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