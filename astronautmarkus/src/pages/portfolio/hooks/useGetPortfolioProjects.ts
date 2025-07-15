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
        title: 'The Fumo Index (ふも)',
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
    {
        slug: 'multi-stock-sync',
        title: 'Multi Stock Sync',
        description: 'Desarrollo de un software de sincronización de productos con conexión a Mercado Libre, utilizando JWT para autenticación y autorización, y una API RESTful para la gestión de productos.',
        technologies: ['React', 'Node.js', 'Bootstrap', 'Chart.js'],
        categorySlug: 'professional-practice',
        githubUrl: 'https://github.com/astronautmarkus/Multi-Stock-Sync',
        imageUrl: '/projects/multi-stock-sync.png',
    },
    {
        slug: 'multi-stock-sync-back',
        title: 'Multi Stock Sync Back',
        description: 'Backend del software de sincronización de productos, desarrollado con Laravel. Implementa JWT para autenticación y autorización, y una API RESTful para la gestión de productos.',
        technologies: ['Laravel', 'Sanctum', 'MySQL', 'PHP'],
        categorySlug: 'professional-practice',
        githubUrl: 'https://github.com/astronautmarkus/Multi-Stock-Sync-Back',
        imageUrl: '/projects/multi-stock-sync-back.png',
    },
    {
        slug: 'multi-stock-sync-api-viewer',
        title: 'Multi Stock API Viewer',
        description: 'Documentación de la API del software de sincronización de productos, generada con Swagger. Permite a los desarrolladores explorar y probar la API fácilmente.',
        technologies: ['Laravel', 'Swagger'],
        categorySlug: 'professional-practice',
        githubUrl: 'https://github.com/AstronautMarkus/Multi-Stock-API-Viewer',
        imageUrl: '/projects/multi-stock-api-viewer.png',
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