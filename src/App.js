import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Body from './Body'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './Profile'
import Livefeed from './Livefeed'
import './App.css'
import Error from './Error';






class App extends Component {

    constructor() {
        super()
        this.state = {
            token : null
        }
    }


    componentDidMount() {
        let token = Cookies.get("token");
        if (token !== undefined) {
            this.setState({token : token})
        }
    }



    login = (token) => {
        console.log(token)
        this.setState({token : token})
        console.log("yeah")
        Cookies.set("token", token, "{expires : 7}")
    }

    logout = () => {
        this.setState({token : null})
        Cookies.remove("token")
    }


    render() {
        return (
            <Router basename={process.env.BASE_URL}>
                <div className="App">
     

                    
                    
                
                    <Routes>

                    
                        <Route path="/profile" element={<Profile token={this.state.token} />} />
                        <Route path = "*" element = {<Error />} />
                        <Route path = "/livefeed" element = {<Livefeed />} />
                        <Route path ="/" element = {<Body login={this.login} />}/>


                    </Routes>
                    

                </div>
                


            </Router>




        )
    }
}

export default App;