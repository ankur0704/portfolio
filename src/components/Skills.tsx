import React from "react";

const skills = [
    "C++",
    "Python",
    "React.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",

];

export default function Skills() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-10 py-2 border-2 border-dotted border-gray-500 rounded-lg text-lg font-medium text-muted-foreground hover:text-foreground hover:border-solid hover:border-foreground hover:bg-muted/5 transition-all duration-300 cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    );
}
