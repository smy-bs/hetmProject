import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
    <div>
      <img className="ProductImg" src= {item?.img} /></div>
      <div>{item?.choice == true? "Concsious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true? "신제품":""}</div>
    </div>
  )
}

export default ProductCard
