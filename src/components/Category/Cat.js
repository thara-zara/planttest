import React from 'react'
import "./Cat.css"
import cat1 from "../../assets/sa.jpg"


const Cat = () => {
  return (
    <div className='cat'>
        <div className='cat-card'>
            <img src={cat1} alt="img"/>
            <div className='cat-body'>
               <h1>air purifying plant</h1> 
            </div>
        </div>
        <div className='cat-card'>
            <img src={cat1} alt="img"/>
            <div className='cat-body'>
           <h1>best selling plant</h1> 
           </div>
        </div>
        <div className='cat-card'>
            <img src={cat1} alt="img"/>
            <div className='cat-body'>
             <h1> low light plant</h1>  
             </div>
        </div>
    </div>
  )
}

export default Cat