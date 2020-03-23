import React, { Component } from 'react';
import { render } from 'react-dom';

import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Body from './components/Body'


import './style.css';

class App extends Component {
  state = {
    name: 'Yinu',
    modalOpen: true,
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
    const { modalOpen } = this.state
    return (
      <div>
      <Navbar toggleModal={this.toggleModal}/>
      <Menu 
      modalOpen={modalOpen}
      toggleModal={this.toggleModal}
      />
      <Body />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
