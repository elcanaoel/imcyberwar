import React from 'react';

interface Project {
  title: string;
  description: string;
  tech: string;
  links: {
    live?: string;
    code?: string;
  };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "imcyberwar.vercel.app",
      description: "My Portfolio Website",
      tech: "React + TypeScript + SASS",
      links: { live: "#", code: "#" }
    },
    {
      title: "Afide",
      description: "Agricultural financial inclusion for daily earners",
      tech: "Vue + Nodejs + MySQL",
      links: { live: "#" }
    },
    {
      title: "Brandzoos",
      description: "A platform for brands and shoppers",
      tech: "React + TypeScript + GraphQL + Nestjs + Postgres",
      links: { live: "#" }
    },
    {
      title: "Site Map Builder",
      description: "A sitemap builder",
      tech: "Go",
      links: { code: "#" }
    },
    {
      title: "Task",
      description: "A CLI task manager",
      tech: "Go",
      links: { code: "#" }
    },
    {
      title: "Tic Tac Toe",
      description: "Tic Tac Toe game",
      tech: "Go",
      links: { code: "#" }
    },
    {
      title: "Capstone Project",
      description: "Cloud DevOps Nanodegree Capstone Project (Udacity)",
      tech: "AWS + Jenkins + Docker + Kubernetes + Python",
      links: { code: "#" }
    },
    {
      title: "Operationalized ML API",
      description: "Automated CI-CD pipeline for ML API that predicts housing price in Boston",
      tech: "Flask + AWS + Jenkins + Docker + Kubernetes + Circle CI",
      links: { code: "#" }
    }
  ];

  return (
    <div className="content-section" id="projects-section">
      <div className="projects-showcase">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.tech}</div>
            <div className="project-links">
              {project.links.live && (
                <a href={project.links.live} className="project-link">Live</a>
              )}
              {project.links.code && (
                <a href={project.links.code} className="project-link">Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
