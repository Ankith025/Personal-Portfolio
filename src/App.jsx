import React from 'react';
import './App.css';

function App() {

  const projects = [
    {
      title: "AI ENHANCED MICRO ECG",
      type: "Major Project",
      description: "AI-powered ECG signal analysis system using ML to detect cardiac irregularities in real-time, enabling early diagnosis from micro ECG devices.",
      tech: ["Python", "Machine Learning", "Signal Processing"],
      github: "https://github.com/Ankith025/SMART-ECG",
      status: "In Development"
    },
    {
      title: "MOVIE RECOMMENDATION ENGINE",
      type: "Mini Project",
      description: "Genre-based recommendation system with intuitive UI, leveraging recommendation logic to suggest similar films based on user preferences.",
      tech: ["Python", "React", "API Integration"],
      github: "https://github.com/Ankith025/Movie-Overview",
      status: "Completed"
    }
  ];

  const proficientSkills = [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "HTML/CSS", level: "Advanced" },
    { name: "Git/GitHub", level: "Advanced" }
  ];

  const familiarSkills = [
    { name: "C++", note: "DSA Focused" },
    { name: "Node.js", note: "Backend Basics" },
    { name: "MySQL", note: "Database Design" },
    { name: "Machine Learning", note: "TensorFlow / Scikit-learn" }
  ];


  return (
    <div className="app">

      {/* HERO */}
      <section id="hero" className="hero">
        <h1 className="hero-title">Ankith Ganesh</h1>
        <p className="hero-role">Gesix GeoAI Intern</p>
        <p className="hero-description">
          Building intelligent systems at the intersection of AI, Machine Learning, and Web Development.
          Focused on calm, scalable engineering and real-world problem solving.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="cta-primary">View Projects →</a>
          <a href="https://github.com/Ankith025" target="_blank" rel="noopener noreferrer" className="cta-secondary">
            GitHub ↗
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Tech Stack</h2>

        <div className="skills-grid">
          <div>
            <h3>Proficient</h3>
            {proficientSkills.map(skill => (
              <div key={skill.name} className="skill-card">
                {skill.name} <span>{skill.level}</span>
              </div>
            ))}
          </div>

          <div>
            <h3>Familiar</h3>
            {familiarSkills.map(skill => (
              <div key={skill.name} className="skill-card muted">
                {skill.name} <span>{skill.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub">
                View GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
<section className="mb-20 text-center">
  <h2 className="text-2xl font-semibold mb-6">Contact</h2>

  <div className="flex flex-col items-center gap-3 text-[#475569]">

    <a 
      href="mailto:ankithganesh23@gmail.com"
      className="hover:text-[#2563EB] transition"
    >
      <br></br>📧 ankithganesh23@gmail.com
    </a>

    <a 
      href="https://linkedin.com/in/ankith-ganesh"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#2563EB] transition"
    >
    <br></br>💼 linkedin.com/in/ankith-ganesh
    </a>

    <a 
      href="https://github.com/Ankith025"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#2563EB] transition"
    >
     <br></br> 🧠 github.com/Ankith025
    </a>

    <a 
      href="https://www.google.com/maps/search/?api=1&query=Bangalore,India"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#2563EB] transition"
    >
      <br></br>📍 Bangalore, India
    </a>

  </div>
</section>


      <footer>
        © 2026 Ankith Ganesh — Gesix GeoAI Intern
      </footer>

    </div>
  );
}

export default App;
