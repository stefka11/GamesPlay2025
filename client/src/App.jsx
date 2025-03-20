
import { useState } from 'react'
import { Route, Routes } from 'react-router'

import { UserContext} from './context/UserContext'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login';
import Register from './components/register/Register';
import Catalog from './components/catalog/Catalog';
import About from './components/About';
import Contacts from './components/Contacts';
import Blog from './components/Blog';
import Logout from './components/logout/Logout';
import './App.css'

function App() {
  const [authData, setAuthData] = useState({});
  //console.log(authData);
  
  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <div className="bg-white">

        < Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={< Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={< Blog />} />
          <Route path="/register" element={< Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={< Logout />} />
        </Routes>

      </div>
    </UserContext.Provider>
  )
}

export default App
