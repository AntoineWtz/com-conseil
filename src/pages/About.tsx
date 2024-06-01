import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">À propos</h2>
                <p>Notre cabinet d'expertise comptable est à votre service pour vous aider à gérer vos finances.</p>
            </section>
        </MainLayout>
    );
};

export default About;
