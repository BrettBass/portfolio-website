// components/ProjectCard.tsx

import * as React from 'react';

import { ProjectData } from '../data/projects';

interface ProjectCardProps extends ProjectData {}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageURL, githubLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-8 mx-8 flex flex-col justify-center">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img src={imageURL} alt={title} className="object-cover rounded" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-grow">{description}</p>
      {githubLink && (
        <a href={githubLink} className="text-blue-500 hover:underline mt-2 block">
          GitHub Repository
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
