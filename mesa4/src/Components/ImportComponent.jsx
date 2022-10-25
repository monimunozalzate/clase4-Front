import React from "react";

const ImportComponent = (props)=>{
    return(
        <li>
            <ul>su edad es: {props.objeto.age}</ul>
            <ul>es de la ciudad: {props.objeto.ciudad}</ul>
            <ul>vive en: {props.objeto.vive}</ul>
            <ul>su email es: {props.objeto.email}</ul>
        </li>
    )
}

export default ImportComponent