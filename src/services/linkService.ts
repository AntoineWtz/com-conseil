import { Link } from '../types';
import unapl from '../assets/images/links/unapl.jpg';
import cnpl from '../assets/images/links/cnpl.jpg';
import cnavpl from '../assets/images/links/cnavpl.jpg';
import unasa from '../assets/images/links/unasa.jpg';
import jedeclare from '../assets/images/links/jedeclare.jpg';
import netEntreprises from '../assets/images/links/net-entreprises.jpg';
import mefr from '../assets/images/links/mefr.jpg';
import mtei from '../assets/images/links/mtei.jpg';
import servicePublic from '../assets/images/links/service-public.jpg';
import impotsGouv from '../assets/images/links/impots-gouv.jpg';
import legifrance from '../assets/images/links/legifrance.jpg';
import journalOfficiel from '../assets/images/links/journal-officiel.jpg';
import echos from '../assets/images/links/les-echos.jpg';
import cci from '../assets/images/links/cci.jpg';
import europa from '../assets/images/links/europa.jpg';
import lesAides from '../assets/images/links/les-aides.jpg';
import apce from '../assets/images/links/apce.jpg';
import infogreffe from '../assets/images/links/infogreffe.jpg';

const links: Record<string, Link[]> = {
    "Aide aux professions libérales": [
        { name: 'Union Nationale des Professions Libérales', url: 'https://unapl.fr/', image: unapl, description: 'Le site de l\'un des trois principaux représentants des libéraux' },
        { name: 'Chambre Nationale des Professions Libérales', url: 'https://cnpl.org/', image: cnpl, description: 'La Chambre Nationale des Professions Libérales est un organisme représentatif des professions libérales considérée comme le premier organisme à avoir rassemblé les professionnels libéraux.' },
        { name: 'Caisse Nationale d\'Assurance Vieillesse des Professions Libérales', url: 'https://www.cnavpl.fr/', image: cnavpl, description: 'L\'Organisation autonome d\'assurance vieillesse des professions libérales comprend une Caisse nationale, la CNAVPL, et dix sections professionnelles spécialisées (notaires, médecins, agents d’assurance, etc. ) dont la CIPAV.' },
        { name: 'UNASA', url: 'http://www.unasa.fr/', image: unasa, description: 'L\'UNASA regroupe 81 associations agréées réparties sur l\'ensemble du territoire, majoritairement interprofessionnelles. Soit un total de près de 190 000 professionnels libéraux adhérents, et plus du tiers des professionnels adhérents à une association agréée.' },
        { name: 'Jedeclare.com', url: 'https://ecma-solutions.com/produits-expert-comptable/jedeclare', image: jedeclare, description: 'Le site jedeclare.com est le portail officiel de l\'ordre des experts- comptables pour vos déclarations fiscales et sociales.' },
        { name: 'Net-Entreprises', url: 'https://www.net-entreprises.fr/', image: netEntreprises, description: 'Le site proposé par les organismes de protection sociale aux entreprises pour effectuer en ligne les déclarations sociales et régler les cotisations et contributions.' }
    ],
    "Sites gouvernementaux": [
        { name: 'Ministère de l\'économie et des finances', url: 'https://www.economie.gouv.fr/', image: mefr, description: 'Le site ou vous pourrez consulter toutes les actualités, la documentation, les études statistiques, les publications des Ministères et télécharger divers formulaires (création d\'entreprise, formation alternance, etc.) textes et circulaires réglementaires.' },
        { name: 'Ministère du Travail, de l\'Emploi, de la Formation Professionnelle et du Dialogue Social', url: 'https://travail-emploi.gouv.fr/', image: mtei, description: 'Le site où vous pourrez consulter toutes les actualités, la documentation, les études statistiques et les publications du Ministère et télécharger divers formulaires (création d’entreprise, formation alternance, etc).' },
        { name: 'Service Public', url: 'https://www.service-public.fr/', image: servicePublic, description: 'Portail de l\'administration française : fiches pratiques, annuaire international des sites publics, centre de renseignement, lettre hebdomadaire d\'information.' },
        { name: 'Impots Gouv', url: 'https://www.impots.gouv.fr/accueil', image: impotsGouv, description: 'Informations et services utiles à la déclaration et au paiement de l\'impôt pour les particuliers, professionnels et collectivités locales.' },
        { name: 'Legifrance', url: 'https://www.legifrance.gouv.fr/', image: legifrance, description: 'Legifrance, le service public de la diffusion du droit par l\'Internet, donne accès au droit français : la Constitution, les codes, lois et règlements, les conventions ...' },
        { name: 'Journal Officiel', url: 'https://www.journal-officiel.gouv.fr/pages/accueil/', image: journalOfficiel, description: 'Consultez le JO lois et décrets, les annonces de marchés publics du BOAMP, les créations d\'associations et fondations, les annonces légales obligatoires, etc.' }
    ],
    "Aide aux entreprises": [
        { name: 'Les Echos Entrepreneurs', url: 'business.lesechos.fr/entrepreneurs', image: echos, description: 'Retrouvez sur le site du quotidien Les Echos, toute l\'actualité dédiée à l\'entreprenariat, création d\'entreprise, conseil aide entreprise.' },
        { name: 'Assemblée des Chambres de Commerce et d\'Industrie', url: 'https://www.cci.fr/', image: cci, description: 'Les CCI sont en prise directe avec les préoccupations de leurs clients, commerçants et entrepreneurs du territoire. Elles sont à la fois force de proposition, de réalisation et de formation au service de l\'entreprise.' },
        { name: 'Europa.eu', url: 'https://europa.eu/youreurope/business/finance-funding/getting-funding/eu-funding-programmes/index_fr.htm', image: europa, description: 'Le site de l’Europe liste pays par pays les différents organismes et types d’aides au développement économique des entreprises.' },
        { name: 'Les-aides.fr (Sémaphore)', url: 'https://les-aides.fr/', image: lesAides, description: 'Le site Les-aides (Sémaphore) est la base de données centralisée des CCI qui répertorie au niveau national et local toutes les aides aux entreprises. Au total, 5 000 aides techniques et financières y sont recensées. À consulter si vous recherchez des financements.' },
        { name: 'Agence pour la Création d\'Entrprise', url: 'www.apce.com', image: apce, description: 'Le site Les-aides (Sémaphore) est la base de données centralisée des CCI qui répertorie au niveau national et local toutes les aides aux entreprises. Au total, 5 000 aides techniques et financières y sont recensées. À consulter si vous recherchez des financements.' },
        { name: 'Infogreffe', url: 'https://www.infogreffe.fr/', image: infogreffe, description: 'Infogreffe est le registre du commerce et des sociétés en direct du greffe du tribunal de Commerce.' }
    ]
};

export const getLinks = () => {
    return links;
};