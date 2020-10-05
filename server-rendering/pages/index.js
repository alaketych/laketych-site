import Head from 'next/head'
import Link from 'next/link'
import { Header, CTA, Footer } from '../components/_index'
import { Home, Blog, About, Contact, Projects } from './_index'

export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <Blog />
      <About />
      <Contact />
      <Projects />
      <CTA />
      <Footer />
    </>
  )
}
