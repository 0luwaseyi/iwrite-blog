import React, { Component } from 'react'
import Profilepic from './Profilepic'
import Storycreator from './Storycreator'
import {apiFetcher} from './functions/function'
import './Profile.css'
import Navbar from './Navbar/Navbar'



class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : null
        }
        
    }

    componentDidMount(){
        console.log(this.props)


    }

    componentDidUpdate(prevProps){
        apiFetcher("GET", `info/${this.props.token}`)
        .then(
            (value) => {
                if(value.status === 200) {
                    this.setState({user : value.data.info})
                } else {
                   // window.location.replace("/")
                }
            }
        )

    }
    render() {
        if(this.state.user === null) {
            return (
                <body id='wait-page'>loading ... </body>
            )
        }
        return (
            <div>
                 <Navbar />
                <Profilepic user = {this.state.user} />
                <Storycreator />
            </div>
        )
    }
}

export default Profile