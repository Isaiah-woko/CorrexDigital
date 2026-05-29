import React, { useState } from 'react'
import ContactModal from './ContactModal'

const ContactButton: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full font-medium uppercase tracking-widest text-white cursor-pointer transition-opacity hover:opacity-90 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
        style={{
          background: 'linear-gradient(123deg, #0A0A2E 7%, #0057FF 37%, #0033CC 72%, #00AAFF 100%)',
          boxShadow: '0px 4px 4px rgba(0, 87, 255, 0.25), inset 4px 4px 12px #0033CC',
          outline: '2px solid white',
          outlineOffset: '-3px',
          fontFamily: "'Kanit', sans-serif",
        }}
      >
        Get In Touch
      </button>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default ContactButton