import React, { Component } from 'react'
import { Menuitems } from './MenuItems'
import './Navbar.css'
import './css/fontawesome.css'
import SignupForm from '../SignupForm'

const signup = {
    zIndex: "9999"
}

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            clicked: false,
            signup: false
        }
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })

    }


    clickSignup =() =>{
        this.setState({
            signup: true

        })
    }

    removeSignup = () =>{
        this.setState({
            signup: false
        })

    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    i-write
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {Menuitems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>
                                {item.title}</a></li>
                        )
                    })}

                    <div>
                        <button className='nav-links-mobile' onClick = {this.clickSignup}>Sign up</button>

                        {
                            this.state.signup ? <SignupForm style = {signup} rem ={this.removeSignup} /> : null
                        }

                        

                    </div>

                </ul>



            </nav>
        )
    }

}

export default Navbar