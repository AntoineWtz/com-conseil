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
        { name: 'Union Nationale des Professions Libérales', url: 'https://unapl.fr/', description: 'Le site de l\'un des trois principaux représentants des libéraux' },
        { name: 'Chambre Nationale des Professions Libérales', url: 'https://cnpl.org/', description: 'La Chambre Nationale des Professions Libérales est un organisme représentatif des professions libérales considérée comme le premier organisme à avoir rassemblé les professionnels libéraux.' },
        { name: 'Caisse Nationale d\'Assurance Vieillesse des Professions Libérales', url: 'https://www.cnavpl.fr/', description: 'L\'Organisation autonome d\'assurance vieillesse des professions libérales comprend une Caisse nationale, la CNAVPL, et dix sections professionnelles spécialisées (notaires, médecins, agents d’assurance, etc. ) dont la CIPAV.' },
        { name: 'UNASA', url: 'http://www.unasa.fr/', description: 'L\'UNASA regroupe 81 associations agréées réparties sur l\'ensemble du territoire, majoritairement interprofessionnelles. Soit un total de près de 190 000 professionnels libéraux adhérents, et plus du tiers des professionnels adhérents à une association agréée.' },
        { name: 'Jedeclare.com', url: 'https://ecma-solutions.com/produits-expert-comptable/jedeclare', description: 'Le site jedeclare.com est le portail officiel de l\'ordre des experts- comptables pour vos déclarations fiscales et sociales.' },
        { name: 'Net-Entreprises', url: 'https://www.net-entreprises.fr/', description: 'Le site proposé par les organismes de protection sociale aux entreprises pour effectuer en ligne les déclarations sociales et régler les cotisations et contributions.' }
    ],
    "Sites gouvernementaux": [
        { name: 'Ministère des finances et des comptes publics', url: 'https://www.economie.gouv.fr/', description: 'Le site ou vous pourrez consulter toutes les actualités, la documentation, les études statistiques, les publications des Ministères et télécharger divers formulaires (création d\'entreprise, formation alternance, etc.) textes et circulaires réglementaires.' },
        { name: 'Ministère de l\'économie, de l\'industrie et du numérique', url: 'https://www.economie.gouv.fr/', description: 'Le site ou vous pourrez consulter toutes les actualités, la documentation, les études statistiques, les publications des Ministères et télécharger divers formulaires (création d\'entreprise, formation alternance, etc.) textes et circulaires réglementaires.' },
        { name: 'Ministère du Travail, de l\'Emploi, de la Formation Professionnelle et du Dialogue Social', url: 'https://travail-emploi.gouv.fr/', description: 'Le site où vous pourrez consulter toutes les actualités, la documentation, les études statistiques et les publications du Ministère et télécharger divers formulaires (création d’entreprise, formation alternance, etc).' },
        { name: 'Service Public', url: 'https://www.service-public.fr/', description: 'Portail de l\'administration française : fiches pratiques, annuaire international des sites publics, centre de renseignement, lettre hebdomadaire d\'information.' },
        { name: 'Impots Gouv', url: 'https://www.impots.gouv.fr/accueil', description: 'Informations et services utiles à la déclaration et au paiement de l\'impôt pour les particuliers, professionnels et collectivités locales.' },
        { name: 'Legifrance', url: 'https://www.legifrance.gouv.fr/', description: 'Legifrance, le service public de la diffusion du droit par l\'Internet, donne accès au droit français : la Constitution, les codes, lois et règlements, les conventions ...' },
        { name: 'Journal Officiel', url: 'https://www.journal-officiel.gouv.fr/pages/accueil/', description: 'Consultez le JO lois et décrets, les annonces de marchés publics du BOAMP, les créations d\'associations et fondations, les annonces légales obligatoires, etc.' }
    ],
    "Aide aux entreprises": [
        { name: 'Les Echos Entrepreneurs', url: 'business.lesechos.fr/entrepreneurs', description: 'Retrouvez sur le site du quotidien Les Echos, toute l\'actualité dédiée à l\'entreprenariat, création d\'entreprise, conseil aide entreprise.' },
        { name: 'Assemblée des Chambres de Commerce et d\'Industrie', url: 'https://www.cci.fr/', description: 'Les CCI sont en prise directe avec les préoccupations de leurs clients, commerçants et entrepreneurs du territoire. Elles sont à la fois force de proposition, de réalisation et de formation au service de l\'entreprise.' },
        { name: 'Europa.eu', url: 'https://europa.eu/youreurope/business/finance-funding/getting-funding/eu-funding-programmes/index_fr.htm', description: 'Le site de l’Europe liste pays par pays les différents organismes et types d’aides au développement économique des entreprises.' },
        { name: 'Les-aides.fr (Sémaphore)', url: 'https://les-aides.fr/', description: 'Le site Les-aides (Sémaphore) est la base de données centralisée des CCI qui répertorie au niveau national et local toutes les aides aux entreprises. Au total, 5 000 aides techniques et financières y sont recensées. À consulter si vous recherchez des financements.' },
        { name: 'Agence pour la Création d\'Entrprise', url: 'www.apce.com', description: 'Le site Les-aides (Sémaphore) est la base de données centralisée des CCI qui répertorie au niveau national et local toutes les aides aux entreprises. Au total, 5 000 aides techniques et financières y sont recensées. À consulter si vous recherchez des financements.' },
        { name: 'Infogreffe', url: 'https://www.infogreffe.fr/', description: 'Infogreffe est le registre du commerce et des sociétés en direct du greffe du tribunal de Commerce.' }
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
                            <ul className="list-disc list-inside mt-2">
                                {links[category].map((link: Link, index: number) => (
                                    <li key={index} className="mb-2">
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {link.name}
                                        </a>
                                        <br />
                                        <span>{link.description}</span>
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
