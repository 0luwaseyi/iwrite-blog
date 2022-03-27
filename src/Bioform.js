import React, {Component} from 'react'
import './Bioform.css'

class Bioform extends Component{
    render(){
        return(
            <div className = "bio-style">
                <textarea className='textarea' name='bio' rows={20} cols={60} placeholder='write something about yourself...'  />
                <button className='bio-button'>Edit Bio</button>
            </div>
        )
    }
}

export default Bioform