import React, {Component} from 'react'
import Form from './Form'
import SignupForm from './SignupForm'
import './Body.css'
import Navbar from './Navbar/Navbar'
import Particles from 'react-tsparticles'




class Body extends Component{
    constructor(){
        super()
        this.state = {
            form: false,
            title: "City of a Thousand Stories",
            signup: false,
            quote:  "To live in the hearts of those we love is not to die"
        }
    }




    clickHandler = () =>{
        this.setState({
            form: true
           })

           document.title = "Log in"

    }

    clickSignup = () =>{
        this.setState({
            signup: true
        })

        document.title = "Sign Up"
    }

    removeSignup = () => {
        this.setState({
            signup : false,
            form:  false
        })
        document.title = "Homepage"
    }

    componentDidMount(){
        document.title = "Homepage"
    }

    


    render(){
        const particlesInit = (main) => {
            console.log(main);
        
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
          };
        
          const particlesLoaded = (container) => {
            console.log(container);
          };
        return(
            
            <div className='background-image'>
                <Navbar />
                <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
                
            
               
                <h1 className='head-name'>
                    {this.state.title}
                </h1>
                <p  onMouseOver = {this.quoteHandler} className='sub-head'><em>"{this.state.quote}"
                </em></p>
            
                <button className='btn-primary' onClick = {this.clickHandler}>Log in</button>
                <button className='btn-success' onClick = {this.clickSignup}>Sign Up</button>
                {
                    this.state.form ? (<Form rem= {this.removeSignup}  login={this.props.login}/>) : (null)
            
                }

                {
                    this.state.signup ? (<SignupForm rem={this.removeSignup}/>) : (null)
                }
              
                       

            </div>
        )
    }
}

export default Body