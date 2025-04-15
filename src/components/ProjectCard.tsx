
import React from 'react';
import { Link } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  status?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, status, link }) => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/[0.15] transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        {status && (
          <span className="text-sm bg-purple-500/30 text-purple-200 px-2 py-1 rounded-full border border-purple-400/30">
            {status}
          </span>
        )}
      </div>
      <p className="text-gray-300 mb-2">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-400 hover:text-cyan-300 flex items-center transition-colors"
        >
          <Link className="mr-2 w-4 h-4" /> View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
