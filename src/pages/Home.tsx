import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Carousel from '../components/Carousel';
import SkillCard from '../components/SkillCard';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <Carousel />
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Bienvenue</h2>
                <p>Bienvenue sur notre site. Nous sommes un cabinet d'expertise comptable...</p>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Nos Compétences</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SkillCard title="Expertise 1" description="Description de l'expertise 1" imageUrl="url1.jpg" />
                    <SkillCard title="Expertise 2" description="Description de l'expertise 2" imageUrl="url2.jpg" />
                    <SkillCard title="Expertise 3" description="Description de l'expertise 3" imageUrl="url3.jpg" />
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Dernières Nouvelles</h2>
                {/* Bloc des dernières nouvelles */}
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
                <ContactForm />
            </section>
        </MainLayout>
    );
};

export default Home;
