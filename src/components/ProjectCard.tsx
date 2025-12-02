import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const gradients = [
  'from-purple-600/20 to-pink-600/20',
  'from-blue-600/20 to-cyan-600/20',
  'from-green-600/20 to-emerald-600/20',
  'from-orange-600/20 to-red-600/20',
];

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  link,
  github
}) => {
  const gradientIndex = Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % gradients.length;
  const gradient = gradients[gradientIndex];

  const handleClick = () => {
    if (github && github !== '#') {
      window.open(github, '_blank');
    }
  };

  return (
    <div 
      className={`relative bg-gradient-to-br ${gradient} rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col cursor-pointer group hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10`}
      onClick={handleClick}
    >
      {/* Icons in top right */}
      <div className="absolute top-4 right-4 flex gap-2">
        {github && github !== '#' && (
          <div className="p-2 rounded-lg bg-white/5 text-muted group-hover:text-white transition-colors">
            <Github size={16} />
          </div>
        )}
        {link && link !== '#' && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-colors"
            aria-label="Live Demo"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 pr-16">{title}</h3>

      <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2.5 py-1 text-xs font-medium text-white bg-white/10 rounded-lg backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
