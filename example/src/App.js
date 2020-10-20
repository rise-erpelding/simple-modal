import React, { Component } from 'react'

import { SimpleModal } from 'simple-modal'
import 'simple-modal/dist/index.css'

class App extends Component {
  render() {
    return (<SimpleModal show={true}><div>Hello modal</div></SimpleModal>)
  }
}

export default App
