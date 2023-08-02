import * as React from 'react';
import Nav from '../components/Nav/Nav';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Project() {
  return (
    <>
      <div className="grid grid-cols-1 sm:gap-4 gap-8 m-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageURL={project.imageURL}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </>
  );
}

