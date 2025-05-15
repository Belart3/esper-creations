import React from 'react'
import Image from 'next/image'

const PlusIcon = () => {
  return (
    <div>
        <Image src={'/images/icons/plus-icon.svg'} alt={''} className='size-6' height={24} width={24} />
    </div>
  )
}

export default PlusIcon