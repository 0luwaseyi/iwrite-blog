import React, { Component } from 'react'
import './Profilepic.css'
import Bioform from './Bioform'

class Profilepic extends Component {
    constructor(props){
        super(props)
        this.state = {
            bio: true
        }
    }

    imageHandler = () => {
        console.log("clicked")
    }

    bioHandler = () =>{
        this.setState({
            bio: false
        })
    }
    render() {
        return (
            <div className='profile-header'>
                <img onClick={this.imageHandler} src={require('./database.jpg')} alt="profile" />
                <h2>{this.props.user.name}</h2>
                <li  onClick = {this.bioHandler}className='story-render'>Bio</li>
                <li className = 'line'>|</li>
                <li className='create-story'>Create a Story</li>

                {
                    this.state.bio ?  null : <Bioform />
                }
            </div>
        )
    }
}
export default Profilepic