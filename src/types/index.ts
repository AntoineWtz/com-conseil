export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedDate: string;
    category: string;
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
}

const skills: Skill[] = [
    { id: 1, name: 'Comptabilité - Expertise', description: 'Gestion comptable et financière' },
    { id: 2, name: 'Accompagnement du créateur', description: 'Optimisation fiscale et conseils' },
    { id: 3, name: 'Ressources humaines', description: 'Audit des comptes et des processus' },
    { id: 4, name: 'Transmission d\'entreprise', description: 'Gestion des ressources humaines' },
    { id: 5, name: 'Fiscalité personnelle', description: 'Conseils juridiques et contentieux' },
    { id: 6, name: 'Gestion de patrimoine', description: 'Conseils en gestion et en organisation' },
];