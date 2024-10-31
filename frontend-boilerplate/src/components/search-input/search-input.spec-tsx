import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchHeader } from './search-header';

describe('<SearchHeader />', () => {
  
    it('should render the search header details correctly', () => {
      render(<SearchHeader />);
  
      expect(screen.getByText("Consulta de processos")).toBeInTheDocument();
      expect(screen.getByText("Selecione um tribunal para listar os processos ou buscar pelo número unificado.")).toBeInTheDocument();
    });
  
  });