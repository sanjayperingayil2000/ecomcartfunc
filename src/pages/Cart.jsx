import React,{useReducer} from 'react'
// import { useContext } from 'react';
import Header from '../components/Header'
// import { useLocation } from 'react-router-dom'
import {cartdata} from "../datas/cartdata"
import Footer from '../components/Footer'


const initialState = cartdata
const reducer = (state, action) => {
  
  switch (action.type) {
    case "increment":
      return state.map((cart) => {
        if (cart.offer === action.offer) {
          // const temqty=cart.qty + 1
          return { ...cart, qty: cart.qty+1 };
        } else {
          return cart;
        }
      });
      case "decrement":
        return state.map((cart) => {
          if (cart.offer === action.offer) {
            // const temqty=cart.qty + 1
            return { ...cart, qty: cart.qty-1 };
          } else {
            return cart;
          }
        });
    default:
      return state;
  }
};

function Cart() {

  // const [price,setprice]=useState(1)
  const [cart, dispatch] = useReducer(reducer, initialState);

  const incrementfunc = (cart) => {
    dispatch({ type: "increment", offer: cart.offer });
  };
  const decrementfunc = (cart) => {
    dispatch({ type: "decrement", offer: cart.offer });
  };

  return (
    <div>
        <Header/>
        <div style={{width:"100%",backgroundColor:"rgb(246, 246, 246)"}}>
          <h6 style={{color:"blue", textAlign:"center", padding:"1rem"}}>cart</h6>
        </div><br/><br/><br/>
        <div style={{margin:"0 20%"}}>
          <div style={{width:"100%",backgroundColor:"rgb(246, 246, 246)",margin:"2px"}}>
            <div style={{width:"40%",display:"inline-block"}}>PRODUCT</div>
            <div style={{width:"20%",display:"inline-block"}}>PRICE</div>
            <div style={{width:"20%",display:"inline-block"}}>QTY</div>
            <div style={{width:"20%",display:"inline-block"}}>UNIT PRICE</div>
          </div><br/>
          <hr/><br/>
          

          {
          // let a=1
          // let price=1
          cart && cart.map((val)=>{
            // let price=1
            // const [price,setprice]=useState(1)
              return(
                <>
                  <div style={{width:"100%",margin:"2px"}}>
                    <div style={{width:"40%",display:"inline-block"}}>
                      <img style={{width:"5rem",height:"5rem",margin:"0 10%",padding:"1px", objectFit:"contain"}} alt="" src={val.img}/>
                      <span>{val.name}</span>
                    </div>
                    <div style={{width:"20%",display:"inline-block"}}>
                      {val.qty*val.offer}
                      {/* {cart[product.id] || 0} */}
                    </div>
                    <div style={{width:"20%",display:"inline-block"}}>
                      <span style={{backgroundColor:"rgb(246, 246, 246)"}}>
                        <button style={{backgroundColor:"rgb(246, 246, 246)"}} onClick={()=>incrementfunc(val)}>+</button>
                        &nbsp;&nbsp;&nbsp;<span>{val.qty}</span>&nbsp;&nbsp;&nbsp;
                        <button style={{backgroundColor:"rgb(246, 246, 246)"}} onClick={()=>decrementfunc(val)}>-</button>
                      </span>
                    </div>
                    <div style={{width:"20%",display:"inline-block"}}>{val.offer}</div><br/><br/><hr/><br/>
                  </div>
                </>
              )
            })
          }<br/><br/>
          <div  style={{width:"40%",margin:"0 30%"}}>
            <div className='d-flex justify-content-between'>
              <div>subtotal</div>
              <div>20000</div>
            </div><br/>
            <div className='d-flex justify-content-between'>
              <div>shipping fee</div>
              <div>3000</div>
            </div><br/>
            <div className='d-flex justify-content-between'>
              <div>coupon</div>
              <div>no</div>
            </div><hr/>
            <button style={{width:"100%",padding:"1rem",backgroundColor:"rgb(78, 158, 255)",borderRadius:"6px"}}>PAY</button>
          </div>
          

          
        </div>
        <br/><br/><br/><br/><Footer/>
    </div>
  )
}

export default Cart
