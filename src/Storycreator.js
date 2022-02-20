import React, {Component} from 'react'
import './Storycreator.css'

const body = {
    color: "rgba(0, 0, 0, 0.611)",
    textAlign: "center",
    fontSize: "2vw",
    paddingTop: "7%",
    backgroundColor: "rgba(128, 128, 128, 0.234)",
    height: "335px",
    boxShadow: "2px 4px 8px gray"

}


class Storycreator extends Component{

    
    render(){
        return(
            <div style={body}>
                <h1>
                    You are yet to write a story!
                    
                </h1>

            </div>
        )
    }
}

export default Storycreator