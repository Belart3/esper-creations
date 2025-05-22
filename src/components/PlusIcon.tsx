import React from 'react'
import ExportedImage from "next-image-export-optimizer";

const PlusIcon = () => {
  return (
    <div>
        <ExportedImage src={'/images/icons/plus-icon.svg'} alt={''} className='size-6' height={24} width={24} />
    </div>
  )
}

export default PlusIcon