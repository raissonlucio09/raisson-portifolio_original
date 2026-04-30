import { ArrowRight, Download, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [imageExpanded, setImageExpanded] = useState(false);

  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="fade-in-up">
            <div className="mb-4 inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                📍 Morumbi – São Paulo, SP
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Raisson Lúcio da Silva
              <span className="block text-primary">Desenvolvedor Backend</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              18 anos, São Paulo. Apaixonado por lógica de programação, APIs e
              bancos de dados. Busco minha primeira oportunidade como
              desenvolvedor backend, comprometido em aprender novas tecnologias
              e entregar soluções escaláveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                Entre em contato
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Baixar CV
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <a
                href="https://maps.google.com/?q=Paraisópolis,+Morumbi,+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors cursor-pointer group"
              >
                <p className="text-sm text-muted-foreground group-hover:text-primary">📍 Localização</p>
                <p className="font-semibold text-foreground group-hover:text-primary">Paraisópolis, Morumbi</p>
              </a>
              <a
                href="tel:+5511951521581"
                className="hover:text-primary transition-colors cursor-pointer group"
              >
                <p className="text-sm text-muted-foreground group-hover:text-primary">📞 Telefone</p>
                <p className="font-semibold text-foreground group-hover:text-primary">(11) 95152-1581</p>
              </a>
              <a
                href="mailto:lucioraisson09@gmail.com"
                className="hover:text-primary transition-colors cursor-pointer group"
              >
                <p className="text-sm text-muted-foreground group-hover:text-primary">📧 Email</p>
                <p className="font-semibold text-foreground group-hover:text-primary">lucioraisson09@gmail.com</p>
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative fade-in-up" style={{ animationDelay: "0.2s" }}>
            <button
              onClick={() => setImageExpanded(true)}
              className="relative w-full aspect-square max-w-sm mx-auto group cursor-pointer"
            >
              {/* Decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300" />
              <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="/manus-storage/raisson-photo_c76befea.png"
                  alt="Raisson Lúcio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border-4 border-primary rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">18</p>
                  <p className="text-xs font-semibold text-foreground">Anos</p>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
                  Clique para ampliar
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal - Imagem Ampliada */}
      {imageExpanded && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setImageExpanded(false)}
        >
          <div
            className="relative max-w-2xl w-full fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImageExpanded(false)}
              className="absolute -top-12 right-0 text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src="/manus-storage/raisson-photo_c76befea.png"
              alt="Raisson Lúcio - Ampliado"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
