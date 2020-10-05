import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header, CTA, Footer } from './components/_index'
import { Home, Blog, About, Projects, Contact } from './pages/_index.js'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/"     component={ Home } exact />
        <Route path="/blog" component={ Blog } exact />
        <Route path="/about" component={ About } exact/>
        <Route path="/contact" component={ Contact } exact />
        <Route path="/projects" component={ Projects } exact />
      </Switch>

      <CTA/>

      <Footer />
    </>
  )
}

export default App