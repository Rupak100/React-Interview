const Button = ({id}) => {
  return (
    <div style={{
        width:"100%",
        backgroundColor:"black",
        // margin:"10px",
        flex:"1",
        display:"flex",
        color:"white",
        textAlign:"center",
        padding:"30px"
    }}>Button{id}</div>
  )
}

export default Button