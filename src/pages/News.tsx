import React from 'react';
import MainLayout from '../layouts/MainLayout';

const News: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Actualités</h2>
                {/* Filtre par catégorie */}
                <div className="mt-4">
                    <label htmlFor="category" className="mr-2">Filtrer par catégorie:</label>
                    <select id="category" className="p-2 border rounded">
                        <option value="all">Toutes</option>
                        <option value="category1">Catégorie 1</option>
                        <option value="category2">Catégorie 2</option>
                    </select>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Cartes des articles */}
                    <div className="border p-4 rounded shadow-md">
                        <img src="https://via.placeholder.com/400" alt="Article 1" className="w-full h-48 object-cover" />
                        <h3 className="mt-2 text-xl font-bold">Titre de l'article 1</h3>
                        <p className="mt-1 text-gray-600">Phrase d'accroche de l'article 1...</p>
                        <p className="mt-2 text-sm text-gray-500">Date de parution: 2024-01-01</p>
                        <a href="source-url" className="mt-2 text-blue-500 hover:underline">Lire plus</a>
                    </div>
                    {/* Ajouter d'autres articles de la même manière */}
                </div>
            </section>
        </MainLayout>
    );
};

export default News;
