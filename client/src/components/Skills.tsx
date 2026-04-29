import { useState } from "react";

interface Skill {
  id: string;
  name: string;
  logo: string;
  category: string;
  proficiency: number;
  gradientFrom: string;
  gradientTo: string;
}

const skills: Skill[] = [
  // Frontend
  { id: "html", name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Frontend", proficiency: 85, gradientFrom: "from-orange-500", gradientTo: "to-red-500" },
  { id: "css", name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "Frontend", proficiency: 80, gradientFrom: "from-blue-400", gradientTo: "to-blue-600" },
  { id: "js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Frontend", proficiency: 75, gradientFrom: "from-yellow-400", gradientTo: "to-yellow-600" },

  // Backend
  { id: "python", name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Backend", proficiency: 80, gradientFrom: "from-blue-500", gradientTo: "to-yellow-500" },
  { id: "java", name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Backend", proficiency: 70, gradientFrom: "from-blue-600", gradientTo: "to-orange-500" },

  // Databases
  { id: "sql", name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "Banco de Dados", proficiency: 78, gradientFrom: "from-blue-600", gradientTo: "to-orange-400" },
  { id: "sqlite", name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", category: "Banco de Dados", proficiency: 75, gradientFrom: "from-blue-500", gradientTo: "to-cyan-500" },
  { id: "mysql", name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", category: "Banco de Dados", proficiency: 76, gradientFrom: "from-blue-600", gradientTo: "to-orange-400" },

  // APIs & Tools
  { id: "api", name: "APIs REST", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", category: "Ferramentas", proficiency: 72, gradientFrom: "from-orange-500", gradientTo: "to-orange-700" },
  { id: "git", name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Ferramentas", proficiency: 70, gradientFrom: "from-orange-600", gradientTo: "to-red-600" },
  { id: "office", name: "Pacote Office", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg", category: "Ferramentas", proficiency: 85, gradientFrom: "from-blue-500", gradientTo: "to-green-500" },

  // Libraries
  { id: "pandas", name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", category: "Bibliotecas", proficiency: 75, gradientFrom: "from-blue-600", gradientTo: "to-white" },
  { id: "sklearn", name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", category: "Bibliotecas", proficiency: 70, gradientFrom: "from-orange-400", gradientTo: "to-orange-600" },
  { id: "numpy", name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", category: "Bibliotecas", proficiency: 72, gradientFrom: "from-blue-600", gradientTo: "to-cyan-400" },
];

const categories = ["Frontend", "Backend", "Banco de Dados", "Ferramentas", "Bibliotecas"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Backend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domínio em múltiplas tecnologias e ferramentas para desenvolvimento
            backend escalável
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
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-card glow-effect h-full flex flex-col">
                {/* Logo */}
                <div className="mb-4 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {skill.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="mb-4 flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiência</span>
                    <span className="text-sm font-semibold text-primary">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.gradientFrom} ${skill.gradientTo} transition-all duration-500`}
                      style={{
                        width: hoveredSkill === skill.id ? "100%" : `${skill.proficiency}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-border rounded-xl fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Suporte Técnico em TI</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Noções de hardware e componentes de computadores</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Sistemas operacionais (Windows, Linux)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Manutenção de computadores e notebooks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Troubleshooting e resolução de problemas técnicos</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-border rounded-xl fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Inteligência Artificial & Dados</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Noções em Python para análise de dados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Bibliotecas: Pandas, NumPy, Scikit-learn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Análise exploratória de dados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Uso de IAs para aumentar produtividade</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
