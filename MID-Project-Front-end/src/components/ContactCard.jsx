const ContactCard = ({ label, value, href }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noreferrer"
    className="flex items-center justify-between px-4 py-3 text-xs transition hover:bg-white/5 sm:px-5 sm:py-4 sm:text-sm"
  >
    <div className="min-w-0 flex-1">
      <p className="text-white/60">{label}</p>
      <p className="truncate font-medium text-white">{value}</p>
    </div>
    <span className="ml-2 flex-shrink-0 text-white/40">↗</span>
  </a>
)

export default ContactCard

