import React, { Component } from 'react';
import './App.css';
import ShopPage from './shopPage'
import FrontPage from './mainpage/index'
import ShopItem from './ShopItem/index'
import MainMain from './mainpage/header/index'

class App extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        page:'Front',
        itemInCart:0,

      }
    };
    addItem = (event) => {
      event.preventDefault()
      this.setState({itemInCart: this.state.itemInCart+1 })
    }
    removeItem = (event) => {
      event.preventDefault()
      let newTot = this.state.itemInCart -1
      newTot = newTot < 0 ? 0 : newTot
      this.setState({itemInCart: newTot});
    }

    renderMainContent =() => {
      switch(this.state.page) {
        case 'Front':
          return <FrontPage cartCount = {this.state.cartCount} />;
        case 'Shop':
          return <ShopPage cartCount = {this.state.itemInCart} removeItem={this.removeItem} addItem={this.addItem} />
        case 'ItemPage':
          return <ShopItem cartCount = {this.state.cartCount} />
        default:
        return <div>Page Broke</div>;
      }
    }
    updatePage = (event) => {
      event.preventDefault()
      this.setState({page:event.target.value})
      console.log("Click has been made.")
    }
  render() {
     return (
     <div>
    <label>
    <input type="radio" name="pageChange" value="Front" onClick={this.updatePage} />
    _Front Page_
    </label>
    <label>
    <input type="radio" name="pageChange" value="Shop" onClick={this.updatePage} />
    _Shop Page_
    </label>
    <label>
    <input type="radio" name="pageChange" value="ItemPage" onClick={this.updatePage} /> 
    _Item Page_
    </label>
    <MainMain cartCount = {this.state.itemInCart} userLog = {this.state.page !== 'Front'} removeItem={this.removeItem} addItem={this.addItem}/>
    {this.renderMainContent()}
    </div>
    );
  }
}

export default App;
