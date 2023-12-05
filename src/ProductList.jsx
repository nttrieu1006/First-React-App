import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: '1a',
          name: 'Sony'
        },
        {
          id: '2b',
          name: 'Iphone'
        },
        {
          id: '3c',
          name: 'Samsung'
        }
      ]
    }
  }

  orderProductList = () => {
    this.setState((prevState) => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    }))
  }
  render() {
    return (
      <div>
        <div>ProductList</div>
        <button onClick={this.orderProductList}>Order</button>
        <div className='product-lits'>
          {this.state.productList.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductList
