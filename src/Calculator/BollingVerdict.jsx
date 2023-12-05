import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export class BollingVerdict extends Component {
  render() {
    return <div>The water would {this.props.celsius >= 100 ? '' : 'not'} boild</div>
  }
}

BollingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired
}

export default BollingVerdict
