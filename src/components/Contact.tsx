import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'irinannshaji445@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9633344964' },
    { icon: MapPin, label: 'Location', value: 'Kerala,India' },
  ];

  return (
    <section id="contact" className="py-28 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind or want to chat? I'd love to hear from you.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-5 gap-10 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">Contact Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                I'm currently open to freelance and full-time opportunities. Let's talk about
                how I can help you build something great.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                      <p className="text-gray-200 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
              <p className="text-teal-400 font-semibold text-sm mb-2">Response Time</p>
              <p className="text-gray-300 text-2xl font-bold mb-1">Under 24h</p>
              <p className="text-gray-500 text-sm">I respond to all messages promptly.</p>
            </div>
          </div>

          <div className="md:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-gray-950/50 border border-teal-500/20 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="text-teal-400" size={32} />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-8 px-6 py-3 rounded-xl border border-white/10 text-gray-400 text-sm hover:text-white hover:border-white/20 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-950/50 border border-white/5 rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Freelance work"
                    className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-gray-800 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-950/30 border-t-gray-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
