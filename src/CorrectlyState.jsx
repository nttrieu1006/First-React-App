import React, { Component } from 'react'

const fetchComment = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['A', 'B', 'C', 'D', 'E', 'F'])
    }, 1000)
  })

export class CorrectlyState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comment: []
    }
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 })
    fetchComment()?.then((res) => this.setState({ comment: res }))
  }

  render() {
    console.log(this.state)
    return <div>CorrectlyState. Count : {this.state.count}</div>
  }
}

export default CorrectlyState
