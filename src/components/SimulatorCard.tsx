import React from 'react';
import { Link } from 'react-router-dom';
import { Simulator } from '../types';

interface SimulatorCardProps {
    simulator: Simulator;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({ simulator }) => {
    return (
        <Link to={`/simulator/${simulator.id}`} className="border p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">{simulator.name}</h3>
            <p className="mt-2">{simulator.category}</p>
        </Link>
    );
};

export default SimulatorCard;
