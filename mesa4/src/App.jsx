import React from "react"
import { Fragment } from "react"
import ClassComponent from "./Components/ClassComponent"
import FuntionalComponent from "./Components/FuntionalComponent"

const App = ()=>{
  const obj ={
    name : "Felipe",
    lastname : "Calvache",
    age: 33,
    email : "felipec@gmail.com",
    ciudad : "bogota",
    vive:"mutata",
  }
  return(
    <Fragment>
      <ClassComponent objeto={obj}/>
      <hr></hr>
      <FuntionalComponent objeto={obj}/>
    </Fragment>
  )
}

export default App
