import { Project } from "@/types";


export const projects: Project[] = [
    {
        id: 1,
        title: 'Dev Portfolio',
        description: 'Use modern web technologies to build your portfolio page.',
        technologies: ['NextJS', 'TailwindCSS', 'TypeScript'],
        githubLink: 'https://github.com/anhcudev/dev-portfolio-nextjs',
        demoLink: 'https://anhcu-portfolio.vercel.app/',
        image: '/projects/portfolio.jpg',
    }, {
        id: 2,
        title: 'Calendar App',
        description: 'Developed a calendar management web application to create and manage personal calendars.',
        technologies: ['React'],
        githubLink: 'https://github.com/anhcudev/calendar-app',
        demoLink: 'https://calendar-app-snowy-seven.vercel.app/',
        image: '/projects/CalendarApp.jpg',
    }, {
        id: 3,
        title: 'Netflix Clone',
        description: 'Built a Netflix-inspired web application using React, React Hooks, and React Router.',
        technologies: ['React'],
        githubLink: 'https://github.com/anhcudev/netflix',
        demoLink: 'https://movie-app-tawny-delta-14.vercel.app/',
        image: '/projects/Netflix.jpg',
    }, {
        id: 4,
        title: 'Todo List With Redux Toolkit',
        description: 'Built a Todo List web application using React and Redux Toolkit for state management.',
        technologies: ['React', 'Redux Toolkit'],
        githubLink: 'https://github.com/anhcudev/todo-list',
        demoLink: 'https://todo-list-three-rose-28.vercel.app/',
        image: '/projects/todo-list.jpg',
    },
];