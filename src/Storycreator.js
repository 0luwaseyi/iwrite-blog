import React, {Component} from 'react'
import './Storycreator.css'

const body = {
    color: "rgba(0, 0, 0, 0.611)",
    textAlign: "center",
    fontSize: "1.3vw",
    paddingTop: "0",
    /*backgroundColor: "rgba(128, 128, 128, 0.234)",*/
    height: "335px",


}


class Storycreator extends Component{

    
    render(){
        return(
            <div style={body}>

                <img id="svg-picture" src  = {require ('./undrawpic.png')} alt = "blog" />
                <h1 className='curve'>
                    You are yet to write a story!
                    
                </h1>

                <div className = "color-design">

                </div>

                <div className = "second-design">
                    
                </div>


            </div>
        )
    }
}

export default Storycreator