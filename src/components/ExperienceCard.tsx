import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ExperienceModal } from './ExperienceModal';

interface Link {
  label: string;
  icon: LucideIcon;
  url: string;
}

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  links: Link[];
}

export const ExperienceCard: React.FC<ExperienceProps> = ({
  role,
  company,
  period,
  description,
  tags,
  links
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative pl-8 pb-12 border-l border-white/10 last:border-0">
        {/* Timeline dot */}
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-background" />
        
        <div 
          className="bg-surface rounded-lg p-6 border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-white">
                {role} <span className="text-muted">· {company}</span>
              </h3>
            </div>
          </div>

          <div className="text-sm text-muted mb-4">{period}</div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        role={role}
        company={company}
        period={period}
        description={description}
        tags={tags}
        links={links}
      />
    </>
  );
};
