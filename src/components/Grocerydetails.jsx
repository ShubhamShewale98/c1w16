import React from "react"
import data from '../data.json'
import CartButton from "./CartButton"
import GroceryItem from "./GroceryItem"


const GroceryDetails = ()=>{
// console.log(data)
const handlerCart=()=>{
  return (<>
 <CartButton/>
 {/* console.log("shubham") */}

  </>)
  

}

    return(
        <>
        <h1>Groceries</h1>
        <div className="container" style={{display:"grid",justifyContent:"space-around",gridTemplateColumns:"repeat(4,220px)",gap:"100px"}}>
            {/* map through the data and display the cards */}
              {data.map((item)=>
            <>  <div><GroceryItem    {...item}/> <span></span>
         <CartButton/>
          </div> 
            </>
            )}
        
        </div>
        </>
    )
}
export default GroceryDetails