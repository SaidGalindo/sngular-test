import * as React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'

import Formulario from '../components/Formulario'
import App from '../App'
import { calcularSiguientePrimo, calcularTriangular, esPrimo, fibonacci, serie } from '../utils/Math'
import { Resultado } from '../components/Resultado';



it('Renders Formulario component', () => {
    render(<Formulario />);
    const msg = screen.queryByText(/Valor/i)
    expect(msg).toBeVisible();

});

it('Renders Resultado component', () => {
    render(<Resultado numeroN={5} />);
    const msg = screen.queryByText(/Resultado/i)
    expect(msg).toBeVisible();

});

it('Valor triangular', () => {
    expect(calcularTriangular(1)).toBe(1)
    expect(calcularTriangular(4)).toBe(10)
    expect(calcularTriangular(5)).toBe(15)
    expect(calcularTriangular(6)).toBe(21)
    expect(calcularTriangular(15)).toBe(120)
    expect(calcularTriangular(20)).toBe(210)

});


it('Es primo', () => {
    expect(esPrimo(2)).toBe(true)
    expect(esPrimo(3)).toBe(true)
    expect(esPrimo(5)).toBe(true)
    expect(esPrimo(7)).toBe(true)
    expect(esPrimo(8)).toBe(false)
    expect(esPrimo(495)).toBe(false)
    expect(esPrimo(500)).toBe(false)
    expect(esPrimo(503)).toBe(true)
});

it('Fibonacci', () => {
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(8)).toBe(21)
    expect(fibonacci(15)).toBe(610)
    expect(fibonacci(20)).toBe(6765)
});

it('Siguiente primo', () => {
    expect(calcularSiguientePrimo(431)).toBe(431)
    expect(calcularSiguientePrimo(1000)).toBe(1009)
    expect(calcularSiguientePrimo(600)).toBe(601)
    expect(calcularSiguientePrimo(332)).toBe(337)
});

it('Serie', () => {
    expect(serie(1)).toBe(5)
    expect(serie(3)).toBe(31)
    expect(serie(8)).toBe(149)
    expect(serie(10)).toBe(176)
    expect(serie(12)).toBe(115)
    expect(serie(15)).toBe(-603)
    expect(serie(20)).toBe(-12457)
    expect(serie(21)).toBe(-20714)
    expect(serie(25)).toBe(-148396)
    expect(serie(30)).toBe(-1661724)
    expect(serie(40)).toBe(-204664169)
});

