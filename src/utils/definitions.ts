export type Project = {
    id: number;
    name: string;
    year: number;
    tags: string[];
    importance: number;
    url?: string;
    image?: string;
    description?: string;
}

export type Page = {
    title: string;
    projects: number[];
}