import React, { useEffect, useState } from 'react'
import { serie } from '../utils/Math'

interface props {
  // fibonacci: number
  // triangular: number
  // siguientePrimo: number
  numeroN: number
  className?: string
}

export const Resultado: React.FC<props> = ({ numeroN, className }) => {
  const [n, setN] = useState(numeroN)

  useEffect(() => {

    setN(serie(numeroN))

  }, [numeroN])

  return (
    <div className={className}>
      <h2>Resultado</h2>
      <div className=' bg-black rounded-lg py-2 ' >
        <h2 className='h-full'>{n}</h2>

      </div>
    </div>
  )
}
