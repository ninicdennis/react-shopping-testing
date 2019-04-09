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
            <div className = 'main-menu'>
              <div className='itemBoxes'>Item1</div>
              <div className='itemBoxes'>Item2</div>
              <div className='itemBoxes'>item3</div>
              <div className='itemBoxes'>item4</div>
              <div className='itemBoxes'>item5</div>
              <div className='itemBoxes'>Item6</div>
              <div className='itemBoxes'>Item7</div>
              <div className='itemBoxes'>item8</div>
              <div className='itemBoxes'>item9</div>
              </div>
              </div>
          </body>
    )}
}

export default ShopPage;