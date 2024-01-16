import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navBar'
import About from './pages/about/about'
import Work from './pages/work/work'
import Contact from './pages/contact/contact'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='main-wrapper'>
      <NavBar />
      <About />
      <Work />
      <Contact />
      {/* <Footer /> */}
    </div>


  )
}

export default App
