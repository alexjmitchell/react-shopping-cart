import React from 'react'
import '../styles/size-buttons.css'



 const Sizes = (props) => {
   return(
     <div>
       <h2>Sizes:</h2>
       <div className="button-container">
        <button className="size-button">XS</button>
        <button className="size-button">S</button>
        <button className="size-button">M</button>
        <button className="size-button">ML</button>
        <button className="size-button">L</button>
        <button className="size-button">XL</button>
        <button className="size-button">XXL</button>
       </div>
     </div>
   )
 }

 export default Sizes