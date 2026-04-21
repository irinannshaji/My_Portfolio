import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'alex@example.com' },
  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0183' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-28 bg-gray-900 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind or want to chat? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-5 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.div className="md:col-span-2 flex flex-col justify-between" variants={itemVariants}>
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">Contact Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                I'm currently open to freelance and full-time opportunities. Let's talk about
                how I can help you build something great.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    custom={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                    >
                      <Icon size={18} />
                    </motion.div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                      <p className="text-gray-200 text-sm font-medium">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 backdrop-blur-md"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <p className="text-teal-400 font-semibold text-sm mb-2">Response Time</p>
              <p className="text-gray-300 text-2xl font-bold mb-1">Under 24h</p>
              <p className="text-gray-500 text-sm">I respond to all messages promptly.</p>
            </motion.div>
          </motion.div>

          <motion.div className="md:col-span-3" variants={itemVariants}>
            {submitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-gray-950/50 border border-teal-500/20 rounded-2xl backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="text-teal-400" size={32} />
                </motion.div>
                <h3 className="text-white font-bold text-2xl mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <motion.button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-6 py-3 rounded-xl border border-white/10 text-gray-400 text-sm hover:text-white hover:border-white/20 transition-all backdrop-blur-sm"
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-950/50 border border-white/5 rounded-2xl p-8 space-y-5 backdrop-blur-md"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
                    <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                    <motion.input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all backdrop-blur-sm"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}>
                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                    <motion.input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all backdrop-blur-sm"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <motion.input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Freelance work"
                    className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all backdrop-blur-sm"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <motion.textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all resize-none backdrop-blur-sm"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-gray-950/30 border-t-gray-950 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
