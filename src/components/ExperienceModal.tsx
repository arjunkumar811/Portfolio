import { X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Link {
  label: string;
  icon: LucideIcon;
  url: string;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  links: Link[];
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  isOpen,
  onClose,
  role,
  company,
  period,
  description,
  tags,
  links
}) => {
  if (!isOpen) return null;

  // Parse description into bullet points if it contains bullet points
  const parseDescription = (desc: string): string[] => {
    const bulletPoints = desc.split(/[•·]\s*/).filter(point => point.trim());
    return bulletPoints.length > 1 ? bulletPoints : [desc];
  };

  const descriptionPoints = parseDescription(description);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-surface border border-white/10 rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="mb-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-500/10 rounded-xl">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{role}</h2>
                <p className="text-muted text-sm">{company}</p>
              </div>
            </div>
            <p className="text-xs text-muted">{period}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-5">
            <h3 className="text-xs font-semibold text-white mb-2.5">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 text-xs font-medium text-white bg-white/10 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-5">
            <h3 className="text-xs font-semibold text-white mb-2.5">Key Achievements</h3>
            <ul className="space-y-2.5">
              {descriptionPoints.map((point, index) => (
                <li key={index} className="flex gap-2.5 text-gray-400 text-xs leading-relaxed">
                  <span className="text-gray-500 mt-1 flex-shrink-0">•</span>
                  <span>{point.trim()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {links.length > 0 && (
            <div className="flex flex-wrap gap-2.5 pt-3 border-t border-white/10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <link.icon size={14} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
