import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/about'>About으로 이동</Link>
      {/* <Link to='/products'>
        <h4>products으로 이동</h4>
      </Link> */}
     
    </div>
  )
}

export default Home