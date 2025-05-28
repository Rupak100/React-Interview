import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
    <nav>
        <ul style={{
            display:"flex",
            flexDirection:"row",
            gap:3,
            background:"yellow",
            
        }}>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </nav>
   </>
  )
}

export default Header