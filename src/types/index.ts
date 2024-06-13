export interface Tool {
    id: number;
    name: string;
    description: string;
    link: string;
}

export interface Skill {
    id: number;
    name: string;
    description: string;
    imageUri: string;
    missions?: string[];
}

export interface Simulator {
    id: number;
    name: string;
    category: string;
}