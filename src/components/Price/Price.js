import React from 'react';
import PriceData from "./PriceData";
import PriceItem from "./PriceItem"

const Price = () => {
  const Prices = () =>{
    return(
      PriceData.map((item, index)=>{
        return(
          <PriceItem
          image={item.img}
          name={item.name}
          price={item.price}
          sub={item.sub}
          />
        )
      })
    )
  }
  return (
    <>
    {Prices()}
    </>
  )
}

export default Price
