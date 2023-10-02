import { ReactNode } from "react";

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
    Other = "Other"
}

export interface Experience {
    title: string;
    date: Date;
    short_description: string;
    role: string;
    tags: Tags[];
    type?: ExpTypes;
    content: ReactNode;
}

export const experiences: {[key: string]: Experience} = {
    "acromoda": {
        title: "Acromoda",
        date: new Date(2023, 0),
        short_description: "Created a unique product customizer and designed an accompanying waist pack for the ultralight hiking market.",
        role: "Owner, Co-Founder",
        tags: [Tags.Python, Tags.Web, Tags.React],
        type: ExpTypes.Professional,
        content: (
            <>
                <ul>
                    <li>Reached $10,000 revenue over one month via a successfully funded Kickstarter.</li>
                    <li>Developed MVP product customizer with a serverless architecture using React.js, Python, AWS Lambda, and DynamoDB.</li>
                    <li>Learned how to design and manufacture outdoor gear.</li>
                    <li>Devised system that enables the majority of the bag to be made by overseas manufacturing partners with final customization occurring in-house.</li>
                    <li>Ran pre-launch marketing campaign with PPC advertising, influencer partnerships, and inclusion in relevant online publications.</li>
                </ul>
                <div className="flex flex-col items-center justify-center space-y-4 [&>a]:text-xl [&>a]:p-4 hover:[&>a]:bg-light-sea-green [&>a]:text-black [&>a]:rounded-lg [&>a]:pt-1 [&>a]:pb-1 [&>a]:border-dashed [&>a]:border-2 [&>a]:border-sea-green">
                    <a href="https://www.kickstarter.com/projects/acromoda/acromoda-fanny-pack" target="_blank">Kickstarter</a>
                    <a href="https://main.d3ohn9pafiuugw.amplifyapp.com/" target="_blank">Product Customizer</a>
                </div>
            </>
        )
    },
    "skyward_internship": {
        title: "Internship at Skyward",
        date: new Date(2022, 5),
        short_description: "Completed a diverse array of projects using C# and the .NET framework for Skyward's K-12 school administrative software.",
        role: "Software Engineering Intern",
        tags: [Tags.Web],
        type: ExpTypes.Professional,
        content: (
            <>
                <ul>
                    <li>Projects were primarily focused on transitioning legacy functionality to Skyward’s new QMLATIV platform. </li>
                    <li>Wrote robust and reversible data migrations for a SQL database.</li>
                    <li>Practiced agile methodology.</li>
                    <li>Initiated and developed the foundation for a Visual Studio plugin to enhance the QMLATIV codebase, converting thousands of hardcoded strings to named constants. The project was continued by the team after my internship ended.</li>

                </ul>
            </>
        )
    },
    "calf_hero": {
        title: "Calf Hero",
        date: new Date(2021, 0),
        short_description: "Developed interactive data visualization tool used to diagnose problems with colostrum (milk) pasteurizers.",
        role: "Freelance Developer",
        tags: [Tags.Java],
        type: ExpTypes.Professional,
        content: (
            <>
                <ul>
                    <li>Software analyzes large CSV log files, identifies anomalies, and provides an easy-to-use interface that allows users to see sensor readings at specific time intervals.</li>
                    <li>Utilized multi-threading and caching techniques to expedite data parsing and visualization. These optimizations were essential as a common usage pattern involved quickly scanning through dozens of log files at once.</li>
                    <li>Created a cross-platform desktop application built using Java and JavaFX.</li>
                </ul>
            </>
        )
    },
    "nrc_calculator": {
        title: "NRC Calculator",
        date: new Date(2020, 9),
        short_description: "Rehired by Milk Products Inc. to create a second mobile app that uses known models to predict the average daily weight gain for dairy cattle.",
        role: "Freelance Developer",
        tags: [Tags.Web, Tags.Mobile],
        type: ExpTypes.Professional, 
        content: (
            <>
                <ul>
                    <li>App is available in 6 languages and used daily by farmers globally.</li>
                    <li>Built using HTML/CSS/JS and packaged for iOS and Android with Apache Cordova.</li>
                </ul>
                <div className="flex flex-col items-center justify-center space-y-4 [&>a]:text-xl [&>a]:p-4 hover:[&>a]:bg-light-sea-green [&>a]:text-black [&>a]:rounded-lg [&>a]:pt-1 [&>a]:pb-1 [&>a]:border-dashed [&>a]:border-2 [&>a]:border-sea-green">
                    <a href="https://www.dairyherd.com/news-news/nrc-calculator-app-answers-what-ifs-calf-nutrition" target="_blank">Featured in Dairy Herd Management</a>
                </div>
            </>
        )
    },
    "whole_milk_calculator": {
        title: "Whole Milk Calculator",
        date: new Date(2019, 5),
        short_description: "Created a mobile app for Milk Products Inc (subsidiary of Land O’Lakes) that assists dairy farmers in daily operations.",
        role: "Freelance Developer",
        tags: [Tags.Web, Tags.Mobile],
        type: ExpTypes.Professional, 
        content: (
            <>
                <ul>
                    <li>Application calculates the optimal ratio of feeds for farmers to use when caring for their dairy cattle.</li>
                    <li>App is available on iOS and Android and built using Apache Cordova.</li>
                </ul>
                <div className="flex flex-col items-center justify-center space-y-4 [&>a]:text-xl [&>a]:p-4 hover:[&>a]:bg-light-sea-green [&>a]:text-black [&>a]:rounded-lg [&>a]:pt-1 [&>a]:pb-1 [&>a]:border-dashed [&>a]:border-2 [&>a]:border-sea-green">
                    <a href="https://apps.apple.com/us/app/nrc-calculator/id1515018491" target="_blank">NRC Calculator on the App Store</a>
                </div>
            </>
        )
    },
    "bella_shores": {
        title: "The Journey of Bella Shores",
        date: new Date(2019, 2),
        short_description: "Created top-down side-scrolling game with simple physics and collisions for an online game jam.",
        role: "Personal Project",
        tags: [Tags.Python],
        type: ExpTypes.Other, 
        content: (
            <>
                <ul>
                    <li>Game included combat mechanics, procedurally generated terrain, a trading system and a story mode.</li>
                    <li>Built with Python using PyGame for graphics.</li>
                    <li>The game jam was a competition hosted by Repl.it that took place over the course of a month.</li>
                </ul>
                <div className="flex flex-col items-center justify-center space-y-4 [&>a]:text-xl [&>a]:p-4 hover:[&>a]:bg-light-sea-green [&>a]:text-black [&>a]:rounded-lg [&>a]:pt-1 [&>a]:pb-1 [&>a]:border-dashed [&>a]:border-2 [&>a]:border-sea-green">
                    <a href="https://replit.com/@joshwood/The-Journey-of-Bella-Shores-5?v=1" target="_blank">Run in the browser</a>
                </div>
            </>
        )
    },
    "poe": {
        title: "Poe - The Autonomous Poet",
        date: new Date(2019, 1),
        short_description: "Developed a system that generates nonsensical poetry that illustrates the writing style of whatever text is used to train it.",
        role: "Personal Project",
        tags: [Tags.Python],
        type: ExpTypes.Other, 
        content: (
            <>
                <ul>
                    <li>Uses a Markov Chain algorithm to generate poetry that matches the syllable structure of a haiku, or the syllable and rhyming structure of a sonnet. </li>
                    <li>Built for an AI-themed code jam run by Repl.it. Was listed as an honorable mention.</li>
                    <li>Programmed in Python. Syllable data acquired using the Datamuse API.</li>

                </ul>
                <div className="flex flex-col items-center justify-center space-y-4 [&>a]:text-xl [&>a]:p-4 hover:[&>a]:bg-light-sea-green [&>a]:text-black [&>a]:rounded-lg [&>a]:pt-1 [&>a]:pb-1 [&>a]:border-dashed [&>a]:border-2 [&>a]:border-sea-green">
                    <a href="https://replit.com/@joshwood/The-Journey-of-Bella-Shores-5?v=1" target="_blank">Run in the browser</a>
                </div>
            </>
        )
    },
    "circulo": {
        title: "Circulo",
        date: new Date(2018, 2),
        short_description: "Made a reaction timed based game on Android",
        role: "Personal Project",
        tags: [Tags.Java, Tags.Mobile],
        type: ExpTypes.Other, 
        content: (
            <>
                <ul>
                    <li>This simple game tests your reaction time by having you tap circles at specific time intervals.</li>
                    <li>Native Android app, built using Java</li>

                </ul>
                <div className="flex flex-col items-center justify-center space-y-4 [&>a]:text-xl [&>a]:p-4 hover:[&>a]:bg-light-sea-green [&>a]:text-black [&>a]:rounded-lg [&>a]:pt-1 [&>a]:pb-1 [&>a]:border-dashed [&>a]:border-2 [&>a]:border-sea-green">
                    <a href="https://play.google.com/store/apps/details?id=com.joshwoodstudios.circulo" target="_blank">App on Google Play</a>
                </div>
            </>
        )
    },
}