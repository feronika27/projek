import ProjectCard from './ProjectCard'

const ProjectsSection = ({ projects }) => {
  if (!projects || projects.length === 0) return null

  return (
    <section className="w-full space-y-2 text-left sm:space-y-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs sm:tracking-[0.3em]">
        Featured Projects
      </p>
      <div className="grid gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

