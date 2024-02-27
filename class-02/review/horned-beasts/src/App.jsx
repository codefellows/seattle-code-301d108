import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default App
