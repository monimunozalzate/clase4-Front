import React from "react";
import ImportComponent from "./ImportComponent";

const FuntionalComponent =(props)=>{
    return(
        <div>
            <p>Este es el Functional component</p>
            <h2>su apellido es {props.objeto.lastname}</h2>
            <p>aca agrego el import Component</p>
            <ImportComponent objeto={props.objeto}/>
        </div>
    )
}

export default FuntionalComponent