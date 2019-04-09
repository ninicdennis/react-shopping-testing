import React, { Component } from 'react';
import FrontHeader from '../mainpage/header/index'
import './styles.css'

class ShopPage extends Component {
  render() {
    return (
        <body>
          <FrontHeader />
            <div className ='shop-page'>
            <div className = 'sidebar-menu'>
              Side Menu
              <div>
              box1
              </div>
              <div>
                box2
              </div>
            </div>
            <div>
              Shop Menu
            </div>
              </div>
          </body>
    )}
}

export default ShopPage;