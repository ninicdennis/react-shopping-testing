import React, { Component } from 'react';
import NormalHead from '../mainpage/header/index'
import './styles.css';
import { Image, Header } from 'semantic-ui-react'

class ShopItem extends Component {
  render() {
    return(
    <div>
      <NormalHead />
      <div className='item-body'>
      <div className='itemImage'>
        <Image src={require('../images/image.jpg')} alt = 'sample' size='large'/>
      </div>
      <div className='itemDesc'>
        <Header as='h3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer lobortis turpis in hendrerit ornare. Nam viverra quam quis scelerisque consectetur.
          Donec et dui at libero eleifend auctor. Aliquam vestibulum ex sed velit rutrum, ut convallis nunc volutpat. 
          Phasellus a euismod augue. Etiam cursus metus sed est gravida, in pharetra neque viverra. 
          Phasellus sed faucibus leo. Sed dictum ligula eros, eget fermentum leo tempor mattis. 
          Sed ac magna quis odio bibendum pretium.
        </Header>
      </div>
      </div>
      <div>
        hello
      </div>
    </div>
    )
  }
}

export default ShopItem;

