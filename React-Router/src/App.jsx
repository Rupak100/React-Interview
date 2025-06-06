import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Products from './components/Product'

function App() {
 
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='profile/:userID' element={<Profile/>}/>
        <Route path='settings' element={<Settings/>}/>
        </Route>
        <Route path="/" element={<Products />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
