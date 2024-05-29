import React, { useEffect, useState } from 'react'

interface props {
    // fibonacci: number
    // triangular: number
    // siguientePrimo: number
    numeroN: number
}

export const Resultado: React.FC<props>  = ({numeroN}) => {
  const [n, setN] = useState(numeroN)

  useEffect(()=>{
    console.log('hola');
    

  }, [n])

  return (
    <div>
        <h1>Resultado : {numeroN}</h1>
    </div>
  )
}
