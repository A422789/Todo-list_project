import React, { useEffect, useRef,useState } from 'react'
import img from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
    const inputRef=useRef(null)
         const intialValue=[
        {
        id:1,
        title:'Learn React',
       
    },
    {
        id:2,
        title:'Learn Talwind',
      
    }
    ]
    const[Task,setTask]=useState(()=>{
      const SavedTask=localStorage.getItem('Task')
      if(SavedTask){
        return JSON.parse(SavedTask)
      }else{
        return []
      }
    });
   useEffect(()=>{
     localStorage.setItem('Task',JSON.stringify(Task))
   },[Task])
    console.log(localStorage.Task)
    const add=()=>{
      const text=inputRef.current.value.trim()//عشان تحذف المسافات
      if(text==='')return;
      const newTask={
         id: Date.now(),
        title:text,
     
      }
      console.log(text)
      setTask((prev)=>[
        ...prev,
        newTask
      ])
      inputRef.current.value=''
    }
   const deleteTask=(ID)=>{
       const newList=[];
     for(let i=0;i<Task.length;i++){
       if(Task[i].id!==ID){
         newList.push(Task[i])
       }
    }
    // newList=Task.filter((item)=>item.id!==ID) هاي طريقة اسرع ومتل النتيجة يعني هاي 
    //الفانكشن فلتر بتعمل لوب على الاريي وبتتجاهل العنصر الي قيمة الريتيرن بتكون عنده فولس
    // واذا اه بخليه واذا فولس بتجاهلهIDيعني بمر على الايدي الاول هل متل الايدي 
    setTask(newList);
   }
  
  return (
    <div className='todo'>
        <h1><img src={img} style={{height:'30px'}}/> Add your Tasks</h1>
       <div>
        <input type="text" placeholder='Enter your task' ref={inputRef}  />
        <button type='button' onClick={add}>Add +</button>
       </div>
           <div>
       
      <ul style={{listStyle:'none',textAlign:'left',width:'70%'}}>
        {
        Task.map((item)=>{
            return <TodoItems title={item.title} id={item.id} deleteTask={deleteTask}/>
        })}
      </ul>
    </div>
      
    </div>
  )
}

export default Todo
