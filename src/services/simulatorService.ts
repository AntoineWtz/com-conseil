import { Simulator } from '../types';

const simulators: Simulator[] = [
    { id: 1, name: 'Taux de rendement d\'une suite de versements constants', category: 'Placement' },
    { id: 2, name: 'Taux de rendement d\'un capital', category: 'Placement' },
    { id: 3, name: 'Valeur acquise par une suite de versements constants', category: 'Placement' },
    { id: 4, name: 'Valeur acquise par un capital placé à intérêts composés pendant une durée déterminée', category: 'Placement' },
    { id: 5, name: 'Calcul du capital emprunté', category: 'Emprunts' },
    { id: 6, name: 'Calcul de la durée', category: 'Emprunts' },
    { id: 7, name: 'Calcul du versement périodique', category: 'Emprunts' },
    { id: 8, name: 'Calcul du taux', category: 'Emprunts' },
    { id: 9, name: 'Calcul des loyers', category: 'Crédit-Bail' },
    { id: 10, name: 'Calcul du taux réel', category: 'Crédit-Bail' },
    { id: 11, name: 'Calcul de la durée', category: 'Crédit-Bail' },
    { id: 12, name: 'Absences et congés du salarié', category: 'Congés payés' },
    { id: 13, name: 'Correspondance jours ouvrés/jours ouvrables', category: 'Congés payés' },
    { id: 14, name: 'Seuil de rentabilité', category: 'Autres' },
    { id: 15, name: 'Calcul des frais kilométriques', category: 'Autres' },
    { id: 16, name: 'Versement transport', category: 'Autres' },
];

export const getSimulators = (): Promise<Simulator[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simulators);
        }, 0);
    });
};

export const getSimulatorById = (id: number): Promise<Simulator | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simulators.find(sim => sim.id === id));
        }, 0);
    });
};
