import Bubble from './bubblesort';
import Merge from './mergesort';
import myObjects from './global';

import { useState } from 'react';

import './myApp.css'




let obj=myObjects;
function MyApp() {
  const [bubble,setBubble]=useState(1)
  const [zero,setZero]=useState(0)
  const [one,setOne]=useState(0)
  const [two,setTwo]=useState(0)
  

  // const changeSize=()=>{
    
  // }

  const generateRandom=()=>{
    let c1=(Math.random()*100)+120
    let c2=(Math.random()*100)+150
    let c3=(Math.random()*100)+160
    return [c1,c2,c3]

}

// const generateElements=()=>{
//   let num=parseInt(Math.random()*35)
//   return num
// }

  const generate=()=>{
    let k=parseInt(Math.random()*30)
    for (let i=0;i<obj.length;i++){
      
      let color=generateRandom();
      let div=document.createElement('div')
      div.id=`${i}`
      div.style.height=`${obj[i]+250}px`
      div.style.width='10px'
      div.style.backgroundColor=`rgb(${color[0]},${color[1]},${color[2]})`
      document.getElementById('sorted').appendChild(div)

    }
  }


  const bubbleHandler=(enteredData)=>{
      let i=enteredData[0][0]
      let firstVal=enteredData[0][1]
      let j=enteredData[1][0]
      let secondVal=enteredData[1][1]
      let color=generateRandom()
        document.getElementById(`${i}`).style.backgroundColor=`rgb(${color[0]},${color[1]},${color[2]})`
        document.getElementById(`${i}`).style.height=`${firstVal+250}px`
        document.getElementById(`${i}`).style.width='10px'
      

        document.getElementById(`${j}`).style.backgroundColor=`rgb(${color[0]},${color[1]},${color[2]})`
        document.getElementById(`${j}`).style.height=`${secondVal+250}px`
        document.getElementById(`${j}`).style.width='10px'
      
     
  }

  const bubbleSort=()=>{
    setOne(1)
    setZero(0)
    setTwo(0)
   
  }
  const mergeHandler=(entered)=>{
      let i=entered[0][0]
      let firstVal=entered[0][1]
     
      let color=generateRandom()
        document.getElementById(`${i}`).style.backgroundColor=`rgb(${color[0]},${color[1]},${color[2]})`
        document.getElementById(`${i}`).style.height=`${firstVal+250}px`
        document.getElementById(`${i}`).style.width='10px'


  }

  const mergeSort=()=>{
    setOne(0)
    setZero(0)
    setTwo(2)
  }

  return (
    
    <>
    <div id='sort' >
      <div className='mybtn'>
      <button className='sort-btn' type='submit' onClick={generate} >Generate</button>
      <button className='sort-btn' type='submit' onClick={bubbleSort}>BubbleSort</button>
      <button className='sort-btn' type='submit' onClick={mergeSort}>MergeSort</button>
      <button className='sort-btn' type='submit' onClick={()=>{window.location.reload()}}>Exit</button>
      </div>


      {!zero==1 &&<div id='sorted'></div>}
      {!one==0 && <Bubble onSaveBubble={bubbleHandler} />}
      {two===2 && <Merge onSaveSelection={mergeHandler}/>}

      
    </div>

    </>
  );
}

export default MyApp;

