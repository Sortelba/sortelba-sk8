import React, { useState, useEffect } from 'react';
import Modal from './Modal';

interface TrickRandomizerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const stances = ['Regular', 'Nollie', 'Fakie', 'Switch', 'Freie Wahl'];
const tricks = ['Kickflip', 'Heelflip', 'Pop Shove It', 'Varial Kickflip', 'Tre Flip', 'Freie Wahl'];
const rotations = ['180', '360', 'FS', 'BS', 'Freie Wahl'];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

interface DiceProps {
    title: string;
    value: string;
    isRolling: boolean;
}

const Dice: React.FC<DiceProps> = ({ title, value, isRolling }) => {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        if (!isRolling) {
            // Update the display value only after the rolling animation ends
            setDisplayValue(value);
        }
    }, [value, isRolling]);
    
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-brand-light rounded-lg border-2 border-gray-200 shadow-inner min-h-[160px] text-center">
            <h3 className="text-sm font-bold text-brand-gray uppercase tracking-wider">{title}</h3>
            <div className="mt-4 flex items-center justify-center flex-grow">
                 <span className={`block text-2xl md:text-3xl font-black text-brand-primary transition-all duration-300 ease-in-out ${isRolling ? 'opacity-0 transform scale-75 -rotate-12' : 'opacity-100 transform scale-100 rotate-0'}`}>
                    {displayValue}
                </span>
            </div>
        </div>
    );
};


const TrickRandomizerModal: React.FC<TrickRandomizerModalProps> = ({ isOpen, onClose }) => {
    const [result, setResult] = useState({ stance: '', trick: '', rotation: '' });
    const [isRolling, setIsRolling] = useState(false);

    const rollDice = () => {
        if (isRolling) return;
        
        setIsRolling(true);
        
        setTimeout(() => {
            setResult({
                stance: getRandomItem(stances),
                trick: getRandomItem(tricks),
                rotation: getRandomItem(rotations)
            });
            setIsRolling(false);
        }, 700);
    };

    useEffect(() => {
        if (isOpen && !result.stance) {
             setResult({
                stance: getRandomItem(stances),
                trick: getRandomItem(tricks),
                rotation: getRandomItem(rotations)
            });
        }
    }, [isOpen, result.stance]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Skateboard Trick Randomizer">
            <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <Dice title="Stance" value={result.stance} isRolling={isRolling} />
                    <Dice title="Trick" value={result.trick} isRolling={isRolling} />
                    <Dice title="Rotation" value={result.rotation} isRolling={isRolling} />
                </div>
                <div className="mt-8 text-center">
                    <button
                        onClick={rollDice}
                        disabled={isRolling}
                        className="px-10 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg disabled:bg-brand-gray disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100"
                    >
                        {isRolling ? 'Würfeln...' : 'Trick Würfeln'}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default TrickRandomizerModal;
