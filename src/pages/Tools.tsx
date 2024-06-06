import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const Tools: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl text-[#344697] font-cardo font-bold mb-4 text-center">Nos Outils</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-12">
                    <Link to="/simulators" className="border p-4 rounded-lg shadow-md text-center bg-blue-100 hover:bg-blue-200 duration-300">
                        <h3 className="text-xl font-bold text-[#344697]">Simulateurs</h3>
                        <p className="mt-2">Découvrez nos simulateurs pour vous aider dans vos calculs financiers.</p>
                    </Link>
                    <Link to="/scheduler" className="border p-4 rounded-lg shadow-md text-center bg-blue-100 hover:bg-blue-200 duration-300">
                        <h3 className="text-xl font-bold text-[#344697]">Échéancier</h3>
                        <p className="mt-2">Consultez notre calendrier des dates importantes en comptabilité.</p>
                    </Link>
                    <Link to="/useful-links" className="border p-4 rounded-lg shadow-md text-center bg-blue-100 hover:bg-blue-200 duration-300">
                        <h3 className="text-xl font-bold text-[#344697]">Sites Utiles</h3>
                        <p className="mt-2">Liste des sites web utiles pour les entreprises.</p>
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
};

export default Tools;
