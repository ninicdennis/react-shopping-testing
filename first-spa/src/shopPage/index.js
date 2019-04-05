import React, { Component } from 'react';
import FrontHeader from '../mainpage/header/index'
import './styles.css'

class ShopPage extends Component {
  render() {
    return (
        <body className ='shopFlex'>
            <FrontHeader />
            <div className = 'shopMain'> This is the Main Body. </div>
        </body>
    );
  }
}

export default ShopPage;