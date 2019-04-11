import React, { Component } from 'react';
import { Header, Button, Icon} from 'semantic-ui-react'
import './styles.css'

class ShopPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sideBarStatus: true
      }
    }

  renderSideBar = () => {
    switch (this.state.sideBarStatus) {
      case true:
        return (<div className = 'sidebar-menu'>
        <Button icon value='close' onClick ={this.updateSideBar}>
          <Icon name='sidebar' />
        </Button>
        <Header as='h2'>Sidebar Menu</Header>
      </div>)
      case false:
        return (
          <div className = 'closed-state'>
        <Button icon value='open' onClick ={this.updateSideBar}>
          <Icon name='sidebar' />
        </Button>
      </div>
        )
      default:
        return (<div className = 'sidebar-menu'>
        <Button icon calue='close' onClick ={this.updateSideBar}>
          <Icon name='sidebar' />
        </Button>
        <Header as='h2'>Sidebar Menu</Header>
      </div>)
    }
  }

  updateSideBar = (event) => {
    event.preventDefault();
    this.setState({sideBarStatus: !this.state.sideBarStatus })
  }

  render() {
    return (
        <body>
            <div className ='shop-page'>
            {this.renderSideBar()}
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
              <div className='itemBoxes'>item10</div>
              </div>
              </div>
          </body>
    )}
}

export default ShopPage;