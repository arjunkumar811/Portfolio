import React from 'react';
import { profile } from '../data';

export const Header: React.FC = () => {
  return (
    <header className="mb-16">
      <div className="flex justify-between items-start mb-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-2xl overflow-hidden ring-2 ring-white/10">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex gap-4">
          {profile.socials.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <h1 className="text-4xl font-bold text-white mb-2">
        Hi, I'm {profile.name}
      </h1>
      
      <div className="text-muted mb-6">
        {profile.age}, {profile.location} | {profile.title}
      </div>

      <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
        {profile.bio}
      </p>
    </header>
  );
};
