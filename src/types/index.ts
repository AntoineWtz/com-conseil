export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedDate: string;
    category: string;
    imageUri: string;
}

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
