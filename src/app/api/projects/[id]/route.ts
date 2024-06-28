import { read, readFileSync, readdirSync } from "fs";
import { NextResponse } from "next/server";
import { parse } from "marked";

export function GET(req: Request, { params }: { params: { id: string } }) {
    // Loop through the project files until a project with the correct ID is found
    const projectFiles = readdirSync("src/lib/projects");
    let project = projectFiles
        .filter((file) => file !== "_Template.ts")
        .map((file) => {
            // Load the typescript file
            let project = require(`@/lib/projects/${file}`).default;

            return project;
        })
        .find((project) => project.id === params.id);

    const description = readFileSync(`./src/lib/documents/${project.id}.md`, "utf-8");

    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });
    if (!description) return NextResponse.json({ error: "Project description not found" }, { status: 500 });

    return NextResponse.json({ project, description: parse(description) }, { status: 200 });
}
