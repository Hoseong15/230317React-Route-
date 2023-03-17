import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {
  // console.log 찍었을 때 key, value object를 반환한다
  // id이라는 key이 있고, 01이라는 value 값이 있다.
  // id이라는 key값은  path='/products/:id' 여기서 온다.
  // useParams라는 리액트 훅을 사용하면 URL id값을 가져올 수 있다.
 const params = useParams()
 console.log(params)

 const navigate = useNavigate('/')

  // useNavigate 함수를 리턴한다
  // 함수의 파라미터 안에 내가 이동하고 싶은 경로 작성
  // 함수 안에서 사용할 때는 useNavigate를 사용하는게 좋다.
  // 메뉴(li-a)처럼 함수 호출없이 이동할 때는 Link 사용
  const goHome = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>ProductDetail</h1>
      <button onClick={goHome}>홈으로 이동</button>
      </div>
  )
}

export default ProductDetail