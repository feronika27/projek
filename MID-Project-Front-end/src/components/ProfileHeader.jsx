const ProfileHeader = ({ photo, name, role }) => (
  <section className="space-y-4 text-center sm:space-y-6">
    <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-white/20 shadow-glow sm:h-36 sm:w-36">
      <img src={photo} alt={name} className="h-full w-full object-cover" loading="lazy" />
    </div>
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.25em] text-white/60 sm:text-sm sm:tracking-[0.35em]">
        Profile
      </p>
      <h1 className="text-2xl font-semibold sm:text-4xl">{name}</h1>
      <p className="text-xs font-medium text-white/60 sm:text-sm">{role}</p>
    </div>
  </section>
)

export default ProfileHeader

