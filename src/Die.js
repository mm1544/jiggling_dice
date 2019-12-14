import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
    render(){
        return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`}></i>;
            
                {/* we are adding class "Die" to be able access this class on css */}
                
            
        
    }
}

export default Die;

