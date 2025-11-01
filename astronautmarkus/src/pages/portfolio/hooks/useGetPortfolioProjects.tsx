import { useI18n } from '../../../contexts/i18nContext';

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

const categoriesData: Category[] = [
    {
        slug: 'personal',
        title: '', // Will be filled by translation
        description: '', // Will be filled by translation
    },
    {
        slug: 'professional-practice',
        title: '', // Will be filled by translation
        description: '', // Will be filled by translation
    },
    {
        slug: 'institute',
        title: '', // Will be filled by translation
        description: '', // Will be filled by translation
    }
];

const projectsData: Project[] = [
    {
        slug: 'fumo-index',
        title: '', // Will be filled by translation
        description: '', // Will be filled by translation
        technologies: ['React', 'TypeScript', 'Laravel', 'MySQL', 'Tailwind CSS'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/astronautmarkus/fumoindex',
        imageUrl: '/projects/fumoindex.jpg',
        privateRepo: false,
    },
    {
        slug: 'abbybot-project',
        title: '',
        description: '',
        technologies: ['Discord.py', 'Python', 'MySQL'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AbbyBot/Discord-AbbyBot',
        imageUrl: '/projects/abbybotproject.png',
    },
    {
        slug: 'blog-astronautmarkus',
        title: '',
        description: '',
        technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'PHP'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AstronautMarkus/blog.astronautmarkus.dev',
        imageUrl: '/projects/blog-astronautmarkus.png',
    },
    {
        slug: 'abbybot-project-website',
        title: '',
        description: '',
        technologies: ['Flask', 'Python', 'Bootstrap', 'MySQL', 'Gunicorn', 'Docker'],
        categorySlug: 'personal',
        githubUrl: 'https://github.com/AbbyBot/Discord-AbbyBot',
        imageUrl: '/projects/abbybot-project-website.jpg',
    },
    {
        slug: 'multi-stock-sync',
        title: '',
        description: '',
        technologies: ['React', 'Node.js', 'Bootstrap', 'Chart.js'],
        categorySlug: 'professional-practice',
        githubUrl: 'https://github.com/astronautmarkus/Multi-Stock-Sync',
        imageUrl: '/projects/multi-stock-sync.png',
    },
    {
        slug: 'multi-stock-sync-back',
        title: '',
        description: '',
        technologies: ['Laravel', 'Sanctum', 'MySQL', 'PHP'],
        categorySlug: 'professional-practice',
        githubUrl: 'https://github.com/astronautmarkus/Multi-Stock-Sync-Back',
        imageUrl: '/projects/multi-stock-sync-back.png',
    },
    {
        slug: 'multi-stock-sync-api-viewer',
        title: '',
        description: '',
        technologies: ['Laravel', 'Swagger'],
        categorySlug: 'professional-practice',
        githubUrl: 'https://github.com/AstronautMarkus/Multi-Stock-API-Viewer',
        imageUrl: '/projects/multi-stock-api-viewer.png',
    },
    {
        slug: 'mofustore',
        title: '',
        description: '',
        technologies: ['Python', 'Django', 'Bootstrap', 'MySQL'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MOFUStore',
        imageUrl: '/projects/mofustore.jpg',
        privateRepo: true,
    },
    {
        slug: 'camellosfood-repartidor',
        title: '',
        description: '',
        technologies: ['Ionic', 'Angular', 'Django'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/Camello-s-Food_repartidor',
        imageUrl: '/projects/camellosfood-repartidor.jpg',
        privateRepo: true,
    },
    {
        slug: 'constru-mic',
        title: '',
        description: '',
        technologies: ['Django', 'Bootstrap', 'MySQL'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/MarcosKingsDuoc/CONSTRU_MIC',
        imageUrl: '/projects/constru-mic.jpg',
    },
    {
        slug: 'puppies-crud',
        title: '',
        description: '',
        technologies: ['Ionic', 'Json-Server'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/Puppies_CRUD',
    },
    {
        slug: 'mofulunches-web',
        title: '',
        description: '',
        technologies: ['Flask', 'Bootstrap'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-Web',
        imageUrl: '/projects/mofulunches-web.jpg',
    },
    {
        slug: 'mofulunches-api',
        title: '',
        description: '',
        technologies: ['Python', 'Flask', 'MongoDB'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-API',
        imageUrl: '/projects/mofulunches-api.jpg',
    },
    {
        slug: 'mofulunches-totem',
        title: '',
        description: '',
        technologies: ['Electron', 'Arduino', 'React'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-Totem',
        imageUrl: '/projects/mofulunches-totem.jpg',
    },
    {
        slug: 'mofulunches-eldimon',
        title: '',
        description: '',
        technologies: ['Arduino', 'C++'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-ElDimon',
        imageUrl: '/projects/mofulunches-eldimon.jpg',
    },
    {
        slug: 'mofulunches-listener',
        title: '',
        description: '',
        technologies: ['Python', 'PyQt5'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-ElDimon_Listener',
        imageUrl: '/projects/mofulunches-eldimon-listener.jpg',
    },
    {
        slug: 'mofulunches-app',
        title: '',
        description: '',
        technologies: ['Ionic'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/MofuLunches-APP',
        imageUrl: '/projects/mofulunches-app.jpg',
    },
    {
        slug: 'firestore',
        title: '',
        description: '',
        technologies: ['Ionic', 'Firebase'],
        categorySlug: 'institute',
        githubUrl: 'https://github.com/AstronautMarkus/Firestore',
    },
];

export function useGetPortfolioProjects() {
    const { t } = useI18n();
    
    const projects = projectsData.map(project => ({
        ...project,
        title: t(`portfolio.projects.${project.slug}.title`),
        description: t(`portfolio.projects.${project.slug}.description`)
    }));
    
    const categories = categoriesData.map(category => ({
        ...category,
        title: t(`portfolio.categories.${category.slug}.title`),
        description: t(`portfolio.categories.${category.slug}.description`)
    }));

    return {
        projects,
        categories,
    };
}
