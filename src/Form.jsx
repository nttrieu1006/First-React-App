import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      checkbox: true
    }
  }

  handleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value

    const { name } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name: <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Address:
            <textarea type='address' name='address' value={this.state.address} onChange={this.handleChange}></textarea>
          </label>
          <input type='checkbox' name='checkbox' checked={this.state.checkbox} onChange={this.handleChange}></input>
          <input type='submit' value='Submit' onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default Form
