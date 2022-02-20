import React, {Component} from 'react'
import Navbar from './Navbar/Navbar'
import Body from './Body'

class Homepage extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Body />
            </div>

        )
    }
}
export default Homepage