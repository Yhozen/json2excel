import React from 'react'
import '../components/layout.css'
import Converter from 'fast-component2excel'
import dragDrop from 'drag-drop'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.setURL = this.setURL.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.state = {
      files: []
    }
  }
  componentDidMount () {
    dragDrop('body', files => this.setState({files}) )
  }
  async setURL () {
    const [file] = this.files
    const json = await Converter.convertExcelToJson(file)
    console.log(json);
  }

  render () {
    return (
      <div>
      <h1>Form.io form to Excel example</h1>
      <p>Put a Form.io JSON URL below (or use the default) and press build and then download the file</p>
      <button onClick={this.setURL}>Build</button> <br/>
    </div>
    )
  }
}

export default IndexPage
