import { Skill } from '../types';
import skill1 from '../assets/images/comptabilite-expertise.jpg';
import skill2 from '../assets/images/accompagnement-createur.jpg';
import skill3 from '../assets/images/ressources-humaines.jpg';
import skill4 from '../assets/images/transmission-entreprise.jpg';
import skill5 from '../assets/images/fiscalite-personnelle.jpg';
import skill6 from '../assets/images/gestion-patrimoine.jpg';

const skills: Skill[] = [
    { id: 1, name: 'Comptabilité - Expertise', description: 'Gestion complète de votre comptabilité.', imageUri: skill1 },
    { id: 2, name: 'Accompagnement du Créateur', description: 'Gestion complète de votre comptabilité.', imageUri: skill2 },
    { id: 3, name: 'Ressources humaines', description: 'Gestion complète de votre comptabilité.', imageUri: skill3 },
    { id: 4, name: 'Transmission d\'entreprise', description: 'Gestion complète de votre comptabilité.', imageUri: skill4 },
    { id: 5, name: 'Fiscalité personnelle', description: 'Gestion complète de votre comptabilité.', imageUri: skill5 },
    { id: 6, name: 'Conseil en gestion de patrimoine', description: 'Gestion complète de votre comptabilité.', imageUri: skill6 },
];

export const getSkills = (): Promise<Skill[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(skills);
        }, 0);
    });
};
