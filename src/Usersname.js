import React, { useState } from 'react'
import "./username.css"
import { Outlet,Link } from 'react-router-dom';
import circle from "./circle.jpg"
import cross from "./cross.jpg"
export const Usersname = () => {
    const[user1,setuser1]=useState("");
   
    const[user2,setuser2]=useState("");
    localStorage.setItem("user1",user1);
    localStorage.setItem("user2",user2);
  return (
    <div className='container' >
     <h1>PLAYER1</h1>
     <input autoComplete="off"  placeholder='user1 enter  your name' value={user1} onChange={e=>setuser1(e.target.value)} /><br></br>
     <img src={circle}></img>
      <h1>PLAYER2</h1>
      <input autoComplete="off" placeholder='user2 enter  your name'value={user2} onChange={e=>setuser2(e.target.value)}/><br></br>
      <img src={cross}></img>
      <br></br>
      <br></br>
      <div className='div'>
      <Link className='startgame'to="/startgame">Start game</Link>
      </div>
      
    <Outlet/>
    </div>
    
  )
}
