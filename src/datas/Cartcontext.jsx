import React, { useState } from 'react'
import { createContext } from 'react'


export const datas = createContext();
const Details = (props) => {

    const [Data, setData] = useState([
        {img: 'https://avatars.mds.yandex.net/get-mpic/5236248/img_id3611871067916804795.jpeg/orig', 
        name: 'Apple pencil', 
        offer: '7000'},
        {img: 'https://avatars.mds.yandex.net/get-mpic/5236248/img_id3611871067916804795.jpeg/orig', 
        name: 'Apple pencil',  
        offer: '8000'}
    ])

  return (
    <div>
        <datas.Provider value={[Data,setData]}>
            {props.children}
        </datas.Provider>
        
    </div>
  )
}

export default Details;