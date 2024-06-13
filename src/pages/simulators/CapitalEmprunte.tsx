
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';

const CapitalEmprunte: React.FC = () => {
    const [montantRemboursement, setMontantRemboursement] = useState<number>(0);
    const [nombreRemboursements, setNombreRemboursements] = useState<number>(0);
    const [periode, setPeriode] = useState<string>('');
    const [versements, setVersements] = useState<string>('');
    const [taux, setTaux] = useState<number>(0);
    const [resultat, setResultat] = useState<number>(0);

    const handleCalculer = () => {
        // Logique de calcul du capital emprunté
        // Montant du capital emprunté = ???
        // Mettre à jour l'état du résultat
        setResultat(0);
    };

    return (
        <MainLayout>
            <section className="mt-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Calcul du Capital Emprunté</h1>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1">Montant des remboursements</label>
                            <input type="number" value={montantRemboursement} onChange={(e) => setMontantRemboursement(Number(e.target.value))} className="w-full rounded border-gray-300" />
                        </div>
                        <div>
                            <label className="block mb-1">Nombre de remboursements</label>
                            <input type="number" value={nombreRemboursements} onChange={(e) => setNombreRemboursements(Number(e.target.value))} className="w-full rounded border-gray-300" />
                        </div>
                        <div>
                            <label className="block mb-1">Périodicité</label>
                            <select value={periode} onChange={(e) => setPeriode(e.target.value)} className="w-full rounded border-gray-300">
                                <option value="Mois">Mois</option>
                                <option value="Ans">Ans</option>
                                <option value="Trimestres">Trimestres</option>
                                <option value="Semestres">Semestres</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Versements</label>
                            <select value={versements} onChange={(e) => setVersements(e.target.value)} className="w-full rounded border-gray-300">
                                <option value="Fin de période">Fin de période</option>
                                <option value="Début de période">Début de période</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Taux proportionnel annuel (%)</label>
                            <input type="number" value={taux} onChange={(e) => setTaux(Number(e.target.value))} className="w-full rounded border-gray-300" />
                        </div>
                    </div>
                    <button onClick={handleCalculer} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">Calculer</button>
                    {/* Affichage du résultat */}
                    {resultat !== 0 && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2">Résultat</h3>
                            <p>Le capital d'un emprunt remboursé sur {nombreRemboursements} {periode} au taux proportionnel annuel (frais inclus) de {taux}% avec des versements constants de {montantRemboursement} € s'effectuant en {versements} de période est de {resultat.toFixed(2)} €.</p>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
};

export default CapitalEmprunte;
