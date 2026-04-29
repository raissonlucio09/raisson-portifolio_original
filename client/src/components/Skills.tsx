import { useState } from "react";

interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
  proficiency: number;
}

const skills: Skill[] = [
  // Frontend
  { id: "html", name: "HTML5", icon: "🏗️", category: "Frontend", proficiency: 85 },
  { id: "css", name: "CSS3", icon: "🎨", category: "Frontend", proficiency: 80 },
  { id: "js", name: "JavaScript", icon: "⚡", category: "Frontend", proficiency: 75 },

  // Backend
  { id: "python", name: "Python", icon: "🐍", category: "Backend", proficiency: 80 },
  { id: "java", name: "Java", icon: "☕", category: "Backend", proficiency: 70 },

  // Databases
  { id: "sql", name: "SQL", icon: "🗄️", category: "Banco de Dados", proficiency: 78 },
  { id: "sqlite", name: "SQLite", icon: "💾", category: "Banco de Dados", proficiency: 75 },
  { id: "mysql", name: "MySQL", icon: "🐬", category: "Banco de Dados", proficiency: 76 },

  // Tools & Others
  { id: "office", name: "Pacote Office", icon: "📊", category: "Ferramentas", proficiency: 85 },
  { id: "git", name: "Git", icon: "🔧", category: "Ferramentas", proficiency: 70 },
  { id: "api", name: "APIs REST", icon: "🌐", category: "Backend", proficiency: 72 },
];

const categories = ["Frontend", "Backend", "Banco de Dados", "Ferramentas"];

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
              <div className="skill-card glow-effect h-full">
                {/* Icon */}
                <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {skill.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiência</span>
                    <span className="text-sm font-semibold text-primary">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
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
        <div className="mt-16 p-8 bg-white border border-border rounded-xl fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Outras Competências</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">Suporte Técnico</h4>
              <p className="text-muted-foreground">
                Noções de hardware, sistemas operacionais, redes e troubleshooting.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">Inteligência Artificial & Dados</h4>
              <p className="text-muted-foreground">
                Noções de Python, análise de dados e uso de IAs para produtividade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
