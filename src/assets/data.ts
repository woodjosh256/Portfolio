export interface Link {
    title: string;
    url: string;
    color: string;
}

export enum Tags {
    COLLEGE,
    PYTHON,
    JAVA,
    WEB
}

export enum ExpTypes {
    PROFESSIONAL,
    PERSONAL
}

export interface Experience {
    title: string;
    date: Date;
    short_description: string;
    role: string;
    description: string;
    images: string[];
    tags: Tags[];
    type?: ExpTypes;
    links: Link[];
}

export const experiences: {[key: number]: Experience} = {
    1: {
        title: "Acromoda 1",
        date: new Date(2019, 10),
        short_description: "Made cool backpacks.",
        role: "Co-Founder",
        description: "Acromoda is a company that made backpacks. I was the lead developer on the project. I built the website from scratch using HTML, CSS, and JavaScript. I also built the backend using Node.js and MongoDB. I also built the mobile app using React Native.",
        images: [
            "fanny_pack.jpg"
        ],
        tags: [Tags.PYTHON, Tags.WEB],
        type: ExpTypes.PROFESSIONAL,
        links: [
            {"title": "Website", "url": "https://acromoda.com", "color": "#FF0000"},
            {"title": "Mobile App", "url": "https://play.google.com/store/apps/details?id=com.acromoda.app", "color": "#00FF00"}
        ]
    },
    2: {
        title: "Acromoda 2",
        date: new Date(2019, 0),
        short_description: "Made cool backpacks.",
        role: "Freelance Developer",
        description: "Acromoda is a company that made backpacks. I was the lead developer on the project. I built the website from scratch using HTML, CSS, and JavaScript. I also built the backend using Node.js and MongoDB. I also built the mobile app using React Native.",
        images: [
            "fanny_pack.jpg"
        ],
        tags: [Tags.JAVA],
        type: ExpTypes.PROFESSIONAL,
        links: [
            {"title": "Website", "url": "https://acromoda.com", "color": "#FF0000"},
            {"title": "Mobile App", "url": "https://play.google.com/store/apps/details?id=com.acromoda.app", "color": "#00FF00"}
        ]
    },
    3: {
        title: "Acromoda 4",
        date: new Date(2022, 10),
        short_description: "Made cool backpacks.",
        role: "Software Engineer Intern",
        description: "Acromoda is a company that made backpacks. I was the lead developer on the project. I built the website from scratch using HTML, CSS, and JavaScript. I also built the backend using Node.js and MongoDB. I also built the mobile app using React Native.",
        images: [
            "fanny_pack.jpg"
        ],
        tags: [Tags.PYTHON, Tags.WEB],
        type: ExpTypes.PROFESSIONAL,
        links: [
            {"title": "Website", "url": "https://acromoda.com", "color": "#FF0000"},
            {"title": "Mobile App", "url": "https://play.google.com/store/apps/details?id=com.acromoda.app", "color": "#00FF00"}
        ]
    },
    4: {
        title: "Acromoda 3",
        date: new Date(2021, 10),
        short_description: "Made cool backpacks.",
        role: "Software Engineer Intern",
        description: "Acromoda is a company that made backpacks. I was the lead developer on the project. I built the website from scratch using HTML, CSS, and JavaScript. I also built the backend using Node.js and MongoDB. I also built the mobile app using React Native.",
        images: [
            "fanny_pack.jpg"
        ],
        tags: [Tags.PYTHON, Tags.WEB],
        type: ExpTypes.PROFESSIONAL, 
        links: [
            {"title": "Website", "url": "https://acromoda.com", "color": "#FF0000"},
            {"title": "Mobile App", "url": "https://play.google.com/store/apps/details?id=com.acromoda.app", "color": "#00FF00"}
        ]
    }
}