import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const skills = [
    "React", "Node.js", "Next.js", "TypeScript", "MongoDB", "Docker"
  ];

  const projects = [
    {
      title: "Employee Management System",
      desc: "Role-based dashboards - CRUD operations with backend integration.",
      tech: ["Next.js", "Node", "MongoDB"],
      live: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      desc: "Real-time chat app wi Docker setup and scalable backend",
      tech: ["TypeScript", "WebSockets", "Docker"],
      live: "#",
      github: "https://github.com/ankur0704/chatapp.git",
    },
    {
      title: "AI Nutrition Recommender",
      desc: "Personalized diet recommendations using AI logic and meal planning",
      tech: ["AI/ML", "Python"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-gray-800 selection:text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center">
        {/* Profile Placeholder/Image */}
        <div className="w-32 h-32 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-8 overflow-hidden">
          {/* <img src="/your-photo.jpg" alt="Ankur Sonavane" className="w-full h-full object-cover" /> */}
          <span className="text-2xl font-semibold text-gray-400">AS</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Ankur Sonavane
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Computer Engineering Student • MERN Stack Developer • AI Enthusiast
        </p>

        <div className="flex gap-4 mb-8">
          <Link
            href="#projects"
            className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            className="px-6 py-2.5 border border-gray-700 bg-gray-900/50 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="https://github.com/" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <span className="text-gray-700">•</span>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-white transition-colors">Linkedin</a>
          <span className="text-gray-700">•</span>
          <a href="mailto:ankur@email.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-gray-900 my-8"></div>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">About</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          I'm Ankur Sonavane, a Computer Engineering student passionate about
          building full-stack web applications and exploring AI projects.
        </p>
        <div className="flex justify-center flex-wrap gap-2 mt-6">
          {["React", "Node.js", "Next.js", "TypeScript", "MongoDB", "Docker"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-xs text-gray-400">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-gray-900 my-8"></div>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 items-center text-lg text-gray-300 font-medium">
          <span>React</span> <span className="text-gray-700">•</span>
          <span>Node.js</span> <span className="text-gray-700">•</span>
          <span>Next.js</span> <span className="text-gray-700">•</span>
          <span>TypeScript</span> <span className="text-gray-700">•</span>
          <span>MongoDB</span> <span className="text-gray-700">•</span>
          <span>Docker</span>
        </div>
      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-gray-900 my-8"></div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-white mb-12">Projects</h2>

        <div className="space-y-12">
          {projects.map((p) => (
            <div key={p.title} className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <div className="flex gap-3">
                  <a href={p.live} className="px-3 py-1 border border-gray-700 rounded text-xs text-gray-300 hover:bg-gray-800 transition">Live</a>
                  <a href={p.github} className="px-3 py-1 border border-gray-700 rounded text-xs text-gray-300 hover:bg-gray-800 transition">GitHub</a>
                </div>
              </div>
              <p className="text-gray-400 mb-2">{p.desc}</p>
              <div className="flex gap-3 text-sm text-gray-500">
                {p.tech.map((t, i) => (
                  <span key={t}>{t}{i < p.tech.length - 1 ? ',' : ''}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-gray-900 my-8"></div>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-400 mb-8">Let's build something together.</p>
        <a
          href="mailto:ankur@email.com"
          className="px-6 py-3 border border-gray-700 bg-gray-900/50 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Email Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-sm py-8 border-t border-gray-900">
        <p>© {new Date().getFullYear()} Ankur Sonavane • Built with Next.js</p>
      </footer>
    </main>
  );
}

