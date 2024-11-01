import { render, screen } from '@testing-library/react';
import React from 'react';

import { Lawyer } from './lawyer';

describe('<Lawyer />', () => {
    const exampleLawyer = {
      name: 'Ana Joyce',
    };
  
    it('should render the lawyer details correctly', () => {
      render(<Lawyer lawyer={exampleLawyer} />);
  
      expect(screen.getByText(exampleLawyer.name)).toBeInTheDocument();
      expect(screen.getByText('Advogado envolvido')).toBeInTheDocument();
    });
  
  });