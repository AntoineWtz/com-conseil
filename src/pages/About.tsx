import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Notre ADN</h2>
                <p>« Notre souhait est de créer le cabinet de demain  et d’apporter une qualité de services et une réactivité accrues à vos besoins.<br />
                    En accord avec nos valeurs Proximité, Partage et Esprit d’équipe.<br />
                    Pour cela notre équipe est dotée de toutes les nouvelles technologies et logiciels mis à la disposition de notre profession afin de dématérialiser l’intégralité de vos dossiers. Cette organisation nous permet d’être au plus près de la  gestion au quotidien de votre entreprise.<br />
                    Pour C&C Com’Conseil, vous êtes un client unique que l’on souhaite accompagner  et conseiller dans les moments importants de votre entreprise et/ ou de votre vie en prenant le temps de vous écouter »
                </p>
            </section>
        </MainLayout>
    );
};

export default About;
