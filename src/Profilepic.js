import React, { Component } from 'react'
import './Profilepic.css'
import Bioform from './Bioform'
import Navbar from './Navbar/Navbar'


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
                <Navbar />
                <img onClick={this.imageHandler} src={require('./user-profile.png')} alt="profile" />
                <h2>{this.props.user.name}</h2>
                <li  onClick = {this.bioHandler}className='story-render'>Bio</li>
                <li className = 'line'>|</li>
                <li onClick={this.props.onClick} className='create-story'>{this.props.create}</li>

                {
                    this.state.bio ?  null : <Bioform />
                }

            </div>
        )
    }
}

export default Profilepic