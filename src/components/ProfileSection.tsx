
import React from 'react';

interface ProfileSectionProps {
  name: string;
  image: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, image }) => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-500/30 backdrop-blur-sm">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">{name}</h1>
      <p className="text-xl text-gray-300 mt-2">Software Engineer | Computer Science Student</p>
    </div>
  );
};

export default ProfileSection;
