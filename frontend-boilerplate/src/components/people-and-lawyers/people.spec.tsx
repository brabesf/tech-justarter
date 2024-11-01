import { render, screen } from '@testing-library/react';
import React from 'react';

import { People } from './people';

describe('<Lawyer />', () => {
    const examplePeople= {
        role: "Réu",
        name: "Empresa Xyz Ltda."
    };
  
    it('should render the related people details correctly', () => {
      render(<People people={examplePeople} />);
  
      expect(screen.getByText(examplePeople.name)).toBeInTheDocument();
      expect(screen.getByText("Parte envolvida - "+ examplePeople.role)).toBeInTheDocument();
    });
  
  });