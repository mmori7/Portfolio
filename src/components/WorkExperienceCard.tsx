
import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface WorkExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}

const WorkExperienceCard: React.FC<WorkExperienceProps> = ({
  title,
  company,
  location,
  period,
  type,
  responsibilities
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 space-y-4 hover:bg-white/[0.15] transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            {title} • <span className="text-purple-400">{company}</span>
          </h3>
          <div className="flex flex-wrap gap-4 text-gray-300 mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {period}
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              {type}
            </span>
          </div>
        </div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-300 flex gap-2">
            <span className="text-purple-400">•</span>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceCard;
