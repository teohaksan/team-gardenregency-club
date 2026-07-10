import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import StatsSection from './components/StatsSection'
import ClubSection from './components/ClubSection'
import TransportSection from './components/TransportSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import { project } from './data/project'

export default function App() {
  return (
    <div className="site-d">
      <Navbar brand={project.nameCn} phone={project.contact.phone} />
      <main>
        <HeroSection {...project.hero} />
        <IntroSection {...project.intro} />
        <StatsSection {...project.overview} />
        <ClubSection {...project.club} />
        <TransportSection items={project.transport} />
        <ContactSection {...project.contact} />
      </main>
      <FooterSection brand={project.nameCn} disclaimer={project.footer.disclaimer} />
    </div>
  )
}
