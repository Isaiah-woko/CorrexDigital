import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle, Mail } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const WHATSAPP_NUMBER = '2348139936089'
const EMAIL = 'hello@correxdigital.com'

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) return
    const subject = encodeURIComponent(`New message from ${name} — Correx Digital`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setName('')
      setEmail('')
      setMessage('')
      onClose()
    }, 2000)
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! I found you through your website and I'd like to get in touch.`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const handleEmailDirect = () => {
    window.location.href = `mailto:${EMAIL}`
  }

  const inputStyle: React.CSSProperties = {
    background: 'rgba(215, 226, 234, 0.05)',
    border: '1px solid rgba(215, 226, 234, 0.15)',
    borderRadius: '12px',
    color: '#D7E2EA',
    fontFamily: "'Kanit', sans-serif",
    fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
    padding: '14px 18px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-50 w-full"
            style={{
              bottom: 0,
              left: 0,
              right: 0,
              maxWidth: '640px',
              margin: '0 auto',
            }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            <div
              style={{
                background: '#111114',
                border: '1px solid rgba(215, 226, 234, 0.12)',
                borderRadius: '32px 32px 0 0',
                padding: 'clamp(24px, 5vw, 48px)',
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3
                    className="font-black uppercase leading-none"
                    style={{
                      background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                    }}
                  >
                    Get In Touch
                  </h3>
                  <p
                    className="font-light uppercase tracking-wide mt-1"
                    style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)' }}
                  >
                    We'll get back to you within 24 hours
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                  style={{
                    width: 40,
                    height: 40,
                    border: '1px solid rgba(215,226,234,0.2)',
                    color: '#D7E2EA',
                    flexShrink: 0,
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-3 mb-6">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.15)')}
                />
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.15)')}
                />
                <textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(215,226,234,0.15)')}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !message.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest transition-opacity mb-8"
                style={{
                  background: sent
                    ? 'linear-gradient(123deg, #0A2E1A 7%, #00AA55 100%)'
                    : 'linear-gradient(123deg, #0A0A2E 7%, #0057FF 37%, #0033CC 72%, #00AAFF 100%)',
                  boxShadow: '0px 4px 4px rgba(0,87,255,0.25), inset 4px 4px 12px #0033CC',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                  color: 'white',
                  padding: '14px 32px',
                  fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)',
                  opacity: !name.trim() || !message.trim() ? 0.4 : 1,
                  cursor: !name.trim() || !message.trim() ? 'not-allowed' : 'pointer',
                }}
              >
                <Send size={16} />
                {sent ? 'Opening your mail app...' : 'Send Message'}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div style={{ flex: 1, height: '1px', background: 'rgba(215,226,234,0.1)' }} />
                <span
                  className="font-light uppercase tracking-widest"
                  style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '0.7rem' }}
                >
                  Or reach me directly
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(215,226,234,0.1)' }} />
              </div>

              {/* Direct contact buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest transition-colors hover:bg-[#25D366]/20"
                  style={{
                    border: '1px solid rgba(37,211,102,0.4)',
                    color: '#25D366',
                    padding: '12px 20px',
                    fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)',
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
                <button
                  onClick={handleEmailDirect}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest transition-colors"
                  style={{
                    border: '1px solid rgba(215,226,234,0.2)',
                    color: '#D7E2EA',
                    opacity: 0.6,
                    padding: '12px 20px',
                    fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)',
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  <Mail size={16} />
                  Email
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
