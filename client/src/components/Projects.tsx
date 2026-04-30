import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "biblioteca-api",
    title: "API REST de Biblioteca",
    description:
      "Sistema robusto de gerenciamento de acervo com operações CRUD completas. Desenvolvido com foco em arquitetura profissional, persistência de dados e segurança, seguindo os padrões exigidos pelo mercado backend.",
    technologies: ["Java", "Spring Boot", "JPA", "H2 Database", "Maven"],
    liveUrl: "https://github.com/raissonlucio09/biblioteca-api#readme",
    githubUrl: "https://github.com/raissonlucio09/biblioteca-api",
    images: ["/manus-storage/biblioteca-api-screenshot_default.webp"],
  },
  {
    id: "sg-academia",
    title: "SG Academia",
    description:
      "Sistema completo de gestão de planos e análise de alunos para academias. Dashboard interativo com gráficos em tempo real, gestão de planos, análise de evasão e exportação de dados.",
    technologies: ["Python", "JavaScript", "HTML", "CSS", "SQLite"],
    liveUrl: "https://sg-academia-1.onrender.com/",
    githubUrl: "https://github.com/raissonlucio09",
    images: [
      "/manus-storage/sg-academia-dashboard-final_22b33ccf.webp",
    ],
  },
  {
    id: "criador-senhas",
    title: "Criador de Senhas",
    description:
      "Gerador inteligente de senhas 100% interativo com zero dependências JavaScript. Crie senhas seguras em segundos, ajuste cada detalhe e copie o resultado com um clique.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://raissonlucio09.github.io/criador-de-senhas/",
    githubUrl: "https://github.com/raissonlucio09/criador-de-senhas",
    images: ["/manus-storage/criador-senhas-large_3a57159f.webp"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-lg text-muted-foreground">
            Alguns dos projetos que desenvolvi, demonstrando habilidades em
            frontend, backend e gestão de dados.
          </p>
        </div>

        {/* Projects List - Vertical */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Content */}
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images */}
                <div
                  className={
                    project.images.length === 1
                      ? "mb-8"
                      : "grid md:grid-cols-2 gap-6 mb-8"
                  }
                >
                  {project.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden border border-border bg-muted"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Screenshot ${idx + 1}`}
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    <ExternalLink size={20} />
                    Acessar projeto
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
                    >
                      <Github size={20} />
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
