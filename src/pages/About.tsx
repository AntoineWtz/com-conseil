import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p>Notre cabinet d'expertise comptable...</p>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Notre Vidéo</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yourvideoid" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Nos Employés</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Cards des employés */}
                </div>
            </section>
        </MainLayout>
    );
};

export default About;
