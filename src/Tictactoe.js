import React, { useState } from 'react'
import './tictactoe.css'
import circle from "./circle.jpg";
import cross from "./cross.jpg";
let data=["","","","","","","","",""];

const Tictactoe = () => {
    const[count,setcount]=useState(0);
    const[lock,setlock]=useState(false);
    
    const user1=localStorage.getItem("user1");
    const user2=localStorage.getItem("user2");
    const [userturn ,setuserturn]=useState(`ITS ${user1} TURN`);
    
    const toggle=(e,num)=>{
          if(lock===true)
          {
            return 0;
          }
          if(count%2===0)
          {
               e.target.innerHTML=`<img src=${circle}>`;
               data[num]="o";
               setcount(count+1);
               setuserturn(e=>`ITS ${user2} TURN`);
          }
          else{
            e.target.innerHTML=`<img src=${cross}>`;
            data[num]="x";
            setcount(count+1);
            setuserturn(e=>`ITS ${user1} TURN`);
          }
          if(count>7)
          {
            setuserturn("MATCH TIED");

          }
          else{
          checkwin();
          }
          
    }
    const checkwin=()=>{
        if(data[0]===data[1]&&data[1]===data[2]&&data[2]!=="")
        {
           won(data[2]);
        }
        else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!=="")
        {
           won(data[5]);
        }
        else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!=="")
        {
           won(data[8]);
        }
        else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!=="")
        {
           won(data[6]);
        }
        else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!=="")
        {
           won(data[7]);
        }
        else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!=="")
        {
           won(data[8]);
        }
        else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!=="")
        {
           won(data[8]);
        }
        else if(data[6]===data[4]&&data[4]===data[2]&&data[2]!=="")
        {
           won(data[2]);
        }
        

    }
    const won=(userwon)=>{
      if(userwon==="o")
      {
        setuserturn(`Congradulation ${user1} You won`);
      } 
      else{
        setuserturn(`Congradulation ${user2} You won`);
      }
       setlock(true);
    }
      const reset=()=>{
        window. location. reload();
      }
  return (
    <div className="container" >
        <h1 className='title'>TIC TAC TOE GAME FOR <span>RENDERPUB</span> </h1>
        <h1> {userturn} </h1>
        <div className='board'>
          <div className='row1'>
            <div className='box' onClick={(e)=>{toggle(e,0)}}>
</div>
            
            <div className='box' onClick={(e)=>{toggle(e,1)}} ></div>
            <div className='box' onClick={(e)=>{toggle(e,2)}}></div>
          </div>  
          <div className='row2'>
            <div className='box' onClick={(e)=>{toggle(e,3)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,4)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,5)}}></div>
          </div>  
          <div className='row3'>
            <div className='box' onClick={(e)=>{toggle(e,6)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,7)}}></div>
            <div className='box' onClick={(e)=>{toggle(e,8)}}></div>
          </div>  

        </div>
        <button className='reset'  onClick={reset}>
           Reset
        </button>
    </div>

  )
}
export default Tictactoe;