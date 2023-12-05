import React, { Component, createRef } from 'react'

export class Uncontrolllercomponent extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.fileInput = createRef()
    this.state = {
      selectedFile: null
    }
  }

  handlerSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)

    console.log(this.state.selectedFile)
  }

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <label>
            Name: <input type='text' name='name' ref={this.input} defaultValue='abc' />
          </label>
          <input type='file' name='avatar' onChange={this.onFileChange} />
          <input type='submit' value='submit' ref={this.fileInput} />
        </form>
      </div>
    )
  }
}

export default Uncontrolllercomponent
