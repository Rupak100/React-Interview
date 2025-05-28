import Button from './components/Button'

function App() {
  

  return (
    <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      gap:"10px"
    }}>
      <Button id={1}/>
      <Button id={2}/>
      <Button id={3}/>
    </div>
  )
}

export default App
