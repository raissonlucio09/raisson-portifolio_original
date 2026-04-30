import { CheckCircle, Clock, X } from "lucide-react";
import { useState } from "react";

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: "completed" | "ongoing";
  description?: string;
  logo?: string;
  details?: string;
}

const educationItems: EducationItem[] = [
  {
    id: "hs",
    title: "Ensino Médio Completo",
    institution: "E.E. Ministro Costa Manso",
    period: "Concluído em 2025",
    status: "completed",
    logo: "🏫",
    details: "Formação completa no ensino médio com foco em disciplinas de exatas e tecnologia",
  },
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas (ADS)",
    institution: "UNINOVE",
    period: "2026 - Cursando",
    status: "ongoing",
    description: "Formação superior em desenvolvimento de sistemas",
    logo: "/manus-storage/uninove-logo_6f359e8e.png",
    details: "Curso superior de tecnologia com foco em desenvolvimento backend, bancos de dados e arquitetura de sistemas",
  },
];

const coursesItems: EducationItem[] = [
  {
    id: "senac",
    title: "Assistente de Tecnologia da Informação",
    institution: "SENAC",
    period: "Presencial - Em andamento",
    status: "ongoing",
    logo: "/manus-storage/senac-logo-new_a48ca70c.jpg",
    details: "Formação profissional em suporte técnico, hardware, redes e sistemas operacionais",
  },
  {
    id: "google",
    title: "Suporte de TI do Google",
    institution: "CIEE + Google Tech",
    period: "Online - Concluído",
    status: "completed",
    logo: "/manus-storage/google-logo_a01d4ec2.png",
    details: "Certificação profissional em suporte técnico de TI pela Google com CIEE",
  },
  {
    id: "alura",
    title: "Imersão Dados com Python",
    institution: "Alura",
    period: "Online - Concluído",
    status: "completed",
    logo: "/manus-storage/alura-logo_ec4b90aa.png",
    details: "Imersão intensiva em análise de dados com Python, Pandas e visualização",
  },
  {
    id: "office",
    title: "Pacote Office 2016",
    institution: "Fundação Bradesco / Escola Virtual",
    period: "Online - Em andamento",
    status: "ongoing",
    description: "Word, Excel e PowerPoint - Básico ao Avançado",
    logo: "/manus-storage/bradesco-logo_6669f1cf.png",
    details: "Curso completo do Pacote Office com foco em Excel avançado para análise de dados",
  },
  {
    id: "english",
    title: "Inglês",
    institution: "Cultura Inglesa",
    period: "Presencial - Desde 2024",
    status: "ongoing",
    description: "Nível Intermediário",
    logo: "/manus-storage/cultura-inglesa-logo-new_f456e813.png",
    details: "Aulas presenciais de inglês com foco em comunicação profissional e técnica",
  },
];

// SVG Flag Components
const BrazilFlag = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#009C3B" rx="3"/>
    <polygon points="12,5 19,12 12,19 5,12" fill="#FFCC00"/>
    <circle cx="12" cy="12" r="3.5" fill="#002776"/>
  </svg>
);

const USAFlag = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#B22234" rx="3"/>
    <rect y="3" width="24" height="3" fill="white"/>
    <rect y="9" width="24" height="3" fill="white"/>
    <rect y="15" width="24" height="3" fill="white"/>
    <rect y="21" width="24" height="3" fill="white"/>
    <rect width="9" height="12" fill="#3C3B6B" rx="1"/>
  </svg>
);

const SpainFlag = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#FFC400" rx="3"/>
    <rect y="8" width="24" height="8" fill="#C60B1E"/>
  </svg>
);

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<EducationItem | null>(null);

  return (
    <section id="formacao" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educação contínua e desenvolvimento profissional
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 fade-in-up">
            Educação Formal
          </h3>
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedEducation(item)}
                className="fade-in-up w-full text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-premium p-6 hover:border-primary/50 hover:shadow-md group cursor-pointer transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      {typeof item.logo === "string" && item.logo.startsWith("/") ? (
                        <img
                          src={item.logo}
                          alt={item.institution}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="text-3xl">{item.logo}</span>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          {item.status === "completed" ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <Clock className="w-5 h-5 text-primary" />
                          )}
                          <span
                            className={`text-sm font-semibold ${
                              item.status === "completed"
                                ? "text-green-600"
                                : "text-primary"
                            }`}
                          >
                            {item.status === "completed" ? "Concluído" : "Em andamento"}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground font-medium mb-1">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.period}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Clique para mais detalhes →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 fade-in-up">
            Cursos & Certificações
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coursesItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedCourse(item)}
                className="stagger-item text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-premium p-6 hover:border-primary/50 hover:shadow-md group cursor-pointer h-full transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      {typeof item.logo === "string" && item.logo.startsWith("/") ? (
                        <img
                          src={item.logo}
                          alt={item.institution}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="text-2xl">{item.logo}</span>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {item.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-primary" />
                        )}
                        <span
                          className={`text-xs font-semibold ${
                            item.status === "completed"
                              ? "text-green-600"
                              : "text-primary"
                          }`}
                        >
                          {item.status === "completed" ? "Concluído" : "Em andamento"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {item.period}
                  </p>
                  {item.description && (
                    <p className="text-sm text-foreground mb-3">
                      {item.description}
                    </p>
                  )}
                  <div className="text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Clique para mais detalhes →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-slate-50 border border-border rounded-xl fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold text-foreground mb-8">Idiomas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Portuguese */}
            <div className="card-premium p-6 group hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <BrazilFlag />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Português</h4>
                  <p className="text-xs text-muted-foreground">Nativo</p>
                </div>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-green-600 via-yellow-400 to-blue-600 group-hover:shadow-lg transition-shadow duration-300" />
              </div>
            </div>

            {/* English */}
            <div className="card-premium p-6 group hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <USAFlag />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Inglês</h4>
                  <p className="text-xs text-muted-foreground">Intermediário</p>
                </div>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-red-600 via-white to-blue-600 group-hover:shadow-lg transition-shadow duration-300" />
              </div>
            </div>

            {/* Spanish */}
            <div className="card-premium p-6 group hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <SpainFlag />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Espanhol</h4>
                  <p className="text-xs text-muted-foreground">Básico</p>
                </div>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-yellow-400 to-red-600 group-hover:shadow-lg transition-shadow duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Education */}
      {selectedEducation && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEducation(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center overflow-hidden">
                {typeof selectedEducation.logo === "string" && selectedEducation.logo.startsWith("/") ? (
                  <img
                    src={selectedEducation.logo}
                    alt={selectedEducation.institution}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <span className="text-4xl">{selectedEducation.logo}</span>
                )}
              </div>
              <button
                onClick={() => setSelectedEducation(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {selectedEducation.title}
            </h3>
            <p className="text-primary font-semibold mb-4">{selectedEducation.institution}</p>
            <p className="text-muted-foreground mb-4">{selectedEducation.period}</p>
            <p className="text-foreground mb-6 leading-relaxed">
              {selectedEducation.details || selectedEducation.description}
            </p>
            <button
              onClick={() => setSelectedEducation(null)}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal - Courses */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center overflow-hidden">
                {typeof selectedCourse.logo === "string" && selectedCourse.logo.startsWith("/") ? (
                  <img
                    src={selectedCourse.logo}
                    alt={selectedCourse.institution}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <span className="text-4xl">{selectedCourse.logo}</span>
                )}
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {selectedCourse.title}
            </h3>
            <p className="text-primary font-semibold mb-4">{selectedCourse.institution}</p>
            <p className="text-muted-foreground mb-4">{selectedCourse.period}</p>
            <p className="text-foreground mb-6 leading-relaxed">
              {selectedCourse.details || selectedCourse.description}
            </p>
            <button
              onClick={() => setSelectedCourse(null)}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
