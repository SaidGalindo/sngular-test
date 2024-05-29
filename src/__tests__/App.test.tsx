import * as React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'

import Formulario from '../components/Formulario'
import App from '../App'
import { calcularSiguientePrimo, calcularTriangular, esPrimo, fibonacci, serie } from '../utils/Math'



it('renders Formulario component', () => {
    // render(<Formulario />);
    // render(<Formulario />)
    const msg = screen.queryByText("Hello worlddd")
    expect(msg).toBeDefined()

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
    //3: 6, 3, 3
    expect(serie(1)).toBe(5)
    expect(serie(3)).toBe(31)
    expect(serie(10)).toBe(176)
    expect(serie(15)).toBe(-603)
    expect(serie(20)).toBe(-12457)
    expect(serie(21)).toBe(-20714)
    expect(serie(30)).toBe(-1661724)
});

