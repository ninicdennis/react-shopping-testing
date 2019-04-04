import React, { Component } from 'react';
import ShopPage from './shopPage'
import './App.css';
import NormalHeader from './header/index.js'
import MainMain from './main/index.js'
import NormalFooter from './footer/index.js'

class App extends Component {
  render() {
    return (
    <div className ='centerMe'>
    <NormalHeader /><MainMain />
    <NormalFooter />
</div>
    );
  }
}

export default App;

//<div className ='centerMe'>
//<NormalHeader />
//<MainMain />
//<NormalFooter />
//</div>

//<ShopPage></ShopPage>