'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import FloatingNav from './FloatingNav'

export default function NavBlock() {
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = open ? 'auto' : 'hidden';
    }

  return (
    <>
      <FloatingNav open={open} setOpen={setOpen} handleToggle={handleToggle} />
      <Navbar open={open} setOpen={setOpen} handleToggle={handleToggle} />
    </>
  )
}
