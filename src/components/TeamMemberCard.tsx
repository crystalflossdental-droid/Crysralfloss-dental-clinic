import { UserCheck } from 'lucide-react';
import React from 'react'

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  achievement?: string;
  credentials?: string[];
}
const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 min-h-[600px] flex flex-col">
      <div className="h-96 overflow-hidden flex-shrink-0">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-2">{member.role}</p>
        {member.credentials && member.credentials.length > 0 && (
          <div className="mb-3 space-y-1 text-sm text-gray-600">
            {member.credentials.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        )}
        {member.achievement && (
          <div className="flex items-center mb-3 text-gray-700">
            <UserCheck className="h-5 w-5 mr-2 text-primary-600" />
            <span>{member.achievement}</span>
          </div>
        )}
        <p className="text-gray-700 italic flex-grow">"{member.bio}"</p>
      </div>
    </div>
  );
};

export default TeamMemberCard
