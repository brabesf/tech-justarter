import { fireEvent,render, screen } from '@testing-library/react';
import React from 'react';

import { LawsuitHeader } from './lawsuit-header';

describe('<LawsuitHeader />', () => {
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
    
    const mockHandleClick = jest.fn();

    it('should render the lawsuit header correctly', () => {
      render(<LawsuitHeader lawsuit={exampleLawsuit} handleBack={mockHandleClick}/>);
  
      expect(screen.getByText("Processo n°" + exampleLawsuit.number + " do " + exampleLawsuit.court)).toBeInTheDocument();
      expect(screen.getByText("Data de distribuição: " + exampleLawsuit.date.slice(0, 10))).toBeInTheDocument();
      expect(screen.getByText("Pesquisar outro processo")).toBeInTheDocument();
      
    });

    it('should call handleBack', () => {
      render(<LawsuitHeader lawsuit={exampleLawsuit} handleBack={mockHandleClick}/>);

      fireEvent.click(screen.getByText('Pesquisar outro processo'));
  
      expect(mockHandleClick).toHaveBeenCalled();
    });
  
  });