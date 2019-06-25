import React from "react"
function Header()
{
    const firstName="Bob"
    return (<h1 style={{color:"#FF8C00",backgroundColor:"red"}}>This is {`${firstName}`}'s page</h1>)
}
export default Header