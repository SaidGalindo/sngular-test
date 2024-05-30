import { Button, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { calcularTriangular, fibonacci, serie, } from '../utils/Math'


interface props {
    calcular?: (n: number) => void
    className?: string
}

const Formulario: React.FC<props> = ({ calcular, className }) => {
    const [n, setN] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const regex = /^[+-]?(\d*\.?\d*)$/;
        if (regex.test(newValue) || newValue)
            setN(Number(newValue));
    }




    const calcularSerie = () => {
        if (calcular !== undefined) calcular(n)
    }

    return (
        <div className={className}>
            <h2>Valor de N</h2>
            <TextField type='text' className='rounded-md'
                inputProps={{ min: 0, style: { textAlign: 'center', fontSize: 30, padding: 10 } }}
                value={n} onChange={handleChange} style={{ backgroundColor: 'white' }}></TextField>
            <Button variant='contained' onClick={calcularSerie} >Calcular</Button>
        </div>
    )
}

export default Formulario
