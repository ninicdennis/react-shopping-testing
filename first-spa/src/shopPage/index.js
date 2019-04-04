import React, { Component } from 'react';
import './styles.css'

class shopPage extends Component {
  render() {
    return (
        <body className ='shopFlex'>
            <div className = 'shopHeader'> This is the header.</div>
            <div className ='shopSideBar'> This is the side bar.</div>
            <div className = 'shopMain'> This is the Main Body. </div>
        </body>
    );
  }
}

export default shopPage;