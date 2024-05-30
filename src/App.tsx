import { useState } from 'react'
import './App.css'
import { TextField } from '@mui/material'
import Formulario from './components/Formulario'
import { Resultado } from './components/Resultado'



function App() {
  const [n, setN] = useState<number>(0)

  const actualizarN = (numero: number) => setN(numero)

  return (
    <>
      <main className='h-screen place-content-center px-4' style={{ backgroundColor: '#242424' }}>

        

        <section className='md:w-3/4 w-5/6 mx-auto my-8 space-y-4'>
          <h2 className='text-left'>Instrucciones</h2>

          <ul className='text-left'>
            <li>Escribe un número entero en el cuadro de texto</li>
            <li>Da click al botón Calcular para ver el resultado de la operación</li>
          </ul>
        </section>


        <section>
          <p className=' text-sm md:text-3xl my-'>serie(n) = 5triangular(n) - 2fibofacci(n) + primo(n+1)</p>
        </section>

        <section className='space-y-4 md:flex md:flex-cols py-8'>
          <Formulario className='grid gap-4 md:w-1/4 mx-auto' calcular={actualizarN}></Formulario>
          <Resultado className='md:w-1/2 space-y-4' numeroN={n} ></Resultado>
        </section>

        <section className='grid grid-cols-2 md:w-3/4 md:mx-auto gap-4 place-content-center'>

          <svg
            id="svg3558"
            style={{ strokeLinecap: 'round' }}
            version="1.1"
            viewBox="0 0 296.99999 209.99999"

          >
            <g
              id="g4368"
              transform="matrix(.88522 0 0 .88522 4.8802 -5.9104)"
            >
              <path
                id="path3560"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m200.41 25.368a199.85 199.85 0 0 0 -199.85 199.84"
              />
              <path
                id="path3562"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m323.92 148.88a123.51 123.51 0 0 0 -123.51 -123.51"
              />
              <path
                id="path3564"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m247.59 225.21a76.335 76.335 0 0 0 76.334 -76.335"
              />
              <path
                id="path3566"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m200.41 178.04a47.176 47.176 0 0 0 47.176 47.176"
              />
              <path
                id="path3568"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m229.57 148.88a29.159 29.159 0 0 0 -29.158 29.159"
              />
              <path
                id="path3570"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m247.59 166.9a18.018 18.018 0 0 0 -18.02 -18.02"
              />
              <ellipse
                id="ellipse3572"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', strokeWidth: '.56444', fill: 'none' }}
                cx="1"
                cy="102"
                rx="0"
                transform="matrix(1.996 0 0 1.996 -1.4327 21.619)"
                ry="0"
              />
              <path
                id="path3574"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m236.44 178.04a11.141 11.141 0 0 0 11.142 -11.141"
              />
              <path
                id="path3576"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m229.57 171.16a6.8769 6.8769 0 0 0 6.8763 6.8769"
              />
              <path
                id="path3578"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m233.83 166.9a4.2639 4.2639 0 0 0 -4.2635 4.2639"
              />
              <path
                id="path3580"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m236.44 169.51a2.613 2.613 0 0 0 -2.6128 -2.613"
              />
              <path
                id="path3582"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m234.79 171.16a1.6509 1.6509 0 0 0 1.6507 -1.6509"
              />
              <path
                id="path3584"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m233.83 170.2a0.96205 0.96205 0 0 0 0.96209 0.96209"
              />
              <path
                id="path3586"
                style={{ strokeLinejoin: 'round', stroke: '#333333', strokeLinecap: 'round', fill: 'none' }}
                d="m234.52 169.51a0.68888 0.68888 0 0 0 -0.68863 0.68883"
              />
            </g>
          </svg>

          <svg fill="#333333" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <circle cx="100" cy="20" r="5" />
              <circle cx="80" cy="50" r="5" />
              <circle cx="120" cy="50" r="5" />
              <circle cx="60" cy="80" r="5" />
              <circle cx="100" cy="80" r="5" />
              <circle cx="140" cy="80" r="5" />
              <circle cx="40" cy="110" r="5" />
              <circle cx="80" cy="110" r="5" />
              <circle cx="120" cy="110" r="5" />
              <circle cx="160" cy="110" r="5" />
              <circle cx="20" cy="140" r="5" />
              <circle cx="60" cy="140" r="5" />
              <circle cx="100" cy="140" r="5" />
              <circle cx="140" cy="140" r="5" />
              <circle cx="180" cy="140" r="5" />
          </svg>

        </section>

      </main>

    </>
  )
}

export default App
