import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Publications />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Resume />
      <Contact />
    </main>
  )
}
