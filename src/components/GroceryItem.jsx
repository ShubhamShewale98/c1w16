import { useState } from "react";
import CartButton from "./CartButton";

// reusable card component
const GroceryItem = (props) => {
//  console.log(props)
  const {id,title,imgURL,mrp,sellingPrice,discount} = props;





  return <>
  <div style={{textAlign:"center" ,width:"250px",height:"310px",border:"1px solid red"}}>
  <h3 style={{borderRadius:"45%",backgroundColor:"red",width:"50px",marginRight:"-30px"}}>{discount}</h3>
    <img src={imgURL} alt=""/> <br/>
<span>{title}</span> <br/>

<span style={{color: "#000",
    fontWeight: "bold",
    
  
   }}> M.R.P:{sellingPrice}</span>
<span style={{marginLeft:"50px",textDecoration:"line-through"}}>{mrp}</span> <br></br>

{/* <button style={{backgroundColor:"blue",width:"100%",marginBottom:"0px"}} onClick={()=>handlerCart()} >Add To Cart</button> */}
  </div>
  
  
  
  
  </>;
};
export default GroceryItem;
