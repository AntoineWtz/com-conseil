import { Article } from '../types';

const articles: Article[] = [
    {
        id: 1,
        title: 'Quand un directeur RH cache sa relation sentimentale avec une représentante syndicale…',
        content: 'Un directeur chargé de la gestion des ressources humaines qui cache à son employeur la relation amoureuse qu’il entretient avec une salarié titulaire de mandats syndicaux et de représentation du personnel dans l’entreprise manque à son obligation de loyauté et peut, à ce titre, être licencié pour faute grave. Un salarié ne peut pas, en principe, faire l’objet d’un licenciement disciplinaire en raison d’un motif tiré de sa vie personnelle, sauf s’il constitue un manquement à une obligation découlant de son contrat de travail. Ainsi, dans une affaire récente, un employeur avait licencié pour faute grave un salarié occupant un poste de direction au motif qu’il lui avait caché la relation amoureuse qu’il entretenait avec une salariée exerçant des mandats syndicaux et de représentation du personnel dans l’entreprise. Estimant que cette relation relevait de sa vie privée, le salarié avait contesté son licenciement en justice. Mais la Cour de cassation a confirmé son licenciement. En effet, elle a relevé que le salarié était chargé de la gestion des ressources humaines, qu’il avait reçu plusieurs délégations de pouvoirs de son employeur en matière d’hygiène, de sécurité et d’organisation du travail en plus de présider, à sa place et de manière permanente, les institutions représentatives du personnel. Or, il avait caché à son employeur une relation amoureuse de plusieurs années avec une salariée, titulaire de mandats de représentation syndicale et de représentation du personnel, qui s’était investie dans des mouvements de grève et d’occupation d’un établissement de l’entreprise, qui avait contesté la mise en œuvre d’un projet de réduction d’effectifs et qui avait participé à plusieurs réunions présidées par le salarié licencié et au cours desquelles des sujets sensibles relatifs à des plans sociaux avaient été discutés. Pour la Cour de cassation, en cachant à son employeur cette relation qui était en rapport avec ses fonctions professionnelles et de nature à en affecter le bon exercice, le salarié avait manqué à son obligation de loyauté. Dès lors, l’employeur pouvait le licencier pour faute grave. ',
        author: 'Admin',
        publishedDate: '2024-06-01',
        category: 'Réglementation',
        imageUri: '#'
    },
    {
        id: 2,
        title: 'Qui peut signer un plan de sauvegarde de l’emploi dans une association ?',
        content: 'Dans une association, le plan de sauvegarde de l’emploi signé par un organe incompétent peut être valablement régularisé par la validation ultérieure de l’organe compétent. Les associations d’au moins 50 salariés qui envisagent de licencier pour motif économique au moins 10 salariés sur une période de 30 jours doivent mettre en place un plan de sauvegarde de l’emploi (PSE). Le PSE peut être négocié dans le cadre d’un accord collectif conclu entre l’employeur et un syndicat représentatif. Il fait ensuite l’objet d’une validation par l’administration du travail. Dans une affaire récente, le PSE d’une association avait été conclu dans le cadre d’un accord collectif signé par sa directrice générale. Ce plan avait ensuite été validé par le directeur régional et interdépartemental de l’économie, de l’emploi, du travail et des solidarités (DRIEETS). Plusieurs salariés de l’association avaient contesté en justice la décision administrative validant le PSE. Ils soutenaient notamment que la directrice générale de l’association était dépourvue de qualité pour signer le PSE au nom de l’association. En effet, selon ses statuts, la directrice générale ne pouvait engager l’association qu’à hauteur de 300 000 €. Les dépenses supérieures à ce montant devant être autorisées par le comité exécutif. Pour les salariés, le PSE, dont le coût s’élevait à 2,8 millions d’euros, aurait donc dû être signé par le comité exécutif et non pas par la directrice générale. Saisi de ce litige, le Conseil d’État a considéré que le PSE était valide. Pour en arriver à cette conclusion, il a constaté que le comité exécutif avait ratifié l’accord collectif signé par la directrice générale. Le fait que cette délibération intervienne 6 mois après la signature de l’accord et sa validation par la DRIEETS ne remettait pas en cause cette régularisation.',
        author: 'Admin',
        publishedDate: '2024-06-02',
        category: 'Fonctionnalité',
        imageUri: '#'
    },
    {
        id: 3,
        title: 'Nouveau Partenaire',
        content: 'Détails sur le nouveau partenaire...',
        author: 'Admin',
        publishedDate: '2024-06-03',
        category: 'Partenaire',
        imageUri: '#'
    },
    {
        id: 4,
        title: 'Nouveau Produit',
        content: 'Détails sur le nouveau produit...',
        author: 'Admin',
        publishedDate: '2024-06-04',
        category: 'Produit',
        imageUri: '#'
    },
];

export const getArticles = (): Promise<Article[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(articles);
        }, 0);
    });
};
