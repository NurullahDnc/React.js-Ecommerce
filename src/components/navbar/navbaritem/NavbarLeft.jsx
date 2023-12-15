import React from 'react'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom'

export default function Navbarleft() {
  const Navigate = useNavigate()
  return (
    <div className='text-4xl cursor-pointer '>

      <p onClick={()=> Navigate(`/`)} className='cursor-pointer' >Shopmen</p>

    </div>
  )
}
