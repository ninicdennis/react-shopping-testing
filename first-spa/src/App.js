import React, { Component } from 'react';
import './App.css';
import ShopPage from './shopPage'
import FrontPage from './mainpage/index'
import ShopItem from './ShopItem/index'

class App extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        page:'Front'
      }
    };

    updatePage = (event) => {
      event.preventDefault()
      this.setState({page:event.target.value})
      console.log("Click has been made.")
    }
  render() {
    switch(this.state.page) {
      case 'Front':
      return <div>
        <label>
        <input type="radio" name="pageChange" value="Front" onClick={this.updatePage} />
        Front Page
        </label>
        <label>
        <input type="radio" name="pageChange" value="Shop" onClick={this.updatePage} />
        ShopItem
        </label>
        <label>
        <input type="radio" name="pageChange" value="ItemPage" onClick={this.updatePage} /> 
        Item Page
        </label>
        <FrontPage /></div>
      case 'Shop':
      return <div>
      <label>
      <input type="radio" name="pageChange" value="Front" onClick={this.updatePage} />
      Front Page
      </label>
      <label>
      <input type="radio" name="pageChange" value="Shop" onClick={this.updatePage} />
      Shop Page
      </label>
      <label>
        <input type="radio" name="pageChange" value="ItemPage" onClick={this.updatePage} /> 
        </label>
        Item Page
        <ShopPage /></div>
        
        case 'ItemPage':
        return <div>
        <label>
        <input type="radio" name="pageChange" value="Front" onClick={this.updatePage} />
        Front Page
        </label>
        <label>
        <input type="radio" name="pageChange" value="Shop" onClick={this.updatePage} />
        Shop Page
        </label>
        <label>
        <input type="radio" name="pageChange" value="ItemPage" onClick={this.updatePage} /> 
        Item Page
        </label>
          <ShopItem /></div>
      default:
      return <div>Page broke</div>
    }
  }
}

export default App;


//<ShopPage />
//<FrontPage />