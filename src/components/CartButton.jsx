import { useState } from "react";

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
   const  [count,setCount]=useState(0)
    const handlerCart=()=>{
      setCount(count+1)

    }
   
    const  handlerRemove=()=>{
      setCount(count-1)

    }
    const  handlerUpgrade=()=>{
      setCount(count+1)

    }


  return <>
  {/* add to cart button */}
  {count ? (
 <div>
 <button onClick={()=>handlerRemove()}>Remove -</button>
 <p className="count-item">{count} </p>
 <button    onClick={()=>handlerUpgrade()} >Add +</button>
</div>
  ):(<button style={{backgroundColor:"blue",width:"100%",marginBottom:"0px"}} onClick={()=>handlerCart()}  >Add To Cart</button> )}
  
  {/* count with - and  + button */}
 
  </>;
};
export default CartButton
// onClick={()=>handlerCart()}