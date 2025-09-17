
import img1 from '../assets/tick.png';
import img2 from '../assets/not_tick.png';
import Deleteimg from '../assets/delete.png';
import { useEffect, useState } from 'react';
const TodoItems = ({title,id,deleteTask}) => {
 
  const[imgSrc,setimgSrc]=useState(img2)
  const iscomplet= imgSrc===img1;
   
  return (
    <div style={{display:'flex',margin:'10px', justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                     <img src={imgSrc} alt="image" style={{height:'20px',marginRight:'10px'}}onClick={()=>setimgSrc((prev)=>prev===img2?img1:img2)}  />
                      <li key={id} style={{textDecoration:iscomplet?'line-through':'none',opacity:iscomplet?'.7':'1'}}>{title}</li>
                </div>
             <img src={Deleteimg} alt="image" style={{height:'20px'}} onClick={()=>deleteTask(id)}/>
            </div> 
  )
}

export default TodoItems

