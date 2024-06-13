import React from 'react';
import MainLayout from '../layouts/MainLayout';

interface Link {
    name: string;
    url: string;
}

const links: Record<string, Link[]> = {
    "Gouvernement": [
        { name: 'Site officiel des impôts', url: 'https://www.impots.gouv.fr' },
        { name: 'URSSAF', url: 'https://www.urssaf.fr' }
    ],
    "Aides aux entreprises": [
        { name: 'Bpifrance', url: 'https://www.bpifrance.fr' },
        { name: 'Pôle emploi', url: 'https://www.pole-emploi.fr' },
        { name: 'Caisse des dépôts', url: 'https://www.caissedesdepots.fr' },
    ]
};

const UsefulLinks: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl font-cardo text-[#344697] font-bold mb-4 text-center">Sites Utiles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8 w-3/4 mx-auto">
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
