import React, { Component } from 'react';
import FrontHeader from '../mainpage/header/index'
import { Header } from 'semantic-ui-react'
import './styles.css'

class ShopPage extends Component {
  render() {
    return (
        <body>
          <FrontHeader />
            <div className ='shop-page'>
            <div className = 'sidebar-menu'>
              <Header as='h3'>Sidebar Menu</Header>
              <div>
                Link1
              </div>
              <div>
                Link2
              </div>
            </div>
            <div>
              <div className='itemBoxes'>
              Item
            </div>
              <div className='itemBoxes'>
              Item2
              </div>
              </div>
              </div>
          </body>
    )}
}

export default ShopPage;