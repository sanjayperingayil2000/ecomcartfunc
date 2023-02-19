import React,{useState,useEffect} from 'react'
import "../../index.css"
import Items from '../../components/Items'
// import { macbookpageData } from '../../datas/provider/insidepagedatas/macbookpage'

const MacbookPage = () => {
  
  const[macbookpageData,setmacbookpageData]=useState("");

  useEffect(()=>{
    fetch("https://ecomercebackapi01.vercel.app/macbookpageData")
    .then(res=>res.json())
    .then(json=>setmacbookpageData(json))
    .catch(err=>console.log("error"))
  },[])

  return (
    <div className='bestseller'>
    {
    macbookpageData && macbookpageData.map((val)=>{
        return(
          <>
            <Items key={val._id} img={val.img} rating={val.rating} name={val.name} original={val.original} offer={val.offer}/>
          </>
        ) 
      })
    }
  </div>
  )
}

export default MacbookPage