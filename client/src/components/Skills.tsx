import { useState } from "react";
import { X } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  logo: string;
  category: string;
  proficiency: number;
  gradientFrom: string;
  gradientTo: string;
  description: string;
}

const skills: Skill[] = [
  // Frontend
  { id: "html", name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Frontend", proficiency: 90, gradientFrom: "from-orange-500", gradientTo: "to-red-500", description: "Estruturação semântica e acessível de páginas web com HTML5" },
  { id: "css", name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "Frontend", proficiency: 85, gradientFrom: "from-blue-400", gradientTo: "to-blue-600", description: "Estilização avançada com Flexbox, Grid e animações suaves" },
  { id: "js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Frontend", proficiency: 80, gradientFrom: "from-yellow-400", gradientTo: "to-yellow-600", description: "Programação interativa, DOM manipulation e ES6+" },

  // Backend
  { id: "python", name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Backend", proficiency: 85, gradientFrom: "from-blue-500", gradientTo: "to-yellow-500", description: "Desenvolvimento backend, APIs REST e automação com Python" },
  { id: "java", name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Backend", proficiency: 75, gradientFrom: "from-blue-600", gradientTo: "to-orange-500", description: "Programação orientada a objetos e aplicações robustas" },
  { id: "api", name: "APIs REST", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", category: "Backend", proficiency: 80, gradientFrom: "from-orange-500", gradientTo: "to-orange-700", description: "Desenvolvimento de APIs escaláveis, documentadas e seguras" },

  // Databases
  { id: "sql", name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "Banco de Dados", proficiency: 85, gradientFrom: "from-blue-600", gradientTo: "to-orange-400", description: "Queries complexas, otimização e modelagem de dados relacionais" },
  { id: "sqlite", name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", category: "Banco de Dados", proficiency: 80, gradientFrom: "from-blue-500", gradientTo: "to-cyan-500", description: "Banco de dados leve para aplicações desktop e mobile" },
  { id: "mysql", name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", category: "Banco de Dados", proficiency: 80, gradientFrom: "from-blue-600", gradientTo: "to-orange-400", description: "Gerenciamento de bancos de dados relacionais em produção" },

  // Libraries
  { id: "pandas", name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", category: "Bibliotecas", proficiency: 80, gradientFrom: "from-blue-600", gradientTo: "to-white", description: "Análise e manipulação de dados com DataFrames" },
  { id: "sklearn", name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", category: "Bibliotecas", proficiency: 75, gradientFrom: "from-orange-400", gradientTo: "to-orange-600", description: "Machine Learning e algoritmos de classificação" },
  { id: "numpy", name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", category: "Bibliotecas", proficiency: 80, gradientFrom: "from-blue-600", gradientTo: "to-cyan-400", description: "Computação numérica e operações com arrays" },

  // Tools
  { id: "office", name: "Pacote Office", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg", category: "Ferramentas", proficiency: 85, gradientFrom: "from-blue-500", gradientTo: "to-green-500", description: "Word, Excel avançado e PowerPoint profissional" },
  { id: "git", name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Ferramentas", proficiency: 75, gradientFrom: "from-orange-600", gradientTo: "to-red-600", description: "Controle de versão e colaboração em projetos" },
];

const categories = ["Frontend", "Backend", "Banco de Dados", "Bibliotecas", "Ferramentas"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Backend");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="habilidades" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico completo para desenvolvimento backend escalável
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up" style={{ animationDelay: "0.1s" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-secondary text-foreground hover:bg-accent/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="stagger-item text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-premium p-6 h-full flex flex-col group cursor-pointer">
                {/* Logo Container */}
                <div className={`mb-6 h-20 flex items-center justify-center bg-gradient-to-br ${skill.gradientFrom} ${skill.gradientTo} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-12 w-auto object-contain filter brightness-0 invert"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Name & Description */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {skill.description}
                </p>

                {/* Proficiency Bar */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground font-semibold">Proficiência</span>
                    <span className="text-sm font-bold text-accent">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.gradientFrom} ${skill.gradientTo} transition-all duration-500`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="mt-4 text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Clique para mais detalhes →
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-border rounded-xl fade-in-up shadow-sm hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">🛠️ Suporte Técnico em TI</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Noções de hardware e componentes de computadores</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Sistemas operacionais (Windows, Linux)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Manutenção de computadores e notebooks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Troubleshooting e resolução de problemas técnicos</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-border rounded-xl fade-in-up shadow-sm hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">🧠 Inteligência Artificial & Dados</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Noções em Python para análise de dados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Bibliotecas: Pandas, NumPy, Scikit-learn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Análise exploratória de dados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Uso de IAs para aumentar produtividade</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes */}
      {selectedSkill && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`text-6xl p-4 bg-gradient-to-br ${selectedSkill.gradientFrom} ${selectedSkill.gradientTo} rounded-xl flex items-center justify-center h-24 w-24`}>
                <img
                  src={selectedSkill.logo}
                  alt={selectedSkill.name}
                  className="h-16 w-auto object-contain filter brightness-0 invert"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {selectedSkill.name}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {selectedSkill.description}
            </p>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-foreground">Nível de Proficiência</span>
                <span className="text-sm font-bold text-accent">{selectedSkill.proficiency}%</span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${selectedSkill.gradientFrom} ${selectedSkill.gradientTo} transition-all duration-500`}
                  style={{ width: `${selectedSkill.proficiency}%` }}
                />
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
