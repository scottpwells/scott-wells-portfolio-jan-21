import React, { Component } from 'react';
import Hero from "../assets/images/webdevelopment1600.png";

class Home extends Component {
    render() {
        return (
            <div>
         <img src={Hero} className="hero-home" alt="pencil pens webdevelopment portfolio"/>
         
            </div>
        );
        
    }
}

export default Home;