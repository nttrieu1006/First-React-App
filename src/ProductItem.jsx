import React, { Component } from 'react'

export class ProductItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { product } = this.props

    return (
      <div className='product-item'>
        <input />
        {product.name} - {product.id}
      </div>
    )
  }
}

export default ProductItem
