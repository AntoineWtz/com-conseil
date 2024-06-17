import React from 'react';
import MainLayout from '../layouts/MainLayout';

interface Link {
    name: string;
    url: string;
    description?: string;
    image?: string;
}

const links: Record<string, Link[]> = {
    "Aide aux professions libérales": [
        { name: 'Union Nationale des Professions Libérales', url: 'https://unapl.fr/' },
        { name: 'Chambre Nationale des Professions Libérales', url: 'https://cnpl.org/' },
        { name: 'Caisse Nationale d\'Assurance Vieillesse des Professions Libérales', url: 'https://www.cnavpl.fr/' },
        { name: 'UNASA', url: 'http://www.unasa.fr/' },
        { name: 'Jedeclare.com', url: 'https://ecma-solutions.com/produits-expert-comptable/jedeclare' },
        { name: 'Net-Entreprises', url: 'https://www.net-entreprises.fr/' }
    ],
    "Sites gouvernementaux": [
        { name: 'Ministère des finances et des comptes publics', url: 'https://www.economie.gouv.fr/' },
        { name: 'Ministère de l\'économie, de l\'industrie et du numérique', url: 'https://www.economie.gouv.fr/' },
        { name: 'Ministère du Travail, de l\'Emploi, de la Formation Professionnelle et du Dialogue Social', url: 'https://travail-emploi.gouv.fr/' },
        { name: 'Service Public', url: 'https://www.service-public.fr/' },
        { name: 'Impots Gouv', url: 'https://www.impots.gouv.fr/accueil' },
        { name: 'Legifrance', url: 'https://www.legifrance.gouv.fr/' },
        { name: 'Journal Officiel', url: 'https://www.journal-officiel.gouv.fr/pages/accueil/' }
    ],
    "Aide aux entreprises": [
        { name: 'Les Echos Entrepreneurs', url: 'business.lesechos.fr/entrepreneurs' },
        { name: 'Assemblée des Chambres de Commerce et d\'Industrie', url: 'https://www.cci.fr/' },
        { name: 'Europa.eu', url: 'https://europa.eu/youreurope/business/finance-funding/getting-funding/eu-funding-programmes/index_fr.htm' },
        { name: 'Les-aides.fr (Sémaphore)', url: 'https://les-aides.fr/' },
        { name: 'Agence pour la Création d\'Entrprise', url: 'www.apce.com' },
        { name: 'Infogreffe', url: 'https://www.infogreffe.fr/' }
    ]
};

const UsefulLinks: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl font-cardo text-[#344697] font-bold mb-4 text-center">Sites Utiles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8 w-3/4 mx-auto">
                    {Object.keys(links).map((category) => (
                        <div key={category} className="border p-4 rounded shadow-md">
                            <h3 className="text-xl font-bold text-center text-[#344697]">{category}</h3>
                            <ul className="list-inside mt-2">
                                {links[category].map((link: Link, index: number) => (
                                    <li key={index} className="mb-2">
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default UsefulLinks;
