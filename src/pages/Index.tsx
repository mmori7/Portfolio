
import React from 'react';
import { Award, GraduationCap, Code, Users, Link as LinkIcon } from 'lucide-react';
import ProfileSection from '@/components/ProfileSection';
import ProjectCard from '@/components/ProjectCard';
import AchievementBadge from '@/components/AchievementBadge';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] via-[#E5DEFF] to-[#D3E4FD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <ProfileSection 
          name="Mohit Mori"
          image="/lovable-uploads/cb34bb6a-5f20-42fc-9b62-662a77ea3086.png"
        />
        
        <section className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" />
            Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold">California State University Long Beach</h3>
            <p className="text-gray-600">Computer Science</p>
            <p className="text-gray-600">GPA: 3.45</p>
          </div>
        </section>
        
        <section className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Code className="mr-3 text-green-600" />
            Projects
          </h2>
          <div className="space-y-4">
            <ProjectCard 
              name="Resume Match AI Coach"
              description="An AI-powered tool to enhance resume matching and career guidance"
              link="https://github.com/mmori7/resume-match-ai-coach"
            />
            <ProjectCard 
              name="Cosmic Habit Quest"
              description="Habit tracking application (in progress)"
              status="In Progress"
            />
          </div>
        </section>
        
        <section className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Users className="mr-3 text-purple-600" />
            Leadership
          </h2>
          <div>
            <p>Member, ACM CSULB</p>
          </div>
        </section>
        
        <section className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Award className="mr-3 text-yellow-600" />
            Achievements
          </h2>
          <AchievementBadge 
            title="Goldman Sachs Certificate"
            description="Solved database problem"
          />
        </section>
      </div>
    </div>
  );
};

export default Index;
