
import React from 'react';
import { Star } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ title, description }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-4">
      <Star className="text-yellow-500 mr-4 w-10 h-10" />
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AchievementBadge;
