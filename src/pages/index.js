import React from 'react'
import '../components/layout.css'
import json2Excel from 'json2excel'

const TEST_URL = 'https://tlobzrztlyxicim.form.io/user/login'

async function callback (workbook) {
  let blobOutput = await workbook.outputAsync()
  let url = window.URL.createObjectURL(blobOutput)
  console.log(url)
  return url
}

class IndexPage extends React.Component {
  constructor() {
    super()
    this.setURL = this.setURL.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.state = {
      blobURL: null,
      URL: TEST_URL
    }
  }
  setURL () {
    const URL = this.state.URL
    json2Excel(URL, callback).then(blobURL => this.setState({blobURL}))
  }
  inputChange(event) {
    this.setState({URL: event.target.value})
  }
  render () {
    return (
      <div>
      <h1>Form.io form to Excel example</h1>
      <p>Now go build something great.</p>
      <input placeholder='Form.io JSON URL' onChange={this.inputChange}></input><br/>
      <button onClick={this.setURL}>Build</button> <br/>
      <a id='download' href={this.state.blobURL} download={'out.xlsx'}>Download file</a>
    </div>
    )
  }
}

export default IndexPage
