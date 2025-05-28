import './App.css'
import Button from './Button'
import HOC from './HOC'
import HOCG from './HOCG'

function App() {
 

  return (
    <>
      <HOC But={Button}/>
      <HOCG But={Button}/>
    </>
  )
}

export default App
