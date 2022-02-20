import React, {Component} from 'react';
import './Form.css';
import {apiFetcher} from './functions/function'


class Form extends Component{
    constructor(){
        super()
        this.inputRef = React.createRef()
        this.state = {
            email: '',
            password: ''
        }
    }


    cancelHandler = () =>{
        this.props.rem()
        
    }

    handleEmail = (event) =>{
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = () =>{
      //  this.props.rem()
    }

    handleSubmitForm = e => {
        e.preventDefault()
        let {email, password} = this.state

        let data = {
            password : email,
            email : password
        }

        apiFetcher("POST", "login", data)
        .then(
            (value) => { 
                if (value.status === 200) {
                    this.props.login(value.data.token)
                    window.location.replace("/profile");
                    this.props.rem();

                } else {
                    alert("login details incorrect!")
                }
            }
        )


    }


    componentDidMount() {
        this.inputRef.current.focus()

        let form = document.getElementById("login")

        form.addEventListener('submit',this.handleSubmitForm)
    }

    componentWillUnmount() {
        let form = document.getElementById("login")
        form.removeEventListener('submit', this.handleSubmitForm)
    }




    render(){
        return(
            <div id="form-background-login">
                <button className='cancel' onClick = {this.cancelHandler}>X</button>
                 <form onSubmit={this.handleSubmit} id = "login" className ="form-control"> 
                <label className='label' htmlFor="name">E-mail: </label>
                <input type ="e-mail" placeholder="Johnsmithxyz@gmail.com" className="form-class" name='email' value = {this.state.email} onChange={this.handleEmail} ref = {this.inputRef} required></input>
                <label className='label' htmlFor="email">Password: </label>
                <input type = "password" placeholder ="xxxxxx" className ="form-class" name='password' value = {this.state.password} onChange={this.handlePassword} required></input>
                <button type="submit" className ="btn-secondary">Submit</button>
            </form>
            </div>
           
        )
    }
}

export default Form