import { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion as Motion } from 'framer-motion'
import girlImage from '../assets/girl.png'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // EmailJS configuration
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (message.text) setMessage({ type: '', text: '' })
  }

  const validateForm = () => {
    if (!formData.fullName.trim())
      return setMessage({ type: 'error', text: 'Please enter your full name' })
    if (!formData.email.trim())
      return setMessage({ type: 'error', text: 'Please enter your email' })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return setMessage({ type: 'error', text: 'Please enter a valid email address' })
    if (!formData.phoneNumber.trim())
      return setMessage({ type: 'error', text: 'Please enter your phone number' })
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
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
      setFormData({ fullName: '', email: '', phoneNumber: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later or contact us directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto bg-black text-white">
      {/* Left Image Section */}
      <div className="relative w-full md:w-[36%] h-[35%] sm:h-[38%] md:h-full overflow-hidden">
        <img
          src={girlImage}
          alt="Contact"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Right Section - Contact Form */}
      <div className="relative w-full md:w-[64%] min-h-[65%] sm:min-h-[62%] md:min-h-full bg-[radial-gradient(circle_at_25%_25%,rgba(0,160,100,0.2)_0%,rgba(0,0,0,0.95)_45%)] flex items-center justify-center px-5 md:px-10 py-8">
        <Motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col w-full max-w-sm md:max-w-md px-1 md:px-0"
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Contact</h1>
          <p className="text-green-400 text-sm md:text-base leading-snug mb-1">Time to Reveal Your True Power</p>
          <p className="text-green-400 text-sm md:text-base mb-6">Mana Of Arta</p>

          {/* Message Alert */}
          {message.text && (
            <div
              className={`text-sm text-center px-3 py-2 mb-4 rounded-md ${
                message.type === 'success' ? 'bg-green-500/80' : 'bg-red-500/80'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Input Fields */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            disabled={loading}
            className="w-full bg-[#101010]/90 text-white placeholder-white/70 border border-[#333] rounded-lg px-3 py-3 mb-3 focus:border-green-500 outline-none transition-all text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className="w-full bg-[#101010]/90 text-white placeholder-white/70 border border-[#333] rounded-lg px-3 py-3 mb-3 focus:border-green-500 outline-none transition-all text-sm"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={loading}
            className="w-full bg-[#101010]/90 text-white placeholder-white/70 border border-[#333] rounded-lg px-3 py-3 mb-5 focus:border-green-500 outline-none transition-all text-sm"
          />

          {/* Submit Button */}
          <Motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.03 } : {}}
            whileTap={!loading ? { scale: 0.97 } : {}}
            className={`w-full text-center rounded-lg font-semibold uppercase tracking-wider py-3 transition-all duration-300 ${
              loading
                ? 'bg-gray-600 cursor-not-allowed opacity-70'
                : 'bg-gradient-to-r from-green-500 to-green-400 hover:shadow-[0_0_15px_rgba(0,255,100,0.4)]'
            }`}
          >
            {loading ? 'SENDING...' : 'SUBMIT'}
          </Motion.button>
        </Motion.form>
      </div>
    </div>
  )
}
