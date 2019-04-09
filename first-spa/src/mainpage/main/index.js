import React, { Component } from 'react';
import { Input, Button, Header } from 'semantic-ui-react'
import './styles.css'

class Main extends Component {
    render() {
        return (
            <body className = 'mainBackground'>
            <div className ="leftBar" id='centerLine'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer lobortis turpis in hendrerit ornare. Nam viverra quam quis scelerisque consectetur.
                 Donec et dui at libero eleifend auctor. Aliquam vestibulum ex sed velit rutrum, ut convallis nunc volutpat. 
                 Phasellus a euismod augue. Etiam cursus metus sed est gravida, in pharetra neque viverra. 
                 Phasellus sed faucibus leo. Sed dictum ligula eros, eget fermentum leo tempor mattis. 
                 Sed ac magna quis odio bibendum pretium. </p>
            </div>
            <div className = "rightBar" id='centerLine'>
                <Header as='h1'>Login:</Header>
                <form id='centerLine'>
                    <Input focus id='textSpacing' placeholder = "Username" />
                    <Input focus id='textSpacing' placeholder = "Password" />
                    <Button id='textSpacing'>Go!</Button>
                </form> 
            </div>
        </body>
        );
    }
}

export default Main;