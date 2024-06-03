import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Carousel from '../components/Carousel';
import logo2 from '../assets/images/com_conseil_logo2.jpg';
import ContactForm from '../components/ContactForm';
import SkillCard from '../components/SkillCard';
import { getSkills } from '../services/skillService';
import { getArticles } from '../services/articleService';
import { Skill, Article } from '../types';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);
    const [loadingSkills, setLoadingSkills] = useState<boolean>(true);
    const [loadingArticles, setLoadingArticles] = useState<boolean>(true);

    useEffect(() => {
        getSkills().then(data => {
            setSkills(data);
            setLoadingSkills(false);
        });

        getArticles().then(data => {
            setArticles(data);
            setLoadingArticles(false);
        });
    }, []);

    return (
        <MainLayout>
            <Carousel />
            <section className="mt-8 px-4 flex flex-col items-center">
                <h2 className="text-4xl text-[#344697] font-bold mb-4">Bienvenue chez C&C Com'Conseil</h2>
                <div className="flex flex-col lg:flex-row justify-evenly items-center mb-8">
                    <p className="mt-12 text-lg lg:w-1/2 text-center lg:text-left">Le cabinet C&C Com' Conseil est une société d'expertise comptable implantée à Milly la Forêt, dans l'Essonne en région île de France. Nous sommes inscrits à l'ordre des experts comptables.<br /><br />
                        Le cabinet est administré par Claudia Patricio Pires et Cyril Herbillon, accompagnés par une équipe de collaborateurs à votre écoute pour vous conseiller, vous développer et vous organiser en matière comptable, fiscale, juridique et sociale.<br /><br />
                        La priorité de notre cabinet : être au plus proche de vous et vos attentes dans les missions que vous nous confirez !<br /><br />
                        À très vite chez C&C Com' Conseil !
                    </p>
                    <img src={logo2} alt="Com Conseil" className="h-64 m-12" />
                </div>
                <h3 className="text-3xl text-[#344697] font-bold mb-4">Découvrez nos compétences</h3>
                <div className="flex justify-evenly gap-4 p-4">
                    {loadingSkills ? (
                        <p>Chargement des compétences...</p>
                    ) : (
                        skills.map(skill => (
                            <SkillCard
                                key={skill.id}
                                title={skill.name}
                                description={skill.description}
                                imageUrl={skill.imageUri || ''}
                            />
                        ))
                    )}
                </div>
                <h3 className="text-3xl text-[#344697] font-bold mb-4 mt-8">Les actualités C&C</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {loadingArticles ? (
                        <p>Chargement des articles...</p>
                    ) : (
                        articles.map(article => (
                            <div key={article.id} className="border p-4 rounded shadow-md max-w-xs">
                                <h4 className="text-xl font-bold">{article.title}</h4>
                                <p className="text-gray-600">{article.content.substring(0, 100)}...</p>
                                <p className="text-gray-500 text-sm">Publié par {article.author} le {article.publishedDate}</p>
                                <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline mt-2 inline-block">Lire plus</Link>
                            </div>
                        ))
                    )}
                </div>
                <h3 className="text-3xl text-[#344697] font-bold mb-4 mt-8">Nous contacter</h3>
                <ContactForm />
            </section>
        </MainLayout>
    );
};

export default Home;
