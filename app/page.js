import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main className='max-w-[1200px] mx-auto'>
      <Hero />
      <About />
      <Menu />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
