import React from 'react'

/*dısarıdan parametre alcak, sarmalama islemi yapması icn parametre lazım, sayfanın kenarlarına sarmalama islemi olacak*/
export default function PageContainers({children}) {
  return (
    /*sayfanın 12 de 10 alanını kaplatıyoruz, ortalıyoruz */
    <div className='w-10/12 m-auto'>
      {children}
    </div>
  )
}
