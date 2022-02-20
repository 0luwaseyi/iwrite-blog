import React, { Component } from 'react'
import './SignupForm.css'
import { apiFetcher } from './functions/function';



class SignupForm extends Component {

    constructor() {
        super()
        this.inputRef = React.createRef()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }

    }

    handleFirstname = (event) =>{
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastname = (event) =>{
        this.setState({
            lastname: event.target.value

        })
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

    handleSubmit = (event) =>{
        //alert(`Happy registration ${this.state.firstname}, Check your email for account activation link!`)
    }

    cancelHandler = () => {
        this.props.rem()
    }

    handleSubmitForm = e => {
        e.preventDefault();

        let {firstname, lastname, password, email} = this.state;

        let data = {
            name : firstname + " " + lastname,
            password : password,
            email : email
        }

        apiFetcher("POST", "signup", data)
        .then(
            (value) => {
                console.log(value)
                if (value.status === 200) {
                    alert(`Happy registration ${this.state.firstname}, Check your email for account activation link!`)
                    this.cancelHandler();
                } else {
                    alert("the user already exists")
                }
            }
        )


    }


    componentDidMount() {
        this.inputRef.current.focus()

        let form = document.getElementById("signup")

        form.addEventListener('submit',this.handleSubmitForm)
    }

    componentWillUnmount() {
        let form = document.getElementById("signup")
        form.removeEventListener('submit', this.handleSubmitForm)
    }


    render() {
        return (
            <div id="form-background">
                <button className='cancel' onClick={this.cancelHandler}>X</button>
                <form className="form-control" id="signup" onSubmit = {this.handleSubmit}>
                    <label className='label' htmlFor="firstname">Firstname: </label>
                    <input type="text" placeholder='John' className='form-class' name="first name" ref={this.inputRef} value= {this.state.firstname} onChange = {this.handleFirstname} required></input>
                    <label className='label' htmlFor="Lastname">Lastname: </label>
                    <input type="text" placeholder='Smith' className='form-class' name="last name" value = {this.lastname} onChange = {this.handleLastname} required></input>
                    <label className='label' htmlFor="E-mail">E-mail: </label>
                    <input type="e-mail" placeholder='JohnSmith@xyz.com' className='form-class' name="email" value =  {this.state.email} onChange = {this.handleEmail} required></input>
                    <label className='label' htmlFor="password">Password: </label>
                    <input type="password" placeholder="xxxxxx" className='form-class' name="password" value = {this.state.password} onChange = {this.handlePassword} required></input>
                    <button type='submit' className='btn-secondary'>Submit</button>
                </form>


            </div>

        )
    }
}

export default SignupForm