
import React from 'react';

interface ProfileSectionProps {
  name: string;
  image: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, image }) => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 w-48 h-48 rounded-full overflow-hidden shadow-lg">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
      <p className="text-xl text-gray-600 mt-2">Software Engineer | Computer Science Student</p>
    </div>
  );
};

export default ProfileSection;
