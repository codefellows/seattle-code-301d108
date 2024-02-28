
import './App.css'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(Header);
  console.log(Footer);
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
