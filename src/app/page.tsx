import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import Skills from "@/components/Skills";
import React from "react";
import { Router } from "lucide-react";

export default function Home() {


  const projects = [
    {
      title: "AI Resume Analyzer",
      desc: `AI Resume Analyzer is an intelligent tool built using modern web technologies. 
      It utilizes React, Node.js, and MongoDB to provide seamless authentication, resume uploading, 
      and analyzes candidates against job descriptions using smart AI evaluations.`,
      tech: ["React, React Router, Puter.js, Tailwind CSS, Zustand"],
      live: "#",
      github: "https://github.com/ankur0704/ai-resume-analyzer",
    },
    {
      title: "Chat Application",
      desc: "Real-time chat app wi Docker setup and scalable backend",
      tech: ["TypeScript", "WebSockets", "Docker"],
      live: "#",
      github: "https://github.com/ankur0704/chatapp.git",
    },
    {
      title: "Chat App",
      desc: `Built a scalable real-time chat app (MERN stack + WebSockets) supporting secure user auth and instant
             messaging for 100+ concurrent users. It supports user authentication, secure messaging, and instant
             communication powered by WebSockets.`,
      tech: ["React, TailwindCSS, Vite, TypeScript, Node.js + Express.js, MongoDB, JWT, Socket.IO."],
      live: "#",
      github: "https://github.com/ankur0704/chatapp",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gray-800 selection:text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center">
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        {/* Profile Placeholder/Image */}
        <div className="w-32 h-32 square bg-gray-800 border border-gray-700 flex items-center justify-center mb-8 overflow-hidden">
          <img src="/logo.jpg" alt="Ankur Sonavane" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-4xl md:text-5xl mb-4 ">
          Ankur Sonavane
        </h1>
        <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
          Computer Engineering Student | Full Stack Dev
        </p>

        <div className="flex gap-4 mb-8">
          <Link
            href="#projects"
            className="px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            className="px-6 py-2.5 border border-border bg-background/50 text-foreground text-sm font-medium rounded-lg hover:bg-muted/10 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <SocialLinks />
      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-border my-4"></div>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-6">About</h2>
        <p className="text-muted leading-relaxed text-lg">
          I'm Ankur Sonavane, a Computer Engineering student passionate about
          building full-stack web applications and exploring AI projects.
          Open to work and upscale.
        </p>

      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-gray-900 my-4"></div>

      {/* SKILLS SECTION */}
      <section id="sklls" className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-12">Skills</h2>
        <Skills />
      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-gray-900 my-4"></div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-foreground mb-12">Projects</h2>

        <div className="space-y-12">
          {projects.map((p) => (
            <div key={p.title} className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <div className="flex gap-3">
                  <a href={p.live} className="px-3 py-1 border border-border rounded text-xs text-muted hover:bg-muted/10 transition">Live</a>
                  <a href={p.github} className="px-3 py-1 border border-border rounded text-xs text-muted hover:bg-muted/10 transition">GitHub</a>
                </div>
              </div>
              <p className="text-muted mb-2">{p.desc}</p>
              <div className="flex gap-3 text-sm text-gray-500">
                {p.tech.map((t, i) => (
                  <span key={t}>{t}{i < p.tech.length - 1 ? ',' : ''}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full max-w-2xl mx-auto border-t border-gray-900 my-4"></div>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
        <p className="text-muted mb-8">Let's build something together.</p>
        <a
          href="mailto:sonavaneankur@gmail.com"
          className="px-6 py-3 border border-border bg-background/50 text-foreground font-medium rounded-lg hover:bg-muted/10 transition-colors"
        >
          Email Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-muted text-sm py-8 border-t border-border">
        <p>© {new Date().getFullYear()} Ankur Sonavane | All rights reserved</p>
      </footer>
    </main>
  );
}

