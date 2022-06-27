import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  let [toDo,setToDo] = useState('')
  let [toDos,setToDos] = useState([])
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date();
  const day = dayNames[date.getDay()];
  let getTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  return (
    <div>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2 className="day">Whoop, it's {day} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i className="fas fa-plus" onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:'ongoing',time:getTime}])}></i>
        </div>
      </div>
      <div className="status-area">
        <div className="done">
          <h1 className="status-Heading">Done</h1>
          <div className="todos">
            {
              toDos.map((obj)=>{
                if (obj.status === 'done') {
                  return(
                    <div className="todo">
                      <div className="left">
                        <p>{obj.text}</p>
                        <p className="time">{obj.time}</p>
                      </div>
                      <div className="right">
                        <i className="fa fa-trash" onClick={()=>setToDos(toDos.filter(obj2 => obj2.id !== obj.id))}></i>
                      </div>
                    </div>
                  )
                }
                return null
              })
            }
          </div>
        </div>
        <div className="ongoing">
          <h1 className="status-Heading">Ongoing</h1>
          <div className="todos">
            {
              toDos.map((obj)=>{
              if (obj.status === 'ongoing') {
                return(
                  <div className="todo">
                    <div className="left">
                      <input type="checkbox" onChange={(e)=>{setToDos(toDos.filter(obj2=>{
                      if (obj2.id === obj.id) {
                        obj2.status='done'
                      } 
                      return obj2
                      }))}} value={obj.status} name="" id="" />
                      <p>{obj.text}</p>
                      <p className="time">{obj.time}</p>
                    </div> 
                    <div className="right">
                      <i className="fas fa-times" onClick={()=>setToDos(toDos.filter((obj2)=>{ 
                        if (obj2.id === obj.id) {
                          obj2.status='dropped'
                        }
                        return obj2
                      }))}></i>
                    </div>
                  </div>
                )
              }
              return null
              })
            } 
          </div> 
        </div>
        <div className="dropped">
          <h1 className="status-Heading">Dropped</h1>
          <div className="todos">
            {
              toDos.map((obj)=>{
                if (obj.status === 'dropped') {
                return(
                  <div className="todo">
                    <div className="left">
                    <i class="fas fa-undo" onClick={()=>
                      setToDos(toDos.filter((obj2)=>{
                      if (obj2.id === obj.id) {
                        obj2.status='ongoing'
                      }
                      return obj2
                    }) )
                    }></i>
                      <p>{obj.text}</p>
                      <p className="time">{obj.time}</p>
                    </div>
                    <div className="right">
                      <i className="fas fa-trash" onClick={()=>setToDos(toDos.filter(obj2 => obj2.id !== obj.id))}></i>
                    </div>
                  </div>
                )}
                return null
              })
            }
          </div>
        </div>
      </div>
      </div> 
    
  );
}

export default App;