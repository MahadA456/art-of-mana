import { useState } from 'react'
import emailjs from 'emailjs-com'
import girlImage from '../assets/girl.png'
import { Box, TextField, Alert } from '@mui/material'
import { motion } from 'framer-motion'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // EmailJS configuration
  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' })
    }
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setMessage({ type: 'error', text: 'Please enter your full name' })
      return false
    }
    if (!formData.email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email' })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' })
      return false
    }
    if (!formData.phoneNumber.trim()) {
      setMessage({ type: 'error', text: 'Please enter your phone number' })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        to_name: 'Mana Of Arta',
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      
      setMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' })
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setMessage({ 
        type: 'error', 
        text: 'Failed to send message. Please try again later or contact us directly.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh', // Changed to minHeight to allow content expansion
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        overflowY: 'auto', // Enable vertical scrolling
        backgroundColor: '#000000',
      }}
    >
      {/* Left Section - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '36%' },
          height: { xs: '35%', sm: '38%', md: '100%' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={girlImage}
          alt="Contact"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        />
      </Box>

      {/* Right Section - Contact Form */}
      <Box
        sx={{
          width: { xs: '100%', md: '64%' },
          height: { xs: '65%', sm: '62%', md: '100%' },
          background: 'radial-gradient(circle at 25% 25%, rgba(0, 160, 100, 0.2) 0%, rgba(0, 0, 0, 0.95) 45%)',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1.25rem 1rem', sm: '1.75rem 1.5rem', md: '2.75rem 2.25rem' }, // Reduced padding for mobile
          overflow: 'hidden',
          position: 'relative',
          justifyContent: 'center',
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem', // Reduced gap for mobile
            maxWidth: { xs: '100%', md: '460px' }, // Full width on mobile
            width: '100%',
          }}
        >
          {/* Title */}
          <Box
            component="h1"
            sx={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: { xs: '24px', sm: '30px', md: '40px' }, // Reduced for mobile
              lineHeight: { xs: 1.2, md: 1.15 },
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: { xs: '0.5rem', md: '0.75rem' }, // Reduced for mobile
              textAlign: 'left',
            }}
          >
            Contact
          </Box>

          {/* Tagline */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem', // Reduced gap for mobile
              marginBottom: { xs: '1rem', md: '1.5rem' }, // Reduced for mobile
            }}
          >
            <Box
              component="p"
              sx={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: { xs: '13px', sm: '15px', md: '18px' }, // Reduced for mobile
                lineHeight: { xs: 1.4, md: 1.35 },
                letterSpacing: '0%',
                color: '#4CAF50',
                margin: 0,
                textAlign: 'left',
              }}
            >
              Time to Reveal Your True Power
            </Box>
            <Box
              component="p"
              sx={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: { xs: '13px', sm: '15px', md: '18px' },
                lineHeight: { xs: 1.4, md: 1.35 },
                letterSpacing: '0%',
                color: '#4CAF50',
                margin: 0,
                textAlign: 'left',
              }}
            >
              Mana Of Arta
            </Box>
          </Box>

          {/* Message Alert */}
          {message.text && (
            <Alert 
              severity={message.type === 'success' ? 'success' : 'error'}
              sx={{
                backgroundColor: message.type === 'success' ? '#4CAF50' : '#f44336',
                color: 'white',
                fontSize: { xs: '12px', md: '14px' }, // Reduced for mobile
                '& .MuiAlert-icon': {
                  color: 'white',
                },
              }}
            >
              {message.text}
            </Alert>
          )}

          {/* Input Fields */}
          <TextField
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            disabled={loading}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                color: 'white',
                minHeight: { xs: '48px', md: '56px' }, // Increased for touch
                '& fieldset': {
                  borderColor: '#333',
                },
                '&:hover fieldset': {
                  borderColor: '#4CAF50',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4CAF50',
                },
                '& input::placeholder': {
                  color: 'white',
                  opacity: 0.7,
                },
              },
              maxWidth: '100%', // Full width on mobile
            }}
          />
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                color: 'white',
                minHeight: { xs: '48px', md: '56px' },
                '& fieldset': {
                  borderColor: '#333',
                },
                '&:hover fieldset': {
                  borderColor: '#4CAF50',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4CAF50',
                },
                '& input::placeholder': {
                  color: 'white',
                  opacity: 0.7,
                },
              },
              maxWidth: '100%',
            }}
          />
          <TextField
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            disabled={loading}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                color: 'white',
                minHeight: { xs: '48px', md: '56px' },
                '& fieldset': {
                  borderColor: '#333',
                },
                '&:hover fieldset': {
                  borderColor: '#4CAF50',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4CAF50',
                },
                '& input::placeholder': {
                  color: 'white',
                  opacity: 0.7,
                },
              },
              maxWidth: '100%',
            }}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            style={{
              background: loading 
                ? '#666' 
                : 'linear-gradient(90deg, #4CAF50 0%, #81C784 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: { xs: '0.75rem 1.5rem', md: '0.85rem 1.75rem' }, // Reduced for mobile
              fontSize: { xs: '14px', md: '16px' }, // Reduced for mobile
              fontWeight: 600,
              fontFamily: 'Calibri, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: { xs: '0.25rem', md: '0.5rem' }, // Reduced for mobile
              minHeight: { xs: '44px', md: '48px' }, // Increased for touch
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'SENDING...' : 'SUBMIT'}
          </motion.button>
        </motion.form>
      </Box>
    </Box>
  )
}

export default ContactPage