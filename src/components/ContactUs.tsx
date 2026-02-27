import { useState } from 'react';
import { Mail, Shield, Lock, CheckCircle, AlertCircle, Send } from 'lucide-react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    complianceInterest: 'soc2'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate secure form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        complianceInterest: 'soc2'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-quant-bg text-slate-100">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-400">
            Get expert guidance on SOC 2 compliance and Vercel security
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-quant-surface border border-quant-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-accent mr-3" />
                <h2 className="text-xl font-semibold text-slate-100">
                  Secure Contact Form
                </h2>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-green-400">Your message has been sent securely. We'll respond within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <p className="text-red-400">There was an error sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-quant-bg border border-quant-border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-quant-bg border border-quant-border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-quant-bg border border-quant-border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="complianceInterest" className="block text-sm font-medium text-slate-300 mb-2">
                    Compliance Interest *
                  </label>
                  <select
                    id="complianceInterest"
                    name="complianceInterest"
                    required
                    value={formData.complianceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-quant-bg border border-quant-border rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="soc2">SOC 2 Compliance</option>
                    <option value="iso27001">ISO 27001</option>
                    <option value="gdpr">GDPR Compliance</option>
                    <option value="hipaa">HIPAA Compliance</option>
                    <option value="vercel-security">Vercel Security</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-quant-bg border border-quant-border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Tell us about your compliance needs and current setup..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-400">
                    <Lock className="w-4 h-4 mr-2" />
                    <span>256-bit SSL encryption</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Secure Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-quant-surface border border-quant-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-accent" />
                Direct Contact
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-slate-400">
                  <span className="block font-medium text-slate-300">Email:</span>
                  compliance@nexusquant.engine
                </p>
                <p className="text-slate-400">
                  <span className="block font-medium text-slate-300">Response Time:</span>
                  Within 24 hours
                </p>
              </div>
            </div>

            <div className="bg-quant-surface border border-quant-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-accent" />
                Security Commitment
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>SOC 2 Type II certified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>GDPR compliant data handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
