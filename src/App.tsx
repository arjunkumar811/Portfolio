import { Header } from './components/Header';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { experiences, projects, profile } from './data';

function App() {
  return (
    <div className="min-h-screen bg-background bg-grid text-text selection:bg-white/10">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Header />

        <main>
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">Experience</h2>
            <p className="text-gray-400 text-sm mb-8">
              Here's a timeline of my professional journey, showcasing my roles and contributions in full-stack development.
            </p>
            <div className="relative">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  tags={exp.tags}
                  links={exp.links}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">Projects</h2>
            <p className="text-gray-400 text-sm mb-8">
              A collection of full-stack applications showcasing modern web technologies, real-time features, and scalable architectures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  github={project.github}
                />
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
            <p className="text-muted text-sm">Arjun</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
