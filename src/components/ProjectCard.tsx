
import React from 'react';
import { MapPin, Link, Wrench } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  role: string;
  location: string;
  description: string[];
  technologies: string;
  projectLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  location,
  description,
  technologies,
  projectLink
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 space-y-4 hover:bg-white/[0.15] transition-all duration-300">
      <div>
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          {role} • <span className="text-cyan-400">{title}</span>
        </h3>
        <div className="flex items-center gap-2 text-gray-300 mt-2">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
      </div>
      <ul className="space-y-2">
        {description.map((desc, index) => (
          <li key={index} className="text-gray-300 flex gap-2">
            <span className="text-cyan-400">•</span>
            {desc}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 text-gray-300">
        <Wrench className="w-4 h-4 text-purple-400" />
        {technologies}
      </div>
      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <Link className="w-4 h-4" />
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
