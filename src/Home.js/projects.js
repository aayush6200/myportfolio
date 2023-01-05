import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import './projects.css'

const Project=(props)=>{
   
    return(
        
        <Card id='one' style={{display:'flex',flexDirection:'column',margin:'auto',justifyContent:'space-around'}} >

                 <ul style={{ display:'flex',flexDirection:'column',listStyle:"none",flexFlow:"1"}}>
                   <li><h1>{props.data[0]}</h1></li>
                   <li><p  style={{fontFamily:'courier',color:'beige'}}>{props.data[1]}</p></li>   
                   </ul>
                   <button className="mycodebtn" onClick={()=>{window.open(`${props.data[2]}`)}} style={{margin:'auto'}}>View Code</button>
                   
                
                
               
        </Card>
       
        
      
    )
}

export default Project;