import React, { Component } from 'react';
import { Input, Header, } from 'semantic-ui-react'
import './styles.css';

class FrontHeader extends Component {
  render() {
    if (this.props.userLog === true)
      return (      
        <header className = "headerBackground">
          <div className = "leftSide">
            <Header as='h2' content='Bamazon' subheader='We sell stuff.' />
          <div>
            <div>Logged In</div>
              <Input icon='search' placeholder='Search...' />
            </div>
          </div>
        </header>
  )
    return (
        <header className = "headerBackground">
          <div className = "leftSide">
            <Header as='h2' content='Bamazon' subheader='We sell stuff.' />
          <div>
            <div>Not Logged In</div>
              <Input icon='search' placeholder='Search...' />
            </div>
          </div>
        </header>
    );
  }
}

export default FrontHeader;