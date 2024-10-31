import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CourtSelector } from './court-selector';
import { Theme } from "@radix-ui/themes"

describe('<CourtSelector />', () => {
    const mockTribunal = "Tribunal"
    const mockHandleClick = jest.fn((tribunal) => console.log(tribunal));
    
    it('should render the court', () => {
      render(<Theme>
              <CourtSelector tribunal={mockTribunal} setTribunal={mockHandleClick} />
              </Theme>);
  
      expect(screen.getByText(mockTribunal)).toBeInTheDocument();
    });

    it('should hide court options before dropdown', async () => {
      render(<Theme>
        <CourtSelector tribunal={mockTribunal} setTribunal={mockHandleClick} />
        </Theme>);
  
      expect(screen.queryByText('TJAL')).not.toBeInTheDocument();
      screen.debug();
      fireEvent.click(screen.getByRole('button', { name: mockTribunal }));
      screen.debug();
      expect(await screen.findByText('TJAL')).toBeInTheDocument();
    });

    it('should set court change', () => {
      render(<Theme>
        <CourtSelector tribunal={mockTribunal} setTribunal={mockHandleClick} />
        </Theme>);

      fireEvent.click(screen.getByText(mockTribunal));
      fireEvent.click(screen.getByText("TJAL"));

      expect(mockHandleClick).toHaveBeenCalledWith("TJAL");
    });
  
  });