import { useState } from 'react'
import {Route, Routes, NavLink, useParams} from 'react-router-dom'
import './App.css'
import About from './Component/About'
import Home from './Component/Home'
import Contact from './Component/Contact'
import Admin from './Component/Admin'
import Profile from './Component/Profile'
import Error from './Component/Error'
function App() {
      const [Login, setLogin] = useState(false)

  return (
      <div className='test'>
    <Routes>
        <Route exect path="/" element={<Home setLogin={setLogin} Login={Login}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/admin" element={<Admin setLogin={setLogin} Login={Login}/>}/>
        <Route path="*" element={<Error />}/>
        
    </Routes>

        <nav>
          {/* Home */}
              <NavLink replace to="/" className="inactive-link">
                {({isActive}) =>
                  isActive ? 
                    <p className='active-link'>Home</p>
                   : 
                    <p>Home</p>
                  
                }
              </NavLink>
          {/* About */}
              <NavLink replace to="/about" className="inactive-link">
                {({isActive}) =>
                  isActive ? 
                    <p className='active-link'>About</p>
                   : 
                   <p>About</p>
                  
                }
              </NavLink>
          {/* Contact */}
               <NavLink replace to="/contact" className="inactive-link">
                {({isActive}) =>
                  isActive ? 
                    <p className='active-link'>Contact</p>
                   : 
                   <p>Contact</p>
                  
                }
              </NavLink>
              {/* Profile */}
              <NavLink replace to="/profile" className="inactive-link">
                {({isActive}) =>
                  isActive ? 
                    <p className='active-link'>Profile</p>
                   : 
                   <p>Profile</p>
                  
                }
              </NavLink>
               {/* Admin */}
               <NavLink replace to="/admin" className="inactive-link">
                {({isActive}) =>
                  isActive ? 
                    <p className='active-link'>Admin</p>
                   : 
                   <p>Admin</p>
                  
                }
              </NavLink>

        </nav>
      </div>
    
  )
}

export default App
