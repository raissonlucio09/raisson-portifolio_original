import { CheckCircle, Clock } from "lucide-react";

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: "completed" | "ongoing";
  description?: string;
  logo?: string;
}

const educationItems: EducationItem[] = [
  {
    id: "hs",
    title: "Ensino Médio Completo",
    institution: "E.E. Ministro Costa Manso",
    period: "Concluído em 2025",
    status: "completed",
    logo: "🏫",
  },
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas (ADS)",
    institution: "UNINOVE",
    period: "2026 - Cursando",
    status: "ongoing",
    description: "Formação superior em desenvolvimento de sistemas",
    logo: "/manus-storage/uninove-logo_6f359e8e.png",
  },
];

const coursesItems: EducationItem[] = [
  {
    id: "senac",
    title: "Assistente de Tecnologia da Informação",
    institution: "SENAC",
    period: "Presencial - Em andamento",
    status: "ongoing",
    logo: "/manus-storage/senac-logo_a2454f05.png",
  },
  {
    id: "google",
    title: "Suporte de TI do Google",
    institution: "CIEE + Google Tech",
    period: "Online - Concluído",
    status: "completed",
    logo: "/manus-storage/google-logo_a01d4ec2.png",
  },
  {
    id: "alura",
    title: "Imersão Dados com Python",
    institution: "Alura",
    period: "Online - Concluído",
    status: "completed",
    logo: "/manus-storage/alura-logo_ec4b90aa.png",
  },
  {
    id: "office",
    title: "Pacote Office 2016",
    institution: "Fundação Bradesco / Escola Virtual",
    period: "Online - Em andamento",
    status: "ongoing",
    description: "Word, Excel e PowerPoint - Básico ao Avançado",
    logo: "/manus-storage/bradesco-logo_6669f1cf.png",
  },
  {
    id: "english",
    title: "Inglês",
    institution: "Cultura Inglesa",
    period: "Presencial - Desde 2024",
    status: "ongoing",
    description: "Nível Intermediário",
    logo: "/manus-storage/cultura-inglesa-logo-new_f456e813.png",
  },
  {
    id: "spanish",
    title: "Espanhol",
    institution: "Autodidata",
    period: "Online - Em andamento",
    status: "ongoing",
    description: "Nível Básico",
    logo: "🇪🇸",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-white">
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
              <div
                key={item.id}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-item bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-16 h-16 flex-shrink-0 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
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
                        <h4 className="text-xl font-bold text-foreground">
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
                      {item.description && (
                        <p className="text-sm text-foreground mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 fade-in-up">
            Cursos & Certificações
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coursesItems.map((item, index) => (
              <div
                key={item.id}
                className="stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div className="w-14 h-14 flex-shrink-0 bg-white border border-border rounded-lg flex items-center justify-center overflow-hidden">
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
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {item.period}
                  </p>
                  {item.description && (
                    <p className="text-sm text-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Idiomas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-foreground">Português</h4>
                <span className="text-sm font-bold text-primary">Nativo</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-foreground">Inglês</h4>
                <span className="text-sm font-bold text-primary">Intermediário</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-foreground">Espanhol</h4>
                <span className="text-sm font-bold text-primary">Básico</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
