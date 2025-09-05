import React from 'react';
import Modal from './Modal';
import type { Page } from '../types';

interface Service {
    title: string;
    description: string;
    features: string[];
    detailedDescription: string;
    targetAudience: string;
}

interface ServiceDetailModalProps {
  service: Service;
  onClose: () => void;
  onGoToPricing: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onGoToPricing }) => {

  return (
    <Modal isOpen={true} onClose={onClose} title={service.title}>
      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-brand-dark">Beschreibung</h3>
          <p className="mt-2 text-brand-gray">
            {service.detailedDescription}
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-brand-dark">Für wen ist das Angebot geeignet?</h3>
          <p className="mt-2 text-brand-gray">
            {service.targetAudience}
          </p>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-brand-dark">Angebot Inhalt im Überblick</h3>
            <ul className="mt-4 space-y-2">
                {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <button
            onClick={onGoToPricing}
            className="w-full py-3 px-6 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Preise ansehen & Buchen
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceDetailModal;