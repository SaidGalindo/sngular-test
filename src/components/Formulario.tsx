import { TextField } from '@mui/material'
import  { useState } from 'react'
import {calcularTriangular, fibonacci, serie, } from '../utils/Math'


interface props{
    calcular: CallableFunction 
}

const Formulario: React.FC<props> = ({calcular}) => {
  const [n, setN] = useState(0)

  const calcularSerie = () => {
    calcular(n)
  }
  
  return (
        <div className='grid gap-4'>
            <TextField type='number' value={n} onChange={(e) => setN(Number(e.target.value))} style={{ backgroundColor: 'white' }}></TextField>
            <button onClick={calcularSerie}>
                Calcular
                {/* count is {count} */}
            </button>
        </div>
    )
}

export default Formulario
