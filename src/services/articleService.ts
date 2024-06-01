import { Article } from '../types';

const articles: Article[] = [
    { id: 1, title: 'Nouvelle Réglementation', content: 'Détails sur la nouvelle réglementation...', author: 'Admin', publishedDate: '2024-06-01', category: 'Réglementation' },
    // Ajouter d'autres articles
];

export const getArticles = (): Promise<Article[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(articles);
        }, 1000);
    });
};
