import React, { Component } from 'react'
import SimpleModal from 'simple-modal'
import 'simple-modal/dist/index.css'

class App extends Component {

  render() {
    const modalStyle = {
      position: 'fixed',
      background: 'white',
      width: '80%',
      height: '200px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid black'
    };
    return (<SimpleModal show={false}><div style={modalStyle}>Hello modal</div></SimpleModal>)
  }
}

export default App
