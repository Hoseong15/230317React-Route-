import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Products</h1>
      <button onClick={navigate('/products/:01')}>ProductDetail로 이동</button>
    </div>
  )
}

export default Products