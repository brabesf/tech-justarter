import { render, screen } from '@testing-library/react';
import React from 'react';

import { PeopleAndLawyers } from './people-and-lawyers';

describe('<PeopleAndLawyers />', () => {
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

    it('should render the lawyer details correctly', () => {
      render(<PeopleAndLawyers lawsuit={exampleLawsuit}/>);
  
      expect(screen.getByText(exampleLawsuit.lawyers[0].name)).toBeInTheDocument();
      expect(screen.getAllByText('Advogado envolvido')).toHaveLength(2);

      expect(screen.getByText(exampleLawsuit.lawyers[1].name)).toBeInTheDocument();
      
    
    });

    it('should render the related people details correctly', () => {
        render(<PeopleAndLawyers lawsuit={exampleLawsuit}/>);
    
        expect(screen.getByText(exampleLawsuit.related_people[0].name)).toBeInTheDocument();
        expect(screen.getByText("Parte envolvida - "+ exampleLawsuit.related_people[0].role)).toBeInTheDocument();
        expect(screen.getByText(exampleLawsuit.related_people[1].name)).toBeInTheDocument();
        expect(screen.getByText("Parte envolvida - "+ exampleLawsuit.related_people[1].role)).toBeInTheDocument();

        
      });
  
  });