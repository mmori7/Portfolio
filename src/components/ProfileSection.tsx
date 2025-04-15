
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProfileSectionProps {
  name: string;
  image: string;
  socials: {
    icon: LucideIcon;
    link: string;
  }[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, image, socials }) => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-500/30 backdrop-blur-sm">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">{name}</h1>
      <p className="text-xl text-gray-300 mb-6">Software Engineer | Computer Science Student</p>
      <div className="flex justify-center gap-4">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Icon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSection;
