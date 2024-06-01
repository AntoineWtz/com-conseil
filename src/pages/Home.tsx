import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <Carousel />
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Bienvenue</h2>
                <p>Bienvenue sur le site de Com Conseil, votre expert en comptabilité et gestion d'entreprise.</p>
            </section>
        </MainLayout>
    );
};

export default Home;
