import { Article } from '../types';

const articles: Article[] = [
    { id: 1, title: 'Nouvelle Réglementation', content: 'Détails sur la nouvelle réglementation...', author: 'Admin', publishedDate: '2024-06-01', category: 'Réglementation' },
    { id: 2, title: 'Nouvelle Fonctionnalité', content: 'Détails sur la nouvelle fonctionnalité...', author: 'Admin', publishedDate: '2024-06-02', category: 'Fonctionnalité' },
    { id: 3, title: 'Nouveau Partenaire', content: 'Détails sur le nouveau partenaire...', author: 'Admin', publishedDate: '2024-06-03', category: 'Partenaire' },
    { id: 4, title: 'Nouveau Produit', content: 'Détails sur le nouveau produit...', author: 'Admin', publishedDate: '2024-06-04', category: 'Produit' },
];

export const getArticles = (): Promise<Article[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(articles);
        }, 0);
    });
};
