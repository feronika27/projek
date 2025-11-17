import AboutSection from './components/AboutSection'
import ContactList from './components/ContactList'
import LoadingSkeleton from './components/LoadingSkeleton'
import ProfileHeader from './components/ProfileHeader'
import ProjectsSection from './components/ProjectsSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import SkillsList from './components/SkillsList'
import useProfile from './hooks/useProfile'

const App = () => {
  const { profile, error, loading } = useProfile()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto flex w-full flex-1 flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:gap-10 sm:px-6 sm:py-16">
          {loading && <LoadingSkeleton />}
          
          {error && (
            <div className="animate-fade-in rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs text-red-100 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm">
              {error} Pastikan JSON Server berjalan dengan <code className="text-[10px] sm:text-xs">npm run json</code>.
            </div>
          )}
          
          {profile && !loading && !error && (
            <div className="flex w-full max-w-4xl flex-col items-center gap-6 sm:gap-10">
              <div className="animate-fade-in-up w-full">
                <ProfileHeader photo={profile.photo} name={profile.name} role={profile.role} />
              </div>
              
              {profile.about && (
                <div className="animate-fade-in-up w-full" style={{ animationDelay: '0.1s' }}>
                  <AboutSection about={profile.about} />
                </div>
              )}
              
              <div className="animate-fade-in-up w-full" style={{ animationDelay: '0.2s' }}>
                <ContactList contacts={profile.contacts} />
              </div>
              
              <div className="animate-fade-in-up w-full" style={{ animationDelay: '0.3s' }}>
                <SkillsList skills={profile.skills} />
              </div>
              
              {profile.projects && profile.projects.length > 0 && (
                <div className="animate-fade-in-up w-full" style={{ animationDelay: '0.4s' }}>
                  <ProjectsSection projects={profile.projects} />
                </div>
              )}
            </div>
          )}
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default App
