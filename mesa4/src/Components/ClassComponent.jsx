import React from "react";
import ImportComponent from "./ImportComponent";

class ClassComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {objeto} = this.props
        return (
            <div>
                <p>Esta es la Class component</p>
                <h1>Hola {objeto.name}</h1>
                <p>aca agrego el import component</p>
                <ImportComponent objeto={this.props.objeto}/>
            </div>
        )
    }
}
export default ClassComponent