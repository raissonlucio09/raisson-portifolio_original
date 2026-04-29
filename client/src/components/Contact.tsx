import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou aberto a novas oportunidades e desafios. Vamos conversar!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="skill-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:lucioraisson09@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                lucioraisson09@gmail.com
              </a>
            </div>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="skill-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Telefone</h3>
              <a
                href="tel:+5511951521581"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (11) 95152-1581
              </a>
            </div>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="skill-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Localização</h3>
              <p className="text-muted-foreground">Morumbi, São Paulo - SP</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-16 text-center fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-bold text-foreground mb-6">Conecte-se comigo</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-foreground text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
                  ✓ Mensagem enviada com sucesso! Obrigado por entrar em contato.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
