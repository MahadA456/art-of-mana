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
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden',
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
          padding: { xs: '1.75rem 1.25rem', sm: '2.25rem 1.75rem', md: '2.75rem 2.25rem' },
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
            gap: '1.25rem',
            maxWidth: '460px',
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
              fontSize: { xs: '30px', sm: '36px', md: '40px' },
              lineHeight: 1.15,
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: '0.75rem',
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
              gap: '0.35rem',
              marginBottom: '1.5rem',
            }}
          >
            <Box
              component="p"
              sx={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: { xs: '15px', sm: '17px', md: '18px' },
                lineHeight: 1.35,
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
                fontSize: { xs: '15px', sm: '17px', md: '18px' },
                lineHeight: 1.35,
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
              padding: '0.85rem 1.75rem',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: 'Calibri, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '0.5rem',
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

