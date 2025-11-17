const SkillsList = ({ skills }) => (
  <section className="w-full space-y-2 text-left sm:space-y-3">
    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs sm:tracking-[0.3em]">
      Skills
    </p>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 sm:px-4 sm:py-2 sm:text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
)

export default SkillsList

