import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './styles.css';

class Footer extends Component {
  render() {
    return (
        <footer className = 'footerBackground'>
          <div className = 'footerCenter'>
            <Icon name='github' size='large' />
              <a href="https://www.github.com/pupper-bot">Github</a>
          </div>
        </footer>
    );
  }
}

export default Footer;

