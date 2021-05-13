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
        position: ['Software Engineer'],
        company: 'Aguacate Projects S.L.',
        startDate: 'Abril 2019',
        endDate: 'present',
        location: 'Alicante, Spain <span class="text-sm">(remotely from Warsaw)</span>',
        milestones: [
            'Líder de equipo responsable del trabajo de tres desarrolladores de software y cooperación con Product Management. Las tareas incluyen tutoría, planificación, código, revisiones de diseño, etc.',
            'Lideró el diseño, desarrollo, implementación y mantenimiento de una plataforma de <span class = "nowrap"> comercio electrónico </span> para la construcción de enlaces que genera más de 1 millón de euros de ingresos por año <span class = "text-sm"> (consulte <a href="https://prensalink.com"> prensalink.com </a>) </span>. El software utiliza tecnologías como React, Laravel y Docker.',
            'Diseñó, desarrolló y administró una plataforma de automatización basada en la nube para la interacción del usuario de Instagram con capacidad para ~ 28k sesiones diarias. Utiliza una red de 300 bots de cliente web que se ejecutan en 100 servidores, incluida una red de proxies HTTP para enrutar el tráfico web de los bots a través de túneles OpenVPN (de diferentes proveedores). El software fue escrito en Python.',
            'Configuración y automatización de infraestructura basada en la nube para el despliegue de todos los productos de la empresa utilizando tecnologías como Amazon EC2 para servidores web, almacenamiento S3 para backups nocturnos, droplets de DigitalOcean para bots y proxies, bitbucket como repositorio de código y JIRA para proyecto y tarea. administración.',
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
        name: 'Languages',
        skills: ['Javascript', 'PHP', 'C++', 'Html', 'Css'],
    },
    {
        name: 'Databases/Search',
        skills: ['MySQL', 'PLSQL', 'ElasticSearch'],
    },
    {
        name: 'Frameworks',
        skills: ['React', 'NextJS', 'Express', 'Laravel', 'Puppeteer'],
    },
    {
        name: 'Cloud',
        skills: ['Amazon EC2 and S3', 'Bitbucket', 'GitHub'],
    },
    {
        name: 'Others',
        skills: ['Linux', 'Node', 'Docker'],
    },
    {
        name: 'Systems',
        skills: ['Back end', 'Front end', 'Client-Server', 'REST API', 'Web', 'Mobile', 'Distributed Systems'],
    },
    {
        name: 'Software Design',
        skills: ['DDD', 'TDD', 'Clean Architecture'],
    },
];

export const awards = [
];

export const achievements = [
];
