export enum Tags {
    Python = "Python",
    Java = "Java",
    Web = "Web",
    React = "React",
    Mobile = "Mobile",
    // CSharp = "C#"
}

export enum ExpTypes {
    Professional = "Professional",
    Other = "Other",
}

export interface Picture {
    src: string;
    alt: string;
    caption?: string;
}

enum TechType {
    LANGUAGE,
    TOOL,
    DEPLOYMENT,
}

interface Tech {
    name: string;
    logo_src: string;
    type: TechType;
}

interface Url {
    url: string;
    name: string;
}

export interface Experience {
    title: string;
    date: Date;
    shortDescription: string;
    role: string;
    tags: Tags[];
    type?: ExpTypes;
    pictures?: Picture[];
    tech?: Tech[];
    links?: Url[];
    next?: string;
    bulletedDesc: string[];
}

const Techs = {
    agile: {
        name: "Agile Methodology",
        logo_src: "agile.png",
        type: TechType.TOOL,
    },
    android: {
        name: "Android",
        logo_src: "android-icon.svg",
        type: TechType.DEPLOYMENT,
    },
    dynamoDb: {
        name: "DynamoDB",
        logo_src: "aws-dynamodb.svg",
        type: TechType.DEPLOYMENT,
    },
    lambda: {
        name: "AWS Lambda",
        logo_src: "aws-lambda.svg",
        type: TechType.DEPLOYMENT,
    },
    cSharp: {
        name: "C#",
        logo_src: "c-sharp.svg",
        type: TechType.LANGUAGE,
    },
    cordova: {
        name: "Apache Cordova",
        logo_src: "cordova.svg",
        type: TechType.TOOL,
    },
    css: {
        name: "CSS",
        logo_src: "css-3.svg",
        type: TechType.LANGUAGE,
    },
    html: {
        name: "HTML",
        logo_src: "html-5.svg",
        type: TechType.LANGUAGE,
    },
    git: {
        name: "Git",
        logo_src: "git-icon.svg",
        type: TechType.TOOL,
    },
    java: {
        name: "Java",
        logo_src: "java.svg",
        type: TechType.LANGUAGE,
    },
    javascript: {
        name: "JavaScript",
        logo_src: "javascript.svg",
        type: TechType.LANGUAGE,
    },
    mapbox: {
        name: "Mapbox",
        logo_src: "mapbox-icon.svg",
        type: TechType.TOOL,
    },
    sql: {
        name: "MySQL",
        logo_src: "mysql-icon.svg",
        type: TechType.DEPLOYMENT,
    },
    postgres: {
        name: "PostgreSQL",
        logo_src: "postgresql.svg",
        type: TechType.DEPLOYMENT,
    },
    python: {
        name: "Python",
        logo_src: "python.svg",
        type: TechType.LANGUAGE,
    },
    react: {
        name: "React",
        logo_src: "react.svg",
        type: TechType.TOOL,
    },
    sklearn: {
        name: "Scikit-Learn",
        logo_src: "scikit-learn.png",
        type: TechType.TOOL,
    },
    tailwind: {
        name: "Tailwind CSS",
        logo_src: "tailwindcss-icon.svg",
        type: TechType.TOOL,
    },
    tensorflow: {
        name: "Tensorflow",
        logo_src: "tensorflow.svg",
        type: TechType.TOOL,
    },
    typescript: {
        name: "TypeScript",
        logo_src: "typescript-icon.svg",
        type: TechType.LANGUAGE,
    },
};

export const experiences: { [key: string]: Experience } = {
    acromoda: {
        title: "Acromoda",
        date: new Date(2023, 0),
        shortDescription:
            "Launched an outdoor gear company, designing bags for hikers, including a customizable waist pack with a software component.",
        role: "Owner, Co-Founder",
        tags: [Tags.Python, Tags.Web, Tags.React],
        type: ExpTypes.Professional,
        pictures: [
            {
                src: "animation.gif",
                alt: "animation showing mountain on bag",
            },
            {
                src: "customizer1.jpg",
                alt: "image of fanny pack customizer",
            },
            {
                src: "customizer2.jpg",
                alt: "image of fanny pack customizer",
            },
            {
                src: "bag on tree 1360.jpg",
                alt: "waist pack hanging on tree",
            },
        ],
        bulletedDesc: [
            "Launched novel waist pack for hikers that’s customizable to commemorate one’s favorite place.",
            "Developed MVP product customizer as well as software to aid in final manufacturing steps.",
            "Generated $10,700 in revenue within a month through a successful Kickstarter campaign.",
            "Accepted into the IDEA Hub Accelerator 2023 cohort. Focused on Lean Startup methodology.",
            "Learned how to design and manufacture outdoor gear. Partnered with manufacturer in China.",
            "Ran prelaunch marketing campaign with PPC advertising, partnerships with content creators, and features in relevant online publications.",
            "Designed other outdoor gear, including a backpack for long distance hiking.",
        ],
        tech: [
            Techs.typescript,
            Techs.react,
            Techs.python,
            Techs.git,
            Techs.lambda,
            Techs.dynamoDb,
            Techs.mapbox,
            Techs.tailwind,
        ],
        links: [
            {
                url: "https://www.kickstarter.com/projects/acromoda/acromoda-fanny-pack",
                name: "Kickstarter",
            },
            {
                url: "https://main.d3ohn9pafiuugw.amplifyapp.com/",
                name: "Product Customizer",
            },
        ],
        next: "skyward_internship",
    },
    skyward_internship: {
        title: "Internship at Skyward",
        date: new Date(2022, 5),
        shortDescription:
            "Software engineering internship at Skyward, a company that makes K12 school administrative software.",
        role: "Software Engineering Intern",
        tags: [Tags.Web],
        type: ExpTypes.Professional,
        bulletedDesc: [
            "Completed projects transitioning legacy functionality to new school administrative platform.",
            "Developed for frontend and backend.",
            "Worked on a team of 12 interns (split into 3 subteams) following Agile methodology.",
            "Wrote robust and reversible data migrations for a MySQL database.",
            "Proposed and developed foundation for a Visual Studio plugin that transitioned thousands of hardcoded strings to named constants; team continued project after my internship ended.",
        ],
        tech: [
            Techs.cSharp,
            Techs.javascript,
            Techs.sql,
            Techs.agile,
            Techs.git,
        ],
        next: "calf_hero",
    },
    calf_hero: {
        title: "Calf Hero",
        date: new Date(2020, 9),
        shortDescription:
            "Developed an interactive data visualization tool used to diagnose problems with colostrum (milk) pasteurizers.",
        role: "Freelance Developer",
        tags: [Tags.Java],
        type: ExpTypes.Professional,
        bulletedDesc: [
            "Engineered an interactive data visualization tool for diagnosing colostrum pasteurizer issues; deployed as a cross platform desktop application using Java and JavaFX.",
            "Optimized data parsing speed with multi-threading and caching to allow near seamless transitions between datasets. This was critical, as quckly scanning through datasets was a common usage pattern.",
            "Architected application to be extendable and configurable by the business owner (Golden Calf Company).",
        ],
        pictures: [
            {
                src: "calf_hero.png",
                alt: "screenshot of calf hero application",
            },
        ],
        tech: [Techs.java, Techs.git],
        next: "nrc_calculator",
    },
    nrc_calculator: {
        title: "NRC Calculator",
        date: new Date(2020, 9),
        shortDescription:
            "Sole developer for mobile app that uses known models to predict the average daily weight gain for dairy cattle.",
        role: "Freelance Developer",
        tags: [Tags.Web, Tags.Mobile],
        type: ExpTypes.Professional,
        bulletedDesc: [
            "Application made for Milk Products Inc. (subsidiary of Land O'Lakes).",
            "Collaborated with scientific and marketing experts to gather requirements and design application.",
            "Reached global audience with translations in 6 languages.",
            "Application featured in Dairy Herd Management, a prominent trade publication.",
        ],
        tech: [Techs.javascript, Techs.css, Techs.cordova, Techs.git],
        links: [
            {
                url: "https://www.dairyherd.com/news-news/nrc-calculator-app-answers-what-ifs-calf-nutrition",
                name: "Dairy Herd Management Article",
            },
            {
                url: "https://apps.apple.com/us/app/nrc-calculator/id1515018491",
                name: "App on the App Store",
            },
        ],
        next: "whole_milk_calculator",
    },
    whole_milk_calculator: {
        title: "Whole Milk Calculator",
        date: new Date(2019, 5),
        shortDescription:
            "Created a mobile app for Milk Products Inc. that assists dairy farmers in daily operations.",
        role: "Freelance Developer",
        tags: [Tags.Web, Tags.Mobile],
        type: ExpTypes.Professional,
        bulletedDesc: [
            "Application employs deterministic model to optimize daily feed procedures for dairy famers.",
            "Maintained app, and was rehired to add features after initial release.",
            "App is available in 2 languages.",
        ],
        tech: [Techs.javascript, Techs.css, Techs.cordova, Techs.git],
        links: [
            {
                url: "https://apps.apple.com/ca/app/whole-milk-calculator/id1488635008",
                name: "App on the App Store",
            },
        ],
        next: "bella_shores"
    },
    bella_shores: {
        title: "The Journey of Bella Shores",
        date: new Date(2019, 2),
        shortDescription:
            "Created top-down side-scrolling game with simple physics and collisions for an online game jam.",
        role: "Personal Project",
        tags: [Tags.Python],
        type: ExpTypes.Other,
        bulletedDesc: [
            "Game included combat mechanics, procedurally generated terrain, a trading system and a story mode.",
            "Built with Python using PyGame for graphics.",
            "The game jam was a competition hosted by Repl.it that took place over the course of a month.",
        ],
        links: [
            {
                url: "https://replit.com/@joshwood/The-Journey-of-Bella-Shores-5?v=1",
                name: "Run in the browser (Repl.it)",
            },
        ],
        tech: [Techs.python],
        pictures: [
            {
                src: "bella_shores.png",
                alt: "screenshot of bella shores game",
            },
        ],
        next: "poe",
    },
    poe: {
        title: "Poe - The Autonomous Poet",
        date: new Date(2019, 1),
        shortDescription:
            "Developed a system that generates nonsensical poetry illustrating the writing style of whatever text is used to train it.",
        role: "Personal Project",
        tags: [Tags.Python],
        type: ExpTypes.Other,
        bulletedDesc: [
            "Uses a Markov Chain algorithm to generate poetry that matches the syllable structure of a haiku, or the syllable and rhyming structure of a sonnet.",
            "Built for an AI-themed code jam run by Repl.it. Was listed as an honorable mention.",
        ],
        tech: [Techs.python],
        pictures: [
            {
                src: "poe.png",
                alt: "screenshot of poe program",
                caption: "Example trained on the works of Edgar Allen Poe",
            },
            {
                src: "poe2.png",
                alt: "screenshot of poe program",
                caption: "Example trained on the King James Bible",
            }
        ],
        links: [
            {
                url: "https://replit.com/@joshwood/Poe-v03?v=1",
                name: "Run in the browser (Repl.it)",
            }
        ],
        next: "circulo"
    },
    "circulo": {
        title: "Circulo",
        date: new Date(2018, 2),
        shortDescription: "Made a reaction timed based game for Android.",
        role: "Personal Project",
        tags: [Tags.Java, Tags.Mobile],
        type: ExpTypes.Other,
        tech: [Techs.java, Techs.android],
        bulletedDesc: [
            "Developed simple android game that tests your reaction time.",
            "Native Android app written in Java.",
        ],
        links: [
            {
            url: "https://play.google.com/store/apps/details?id=com.joshwoodstudios.circulo",
            name: "App on Google Play"
            }
    ]
    },
};
