import React, { Component } from 'react';
import { Input, Header} from 'semantic-ui-react'
import './styles.css';

class FrontHeader extends Component {
  render() {
    return (
        <header className = "headerBackground">
            <div className = "leftSide">
            <Header as='h2' content='Bamazon' subheader='We sell stuff.'
  />
            <div>
            <Input icon='search' placeholder='Search...' />
            </div>
            </div>
        </header>
    );
  }
}

export default FrontHeader;