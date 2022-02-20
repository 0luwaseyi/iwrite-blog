import React, {Component} from 'react'

const align = {
    textAlign: "center"
}

class Error extends Component{
    render(){
        return(
            <h1 style={align}>
                Oops! This page does not exist!
            </h1>
        )
    }
}

export default Error