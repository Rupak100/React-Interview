import './App.css'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Dashboard from './pages/Dashboard'
import Counter from './pages/Counter'


function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
        <Route path='/users' element={<Users/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/counter' element={<Counter/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
