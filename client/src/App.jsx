
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Catalog from './components/Catalog';
import About from './components/About';
import Contacts from './components/Contacts';
import Blog from './components/Blog';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/Logout';


function App() {
  return (
    <div className="bg-white">
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={< Catalog /> } />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={< Blog /> } />
        <Route path="/register" element={< Register /> } />
        <Route path="/login" element={< Login /> } />
        <Route path="/logout" element={< Logout /> } />
      </Routes>
    </div>
  )
}

export default App
