
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Contacts from './components/Contacts';
import About from './components/About';
import Catalog from './components/Catalog';

function App() {
  return (
    <div className="bg-white">
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={< Catalog /> } />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App
