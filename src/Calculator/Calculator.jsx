import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BollingVerdict from './BollingVerdict'

const convertToCelsius = (temperature) => {
  return (temperature - 32) / 1.8
}

const convertToFahrenheit = (temperature) => {
  return temperature * 1.8 + 32
}

const convertTemp = (temperature, convertFunc) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) return ''

  return Math.round(convertFunc(temperature) * 1000) / 1000
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handlerChange = (scale) => (event) => {
    this.setState({
      temperature: event,
      scale: scale
    })
  }

  render() {
    const { temperature, scale } = this.state
    const celsius = scale === 'f' ? convertTemp(temperature, convertToCelsius) : temperature
    const fahrenheit = scale === 'c' ? convertTemp(temperature, convertToFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput title='Celsius' temperature={celsius} onTemperatureChange={this.handlerChange('c')} />
        <TemperatureInput title='Fahrenheit' temperature={fahrenheit} onTemperatureChange={this.handlerChange('f')} />
        <BollingVerdict celsius={Number(celsius)} />
      </div>
    )
  }
}

export default Calculator
