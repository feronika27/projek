import ContactCard from './ContactCard'

const ContactList = ({ contacts }) => (
  <section className="w-full space-y-2 text-left">
    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs sm:tracking-[0.3em]">
      Contact
    </p>
    <div className="divide-y divide-white/5 rounded-xl border border-white/10 bg-white/5 sm:rounded-2xl">
      {contacts.map((contact) => (
        <ContactCard key={contact.label} {...contact} />
      ))}
    </div>
  </section>
)

export default ContactList

