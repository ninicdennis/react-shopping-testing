import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './styles.css';

class Footer extends Component {
  render() {
    return (
        <footer className = 'footerBackground'>
        <div className = 'footerCenter'>
        <Icon name='github' size='large' />
        Github.</div>
        </footer>
    );
  }
}

export default Footer;