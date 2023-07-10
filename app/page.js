import { AboutMe } from '@/components/AboutMe'
import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import { Nav } from '@/components/Nav'
import { Projects } from '@/components/Projects'
import { Tech } from '@/components/Tech'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <Main />
      <AboutMe />
      <Projects />
      <Tech />
      <Footer />
    </Fragment>
  )
}
