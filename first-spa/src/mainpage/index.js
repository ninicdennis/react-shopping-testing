import React, { Component } from 'react';
import './styles.css'
import MainMain from "./main/index"
import NormalHeader from "./header/index"
import NormalFooter from "./footer/index"

class MainPage extends Component {
  render() {
    return (<div className = 'centerMe'>
        <NormalHeader />  
        <MainMain />
        <NormalFooter />
        </div>
        );
  }
}

export default MainPage;