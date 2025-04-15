
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
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        {status && (
          <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
            {status}
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline flex items-center"
        >
          <Link className="mr-2 w-4 h-4" /> View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
