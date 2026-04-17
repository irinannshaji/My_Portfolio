import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

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

  // ✅ UPDATED HANDLE SUBMIT (EmailJS)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_h8w8xt9', // ✅ your Service ID
      'template_85jly2k', // 🔴 replace with your template ID
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      'ZA_YZF5qmccNhGPNU' // 🔴 replace with your public key
    )
    .then(() => {
      setSubmitted(true);
      setSending(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSending(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'irinannshaji445@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9633344964' },
    { icon: MapPin, label: 'Location', value: 'Kerala, India' },
  ];

  return (
    <section id="contact" className="py-28 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

        <div className={`grid md:grid-cols-5 gap-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* LEFT SIDE */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">Contact Information</h3>
              <p className="text-gray-400 text-sm mb-8">
                I'm currently open to freelance and full-time opportunities.
              </p>

              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="text-gray-200 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="text-center p-12 bg-gray-950/50 border border-teal-500/20 rounded-2xl">
                <CheckCircle className="text-teal-400 mx-auto mb-4" size={40} />
                <h3 className="text-white text-2xl mb-2">Message Sent!</h3>
                <p className="text-gray-400">I’ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-950/50 p-8 rounded-2xl space-y-5">
                
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 text-white"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 text-white"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 text-white"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 bg-teal-500 text-black rounded-xl"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}