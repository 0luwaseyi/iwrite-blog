import React, { Component } from 'react'
import Profilepic from './Profilepic'
import Storycreator from './Storycreator'
import {apiFetcher} from './functions/function'
import './Profile.css'
import WriteBlog from './Writeblog'
import ReactLoading from  'react-loading'



class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : null,
            write: true,
            create: "Create a Story"
        }
        
    }

    componentDidMount(){
        document.title = "Profile"
    }

    toggleHandler = ()=>{
       if(this.state.write === true){
           this.setState({
               write: false,
               create: "Stories" 
           })
       }
      else if(this.state.write === false){
          this.setState({
              write: true,
             create: "Create a Story"
          })
      }
        console.log("clicked")
    }



    componentDidUpdate(prevProps){
        apiFetcher("GET", `info/${this.props.token}`)
        .then(
            (value) => {
                if(value.status === 200) {
                    this.setState({user : value.data.info})
                } else {
                    window.location.replace("/")
                }
            }
        )


    }
    render() {
        if(this.state.user === null) {
            return (
                <div id = "wait-page">
                    <ReactLoading  className="loading" type = "spokes" color= "white" height = {280} width = {120} />
                    <p>Wait a second...</p>

                </div>
                
            )
        }
        return (
            <div>
                <Profilepic user = {this.state.user} onClick = {this.toggleHandler}  create = {this.state.create} />
                {
                    this.state.write ? (<Storycreator />) : (<WriteBlog/>)
                }
 
            </div>
            
        )
    }
}

export default Profile