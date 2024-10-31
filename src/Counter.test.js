// src/Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renderiza o título do contador', () => {
        render(<Counter />);
        const tituloElement = screen.getByText(/Contador:/i);
        expect(tituloElement).toBeInTheDocument();
    });

    test('incrementa o contador ao clicar no botão "Incrementar"', () => {
        render(<Counter />);
        const incrementarButton = screen.getByText(/Incrementar/i);
        fireEvent.click(incrementarButton);
        expect(screen.getByText(/Contador: 1/i)).toBeInTheDocument();
    });

    test('decrementa o contador ao clicar no botão "Decrementar"', () => {
        render(<Counter />);
        const decrementarButton = screen.getByText(/Decrementar/i);
        fireEvent.click(decrementarButton);
        expect(screen.getByText(/Contador: -1/i)).toBeInTheDocument();
    });
});
