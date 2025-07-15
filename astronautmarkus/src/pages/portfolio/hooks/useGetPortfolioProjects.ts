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
    }
];

const projects: Project[] = [
    {
        slug: 'fumo-index',
        title: 'The Fumo Index (ふも)',
        description: 'Plataforma web para la documentación y recopilación de peluches FumoFumo basados en la serie de videojuegos Touhou, ahora adaptada a más franquicias.',
        technologies: ['React', 'TypeScript', 'Laravel', 'MySQL', 'Tailwind CSS'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/astronautmarkus/fumoindex',
        imageUrl: '/projects/fumoindex.jpg',
        privateRepo: false,
    },
    {
        slug: 'abbybot-project',
        title: 'AbbyBot Project',
        description: 'Bot multifuncional para Discord, con funciones de moderación, música y más. Desarrollado con Discord.py y, sobre todo, mucho entusiasmo.',
        technologies: ['Discord.py', 'Python', 'MySQL'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AbbyBot/Discord-AbbyBot',
        imageUrl: '/projects/abbybotproject.png',
    },
    {
        slug: 'blog-astronautmarkus',
        title: 'Blog de AstronautMarkus',
        description: 'Blog informático donde se comparten artículos sobre desarrollo web, programación y tecnología en general. Creado con Laravel y Tailwind CSS.',
        technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'PHP'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AstronautMarkus/blog.astronautmarkus.dev',
        imageUrl: '/projects/blog-astronautmarkus.png',
    },
    {
        slug: 'abbybot-project-website',
        title: 'Sitio Web de AbbyBot',
        description: 'Sitio web oficial del bot AbbyBot, donde los usuarios pueden encontrar información sobre el bot, sus comandos y más. Desarrollado con Flask y Bootstrap. Dockerizado para producción.',
        technologies: ['Flask', 'Python', 'Bootstrap', 'MySQL', 'Gunicorn', 'Docker'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AbbyBot/Discord-AbbyBot',
        imageUrl: '/projects/abbybot-project-website.jpg',
    },
    {
        slug: 'multi-stock-sync',
        title: 'Multi Stock Sync',
        description: 'Software para la sincronización de productos con conexión a Mercado Libre, utilizando JWT para autenticación y autorización, y una API RESTful para la gestión de productos.',
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
    {
        slug: 'mofustore',
        title: 'MOFUStore',
        description: 'Plataforma de comercio electrónico para comprar fumos de Touhou Project. Proyecto realizado en el segundo año de instituto.',
        technologies: ['Python', 'Django', 'Bootstrap', 'MySQL'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MOFUStore',
        imageUrl: '/projects/mofustore.jpg',
        privateRepo: true,
    },
    {
        slug: 'camellosfood-repartidor',
        title: 'CamellosFood - Repartidor',
        description: 'Aplicación de reparto de comida para Android, construida con Ionic y Django.',
        technologies: ['Ionic', 'Angular', 'Django'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/Camello-s-Food_repartidor',
        imageUrl: '/projects/camellosfood-repartidor.jpg',
        privateRepo: true,
    },
    {
        slug: 'constru-mic',
        title: 'CONSTRU_MIC',
        description: 'Plataforma de comercio electrónico para materiales de construcción, desarrollada con Django y Bootstrap.',
        technologies: ['Django', 'Bootstrap', 'MySQL'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/MarcosKingsDuoc/CONSTRU_MIC',
        imageUrl: '/projects/constru-mic.jpg',
    },
    {
        slug: 'puppies-crud',
        title: 'Puppies CRUD',
        description: 'CRUD sencillo para gestionar cachorros, usando Ionic y Json-Server.',
        technologies: ['Ionic', 'Json-Server'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/Puppies_CRUD',
    },
    {
        slug: 'mofulunches-web',
        title: 'MofuLunches Web',
        description: 'Frontend en Flask para el panel de administración y cocineros de MofuLunches.',
        technologies: ['Flask', 'Bootstrap'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-Web',
        imageUrl: '/projects/mofulunches-web.jpg',
    },
    {
        slug: 'mofulunches-api',
        title: 'MofuLunches API',
        description: 'Backend SOA para la plataforma MofuLunches, soportando interfaces móviles, web y tótem.',
        technologies: ['Python', 'Flask', 'MongoDB'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-API',
        imageUrl: '/projects/mofulunches-api.jpg',
    },
    {
        slug: 'mofulunches-totem',
        title: 'MofuLunches Totem',
        description: 'Aplicación desarrollada con Electron y Arduino para gestionar pedidos y pagos.',
        technologies: ['Electron', 'Arduino', 'React'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-Totem',
        imageUrl: '/projects/mofulunches-totem.jpg',
    },
    {
        slug: 'mofulunches-eldimon',
        title: 'MofuLunches ElDimon',
        description: 'Script de Arduino que gestiona la comunicación con la API de MofuLunches.',
        technologies: ['Arduino', 'C++'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-ElDimon',
        imageUrl: '/projects/mofulunches-eldimon.jpg',
    },
    {
        slug: 'mofulunches-listener',
        title: 'MofuLunches ElDimon Listener',
        description: 'Interfaz gráfica en Python para escanear y leer eventos de la API ElDimon usando PyQt5.',
        technologies: ['Python', 'PyQt5'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-ElDimon_Listener',
        imageUrl: '/projects/mofulunches-eldimon-listener.jpg',
    },
    {
        slug: 'mofulunches-app',
        title: 'MofuLunches App',
        description: 'Aplicación móvil para cocineros, desarrollada con Ionic, para gestionar pedidos en MofuLunches.',
        technologies: ['Ionic'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-APP',
        imageUrl: '/projects/mofulunches-app.jpg',
    },
    {
        slug: 'firestore',
        title: 'FireStore',
        description: 'Este proyecto no es mío, pero gracias a él mi compañera aprobó el semestre. Aplicación móvil para gestionar inventarios de plantas en oficinas, desarrollada con Ionic y Firebase.',
        technologies: ['Ionic', 'Firebase'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/Firestore',
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