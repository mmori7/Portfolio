
import React from 'react';
import { Star } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ title, description }) => {
  return (
    <div className="flex items-center bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/[0.15] transition-all duration-300">
      <Star className="text-yellow-400 mr-4 w-10 h-10" />
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default AchievementBadge;
