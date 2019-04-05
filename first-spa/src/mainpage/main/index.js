import React, { Component } from 'react';
import './styles.css'

class Main extends Component {
    render() {
        return (
            <body className = 'mainBackground'>
            <div className ="leftBar" id='centerLine'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis turpis in hendrerit ornare. Nam viverra quam quis scelerisque consectetur. Donec et dui at libero eleifend auctor. Aliquam vestibulum ex sed velit rutrum, ut convallis nunc volutpat. Phasellus a euismod augue. Etiam cursus metus sed est gravida, in pharetra neque viverra. Phasellus sed faucibus leo. Sed dictum ligula eros, eget fermentum leo tempor mattis. Sed ac magna quis odio bibendum pretium. 
            </div>
            <div className = "rightBar" id='centerLine'>
            <form className = 'logmeIn'>
                <input type ='text' name = 'username' placeholder = "Username"></input>
                <input type ='text' name = 'password' placeholder = "Password"></input>
                <button>Go!</button>
            </form> 

            </div>
            </body>
        );
    }
}

export default Main;