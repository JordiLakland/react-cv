import picture from '../assets/jordicantogalvez.jpg';

export const candidate = {
    name: 'Jordi',
    lastname: 'Cantó Gálvez',
    position: 'Full-Stack Software Engineer',
    highestDegree: 'Ingeniero Técnico de Gestión',
    address: 'Altea la Vella, Alicante (España)',
    picture: picture,
}

export const experience = [
    {
        position: ['Full-Stack Software Engineer'],
        company: 'Aguacate Projects S.L.',
        startDate: 'Abril 2019',
        endDate: 'Prensente',
        location: 'Alicante, Spain <span class="text-sm">(Remotamente desde Altea)</span>',
        milestones: [
            'Desarrollo de software y cooperación con Product Management. Las tareas incluyen planificación, código, revisiones de diseño, etc.',
            'Desarrollo, implementación y mantenimiento de una plataforma de <span class = "nowrap"> comercio electrónico </span> para la construcción de enlaces que genera más de 1 millón de euros de ingresos por año <span class = "text-sm"> (consultar <a href="https://prensalink.com">prensalink.com</a>) </span>. El software utiliza tecnologías como React, Laravel y Docker.',
            'Mantenimiento de infraestructura basada en la nube para el despliegue de todos los productos de la empresa utilizando tecnologías como Amazon EC2 para servidores web, almacenamiento S3 para backups nocturnos, bitbucket como repositorio de código y JIRA para proyecto como gestor de tareas.',
        ]
    },
    {
        position: ['Senior Application Programmer'],
        company: 'Gestión Tributaria Territorial',
        startDate: 'Julio 2015',
        endDate: 'Abril 2019',
        location: 'Alicante',
        milestones: [
            'Programador en un equipo específico de desarrollo del Sistema de Información Tributario para uno de sus principales clientes.',
            'Desarrollo y mantenimiento de la aplicación Tributaria. Predominantemente PL/SQL como lenguaje.',
            'Ejecución y supervisión de Cuadres Contables diarios para el cliente.',
        ]
    },
];

export const education = [
    {
        title: 'Ingeniería Técnica en Informática de Gestión',
        centre: 'University of Alicante',
        startDate: 'Sep 2007',
        endDate: 'Junio 2014',
        location: 'Alicante, Spain',
        description: 'El Ingeniero Técnico en Informática de Gestión es un analista de aplicaciones. Su función está más orientada hacia las necesidades del usuario final del equipo. Para ello, estudia esas necesidades y crea y adapta los programas informáticos necesarios para que se lleven a cabo las funciones que constituyen su objetivo.',
    }
];

export const contact = {
    phoneNumber: '+34 617 09 73 09',
    email: 'jordicantogalvez@gmail.com',
}

export const profiles = [
    {
        name: 'github.com/JordiLakland',
        link: 'https://github.com/JordiLakland',
        icon: ['fab', 'github']
    },
    {
        name: 'linkedin.com/in/jordicanto',
        link: ' https://www.linkedin.com/in/jordi-cant%C3%B3-g%C3%A1lvez-455088a6/',
        icon: ['fab', 'linkedin']
    }
];

export const languages = [
    { name: 'Castellano', level: '100', maxLevel: 'Nativo' },
    { name: 'Valenciano', level: '100', maxLevel: 'Nativo'},
    { name: 'Inglés', level: '60', maxLevel: 'C2' },
];

export const skills = [
    {
        name: 'Languajes',
        skills: ['Javascript', 'PHP', 'C++', 'Html', 'Css'],
    },
    {
        name: 'Bases de Datos/Búsquedas',
        skills: ['MySQL', 'PLSQL', 'ElasticSearch'],
    },
    {
        name: 'Frameworks',
        skills: ['React', 'NextJS', 'Express', 'Laravel', 'Puppeteer'],
    },
    {
        name: 'Nube',
        skills: ['Amazon EC2 and S3', 'Bitbucket', 'GitHub'],
    },
    {
        name: 'Otros',
        skills: ['Linux', 'Node', 'Docker'],
    },
    {
        name: 'Sistemas',
        skills: ['Back end', 'Front end', 'Client-Server', 'REST API', 'Web', 'Mobile', 'Distributed Systems'],
    },
    {
        name: 'Diseño Software',
        skills: ['DDD', 'TDD', 'Clean Architecture'],
    },
];

export const awards = [
];

export const achievements = [
];
