import { ReactNode } from "react";

export enum Tags {
    Python = "Python",
    Java = "Java",
    Web = "Web",
    React = "React",
    Android = "Android"
}

export enum ExpTypes {
    Professional = "Professional",
    Personal = "Personal",
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
    "asdf": {
        title: "Acromoda 1",
        date: new Date(2019, 10),
        short_description: "Made cool backpacks.",
        role: "Co-Founder",
        tags: [Tags.Python, Tags.Web],
        type: ExpTypes.Professional,
        content: (
            <>
                <p>Content!</p>
            </>
        )
    },
    "f31": {
        title: "Acromoda 2",
        date: new Date(2019, 0),
        short_description: "Made cool backpacks.",
        role: "Freelance Developer",
        tags: [Tags.Java],
        type: ExpTypes.Professional,
        content: (
            <>
                <p>Content!</p>
            </>
        )
    },
    "oijb": {
        title: "Acromoda 4",
        date: new Date(2022, 10),
        short_description: "Made cool backpacks.",
        role: "Software Engineer Intern",
        tags: [Tags.Python, Tags.Web],
        type: ExpTypes.Personal,
        content: (
            <>
                <p>Content!</p>
            </>
        )
    },
    "iiasdf": {
        title: "Acromoda 3",
        date: new Date(2021, 10),
        short_description: "Made cool backpacks.",
        role: "Software Engineer Intern",
        tags: [Tags.Python, Tags.Web],
        type: ExpTypes.Other, 
        content: (
            <>
                <p>Content!</p>
            </>
        )
    }
}