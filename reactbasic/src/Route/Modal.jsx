import React from 'react'
import { useEffect, useState } from 'react'
import './Modal.css'


const Modal = () => {
  let [modal, setModal] = useState(false)
  // useEffect(() => {
  //   setTimeout(() => {setModal(true)}, 2000)
  // })



  // 2초후에 열리게 2초후에 다시 닫게 하는법 //
  
    useEffect(() => {
    const openModal = setTimeout(() => {
      setModal(true);
    }, 2000);
    const closeModal = setTimeout(() => {
      setModal(false);
    }, 4000);
    return () => {
      clearTimeout(openModal);
      clearTimeout(closeModal);
    }
  }, [])

  // return (
  //   <div>
  //     {
  //       modal == true ? <h1 className='modalclose'>2초 후에 사라지는 모달</h1> : null
  //     }
  //   </div>
  // )


  // 2초후에 닫히고 2초후에 다시 열리게 하는법 //
  return (
    <div>
      { modal && <h1 className='modalclose'>2초 후에 사라지는 모달</h1> }
    </div>
  )


}
export default Modal