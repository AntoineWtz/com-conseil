import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Article } from '../types';
import { getArticles } from '../services/articleService';

const News: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data);
            setLoading(false);
        });
    }, []);

    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Actualités</h2>
                {loading ? (
                    <p>Chargement...</p>
                ) : (
                    articles.map(article => (
                        <div key={article.id} className="border p-4 rounded shadow-md mb-4">
                            <h3 className="text-xl font-bold">{article.title}</h3>
                            <p className="text-gray-600">{article.content}</p>
                            <p className="text-gray-500 text-sm">Publié par {article.author} le {article.publishedDate}</p>
                        </div>
                    ))
                )}
            </section>
        </MainLayout>
    );
};

export default News;
