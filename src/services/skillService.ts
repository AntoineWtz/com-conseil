import { Skill } from '../types';
import skill1 from '../assets/images/skills/comptabilite-expertise.jpg';
import skill2 from '../assets/images/skills/accompagnement-createur.jpg';
import skill3 from '../assets/images/skills/ressources-humaines.jpg';
import skill4 from '../assets/images/skills/transmission-entreprise.jpg';
import skill5 from '../assets/images/skills/fiscalite-personnelle.jpg';
import skill6 from '../assets/images/skills/gestion-patrimoine.jpg';

const skills: Skill[] = [
    {
        id: 1,
        name: 'Comptabilité - Expertise',
        description: 'Nous vous accompagnons dans le développement de votre entreprise et vous assistons sur : l’organisation administrative et comptable, la mise en place des outils de gestion, la mise en place de votre comptabilité, et, la gestion administrative et comptable.',
        imageUri: skill1,
        missions: ['Mise en place de l’organisation administrative et comptable', 'Saisie comptable des pièces justificatives', 'Edition des journaux comptables', 'Bilan et compte de résultat', 'Etablissement de la déclaration fiscale des résultats', 'Etablissement des comptes annuels (plaquette)', 'Clôture annuelle des comptes', 'Mise à jour des livres légaux']
    },
    {
        id: 2,
        name: 'Accompagnement du Créateur',
        description: 'Créer une entreprise peut nécessiter l’intervention d’un expert-comptable pour de multiples raisons. Tout d’abord parce que cela demande la maîtrise de certaines notions (juridiques, fiscales, comptables, financières etc.). Mais également parce que les décisions prises dans le cadre d’une création d’entreprise ne doivent jamais être prises à la légère (elles ont parfois des conséquences irréversibles). Quoi qu’il en soit, l’intervention d’un expert-comptable présente de nombreux avantages. Le conseiller à la création joue précisément le rôle de guide, de clarificateur, d’accoucheur d’idées. Il initie une démarche structurée, donne des outils pour  vérifier avec le créateur, la viabilité de son projet et met en place les conditions pour assurer sa réussite.',
        imageUri: skill2,
        missions: ['Choix de la structure juridique', 'Choix du statut social du dirigeant', 'Choix du régime fiscal', 'Établissement du business plan', 'Accompagnement au lancement de l\'entreprise', 'Mise en place des outils administratifs', 'Mise en place des outils de gestion', 'Suivi des obligations sociales', 'Suivi des obligations fiscales', 'Suivi des obligations juridiques']
    },
    {
        id: 3,
        name: 'Ressources humaines',
        description: 'Le social occupe aujourd’hui une place importante dans l’organisation et le développement de votre entreprise. Nous vous accompagnons dans l\'établissement de la paie et des déclarations.',
        imageUri: skill3,
        missions: ['Etablissement des contrats de travail', 'Déclaration unique d’embauche', 'Etablissement des bulletins de paie', 'Etablissement des déclarations sociales', 'DADS et déclarations de fin d’année']
    },
    {
        id: 4,
        name: 'Transmission d\'entreprise',
        description: 'Nous vous accompagnons pour organiser la transaction en prenant en compte tous les paramètres indispensables à la réuisite de l\'opération.',
        imageUri: skill4,
        missions: ['Diagnostic économique et financier', 'Optimisation de la situation patrimoniale du chef d’entreprise', 'Sélection des réseaux de cessions', 'Accompagnement dans les phases de négociation']
    },
    {
        id: 5,
        name: 'Fiscalité personnelle',
        description: 'Nous sommes à votre disposition pour définir avec vous la stratégie la plus adaptée à vos besoins et à vos objectifs. Après l’établissement de votre diagnostic fiscal, nous selectionnons les dispositifs les plus pertinents et les plus adéquats dans le cadre de l\'optimisation personnelle de vos revenus. Les dispositifs ainsi retenus sont appliqués dans le respect des textes de loi et de la jurisprudence. Vous continuez à bénéficier par la suite de l’accompagnement de nos experts, qui vous garantissent la fiabilité et la pérennité des dispositifs mis en œuvre.',
        imageUri: skill5,
        missions: ['Diagnostic fiscal approfondi', 'Évaluation de l’impact de vos impôts', 'Accompagnement dans vos relations avec l’administration fiscale', 'Veille fiscale et juridique']
    },
    {
        id: 6,
        name: 'Conseil en patrimoine',
        description: 'Le conseil en gestion de patrimoine consiste à vous guider et vous accompagner, que vous soyez professionnels ou particuliers, dans le développement et la consolidation de votre patrimoine personnel, face à un environnement juridique et fiscal dont la complexité actuelle nécessite une véritable expertise',
        imageUri: skill6,
        missions: ['Optimiser votre capital en le plaçant ou en investissant', 'Optimisation de la rémunération du dirigeant', 'Préparer la transmission de votre patrimoine à vos héritiers, sans vous démunir et protégeant votre conjoint', 'Point global de vos actifs immobiliers et financiers et pertinence de ces derniers', 'Maîtriser au mieux l’évolution de votre fiscalité IR et/ou ISF dans les années à venir', 'Préparer et optimiser la transmission/cession de votre entreprise', 'Retraite : estimation de vos droits et de l\'âge de départ, proposition, mise en oeuvre et suivi de solutions d\'optimisation']
    },
];

export const getSkills = (): Promise<Skill[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(skills);
        }, 0);
    });
};
