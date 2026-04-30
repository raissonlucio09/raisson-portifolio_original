import { useState } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  images: string[];
  codeDescription: string;
}

const projects: Project[] = [
  {
    id: "sg-academia",
    title: "SG Academia",
    description:
      "Sistema completo de gestão de planos e análise de alunos para academias. Desenvolvido com foco em experiência do usuário e funcionalidades robustas de gerenciamento.",
    technologies: ["JavaScript", "HTML5", "CSS3", "APIs"],
    liveUrl: "https://sg-academia-1.onrender.com/",
    codeDescription:
      "Dashboard interativo com gráficos em tempo real, gestão de planos de alunos, análise de evasão (churn), filtros avançados e exportação de dados em CSV/Excel.",
    images: [
      "/manus-storage/sg-academia-dashboard_681af435.webp",
      "/manus-storage/sg-academia-cadastro_95230147.webp",
    ],
  },
  {
    id: "criador-senhas",
    title: "Criador de Senhas",
    description:
      "Gerador inteligente de senhas 100% interativo com zero dependências JavaScript. Ferramenta de produtividade que cria senhas seguras em segundos.",
    technologies: ["JavaScript Puro", "HTML5", "CSS3"],
    liveUrl: "https://raissonlucio09.github.io/criador-de-senhas/",
    githubUrl: "https://github.com/raissonlucio09/criador-de-senhas",
    codeDescription:
      "Aplicação frontend pura com geração de senhas customizáveis, indicador de força em tempo real, cópia com um clique, e interface responsiva.",
    images: [
      "/manus-storage/criador-senhas-1_6ec1b9a0.webp",
      "/manus-storage/criador-senhas-2_f9484f22.webp",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const selectedData = projects.find((p) => p.id === selectedProject);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando habilidades em
            frontend, backend e gestão de dados.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Ver ao vivo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {selectedData && (
          <div className="bg-card rounded-xl border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Left: Images */}
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={selectedData.images[0]}
                    alt={`${selectedData.title} - Screenshot 1`}
                    className="w-full h-auto"
                  />
                </div>
                {selectedData.images[1] && (
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img
                      src={selectedData.images[1]}
                      alt={`${selectedData.title} - Screenshot 2`}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>

              {/* Right: Details */}
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {selectedData.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedData.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Code Description */}
                <div className="mb-8 p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <Code2 className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Sobre o código
                      </h4>
                      <p className="text-muted-foreground">
                        {selectedData.codeDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3">
                    Tecnologias utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selectedData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    <ExternalLink size={20} />
                    Acessar projeto
                  </a>
                  {selectedData.githubUrl && (
                    <a
                      href={selectedData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
                    >
                      <Github size={20} />
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
