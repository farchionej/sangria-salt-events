import React, { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Replace with your Web3Forms access key from https://web3forms.com/
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  message: ''
};

export const InquirySection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Event Inquiry from ${formData.name}`,
          from_name: 'Sangria & Salt Website',
          to: 'EMAIL@SANGRIAANDSALT.COM',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          event_type: formData.eventType,
          event_date: formData.eventDate || 'Flexible',
          guest_count: formData.guestCount,
          message: formData.message || 'No additional message',
          // Honeypot field - bots will fill this, humans won't see it
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData(initialFormData);

        // Track conversion in Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: formData.eventType,
            value: formData.guestCount,
          });
        }
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const inputBaseStyles = "w-full bg-white/5 border border-stone-700 text-white placeholder-stone-500 px-4 py-3.5 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all duration-200";
  const labelStyles = "block text-sm font-medium text-stone-300 mb-2 tracking-wide";

  return (
    <section id="inquire" className="py-24 bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold-500 font-bold tracking-[0.25em] uppercase text-sm mb-4 block">
              Start Planning
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Reserve Your Event
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Tell us about your vision. Our events team will respond within 24 hours
              to discuss availability and custom packages.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 p-8 md:p-12 shadow-2xl">

            {status === 'success' ? (
              /* Success State */
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="font-serif text-3xl text-white mb-4">Thank You!</h3>
                <p className="text-stone-400 mb-8 max-w-md mx-auto">
                  Your inquiry has been received. Our events team will be in touch within 24 hours
                  to discuss your event.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-gold-500 hover:text-gold-400 font-medium tracking-wide transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Hidden honeypot field for spam prevention */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelStyles}>
                      Full Name <span className="text-sangria-800">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputBaseStyles}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelStyles}>
                      Email Address <span className="text-sangria-800">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputBaseStyles}
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Event Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className={labelStyles}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(415) 555-0123"
                      className={inputBaseStyles}
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className={labelStyles}>
                      Event Type <span className="text-sangria-800">*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className={`${inputBaseStyles} appearance-none cursor-pointer`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a8a29e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                    >
                      <option value="" disabled>Select event type</option>
                      <option value="Corporate Buyout">Corporate Buyout (up to 250)</option>
                      <option value="Holiday Party">Holiday Party</option>
                      <option value="Team Celebration">Team Celebration</option>
                      <option value="Private Dining">Private Dining</option>
                      <option value="Cocktail Reception">Cocktail Reception</option>
                      <option value="Product Launch">Product Launch</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Date & Guest Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className={labelStyles}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`${inputBaseStyles} cursor-pointer`}
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className={labelStyles}>
                      Estimated Guests <span className="text-sangria-800">*</span>
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      required
                      value={formData.guestCount}
                      onChange={handleChange}
                      className={`${inputBaseStyles} appearance-none cursor-pointer`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a8a29e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                    >
                      <option value="" disabled>Select guest count</option>
                      <option value="20-50">20-50 guests</option>
                      <option value="50-100">50-100 guests</option>
                      <option value="100-150">100-150 guests</option>
                      <option value="150-200">150-200 guests</option>
                      <option value="200-250">200-250 guests</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label htmlFor="message" className={labelStyles}>
                    Tell Us More
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share any details about your event vision, special requests, or questions..."
                    className={`${inputBaseStyles} resize-none`}
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded">
                    <AlertCircle size={20} />
                    <span className="text-sm">{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-sangria-900 hover:bg-sangria-800 disabled:bg-stone-700 text-white font-bold tracking-widest uppercase px-12 py-4 transition-all duration-300 group disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Indicators */}
                <p className="text-stone-600 text-xs text-center md:text-left pt-2">
                  By submitting, you agree to be contacted about your event.
                  We respect your privacy and never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact Alternative */}
          <div className="mt-12 text-center">
            <p className="text-stone-500 text-sm">
              Prefer to talk? Call us at{' '}
              <a href="tel:+14155550123" className="text-gold-500 hover:text-gold-400 transition-colors">
                (415) 555-0123
              </a>
              {' '}or email{' '}
              <a href="mailto:events@sangriaandsalt.com" className="text-gold-500 hover:text-gold-400 transition-colors">
                events@sangriaandsalt.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
