import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LawsuitDetails } from './lawsuit-details';

describe('<LawsuitCard />', () => {
    const exampleLawsuit = {
      value: 50000.75,
      subject: "Exploração do trabalho infantil",
      related_people: [
        {
          role: "Autor",
          name: "Maria Souza"
        },
        {
          role: "Réu",
          name: "Empresa Xyz Ltda."
        }
      ],
      number: "1234567-89.2023.8.09.0001",
      nature: "Ação Ordinária",
      lawyers: [
        {
          name: "Carlos Almeida"
        },
        {
          name: "Ana Pereira"
        }
      ],
      kind: "Cível",
      judge: "João Silva",
      id: "3",
      date: "2023-05-10T00:00:00",
      court: "TJCE",
      activities: [
        {
          description: "Distribuído por sorteio",
          date: 1683763200
        },
        {
          description: "Citação expedida",
          date: 1684108800
        }
      ]
    }
  
    it('should render the lawsuit details correctly', () => {
      render(<LawsuitDetails lawsuit={exampleLawsuit} />);
  
      expect(screen.getByText('Natureza: ' + exampleLawsuit.nature)).toBeInTheDocument();
      expect(screen.getByText('Tipo: ' + exampleLawsuit.kind)).toBeInTheDocument();
      expect(screen.getByText('Assunto: ' + exampleLawsuit.subject)).toBeInTheDocument();
      expect(screen.getByText('Valor R$: ' + exampleLawsuit.value)).toBeInTheDocument();
    });
  
  });