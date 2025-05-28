import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import { Cart } from './components/Cart'
import Header from './components/Header'

function App() {
  // const [product,setProduct] =useState([]);

   

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>


          <Route path="/home" element={<Home />}/>
           
          <Route path='/cart' element={<Cart />}/>
         

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
