const AboutSection = ({ about }) => {
  if (!about) return null

  return (
    <section className="w-full space-y-2 text-left sm:space-y-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs sm:tracking-[0.3em]">
        About
      </p>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/80 sm:rounded-2xl sm:p-6 sm:text-base">
        <p className="whitespace-pre-line">{about}</p>
      </div>
    </section>
  )
}

export default AboutSection

