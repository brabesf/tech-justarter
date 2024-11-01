import { fireEvent,render, screen } from '@testing-library/react';
import React from 'react';

import { LawsuitCard } from './lawsuit-card';

describe('<LawsuitCard />', () => {
    const exampleLawsuit = {
      number: '1234567-89.2023.8.09.0001',
      court: 'TJCE',
    };
    const exampleProps = {
        props: exampleLawsuit,
        handleClick: jest.fn((props) => JSON.stringify(props))
    }
  
    it('should render the lawsuit details correctly', () => {
      render(<LawsuitCard {...exampleProps} />);
  
      expect(screen.getByText('1234567-89.2023.8.09.0001')).toBeInTheDocument();
      expect(screen.getByText('TJCE')).toBeInTheDocument();
    });
  
    it('should call handleClick with the correct props when the button is clicked', () => {
      render(<LawsuitCard {...exampleProps} />);
  
      fireEvent.click(screen.getByText('1234567-89.2023.8.09.0001'));
  
      expect(exampleProps.handleClick).toHaveBeenCalledWith(exampleLawsuit);
    });
  });