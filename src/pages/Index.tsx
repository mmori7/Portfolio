
import React from 'react';
import { Award, GraduationCap, Code, Users, Rocket, Star } from 'lucide-react';
import ProfileSection from '@/components/ProfileSection';
import ProjectCard from '@/components/ProjectCard';
import AchievementBadge from '@/components/AchievementBadge';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2C1B47] to-[#1E1B2C] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        <div className="stars absolute inset-0" />
        <div className="twinkling absolute inset-0" />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <ProfileSection 
          name="Mohit Mori"
          image="/lovable-uploads/cb34bb6a-5f20-42fc-9b62-662a77ea3086.png"
        />
        
        <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] transition-transform hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
            <GraduationCap className="mr-3 text-purple-400" />
            Education
          </h2>
          <div className="text-gray-200">
            <h3 className="text-xl font-semibold text-white">California State University Long Beach</h3>
            <p>Computer Science</p>
            <p>GPA: 3.45</p>
          </div>
        </section>
        
        <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] transition-transform hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Rocket className="mr-3 text-cyan-400" />
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
        
        <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] transition-transform hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Users className="mr-3 text-blue-400" />
            Leadership
          </h2>
          <div className="text-gray-200">
            <p>Member, ACM CSULB</p>
          </div>
        </section>
        
        <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] transition-transform hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Star className="mr-3 text-yellow-400" />
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
