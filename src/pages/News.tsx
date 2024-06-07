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
                <h2 className="text-3xl text-[#344697] font-cardo font-bold mb-4 text-center">Actualités</h2>
                {loading ? (
                    <p>Chargement...</p>
                ) : (
                    articles.map(article => (
                        <div key={article.id} className="border p-4 rounded-lg shadow-md m-4 bg-blue-100">
                            <h3 className="text-xl font-bold text-[#344697]">{article.title}</h3>
                            <img src={article.imageUri} alt={article.title} className="w-full h-64 object-cover mt-4" />
                            <p className="text-gray-400 text-sm">Publié par {article.author} le {article.publishedDate}</p>
                            <p className="text-gray-600">{article.content}</p>
                        </div>
                    ))
                )}
            </section>
        </MainLayout>
    );
};

export default News;
