import Query from '../Query/query';
import './navbar.css'
import './logo192.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import { Tooltip } from 'bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react';
import { useState } from 'react';



const Nav=()=>{
   
    const [val,setVal] =useState(0)
    const [algo,setAlgo]=useState(0)

 

    
   

      
    return(
        <>
        <header className='primary-header' style={{display:'flex',justifyContent:'space-between'}}>
            <div></div>
           <nav>
            <ul className='list-headers ' style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>

                <li className="list-items" style={{color:'whitesmoke'}} onClick={()=>window.location.reload()}><Button variant="outline-primary">Home</Button></li>
                <li className="list-items" style={{color:'whitesmoke'}}>
              <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary dropdown-toggle" id="dropdown-basic">
                        Contact
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='bg-black' >
                        <Dropdown.Item className='bg-black mb-2' type='button'  onClick={()=>window.open('https://www.linkedin.com/in/aayush-thapaliya-154018252')} style={{width:'20px',paddingRight:'10px'}} ><i class="fa-brands fa-linkedin fa-2xl  fa-beat-fade mb-2" style={{color:'blue'}}></i></Dropdown.Item>
                        <Dropdown.Item className='bg-black mb-2'  type='button' onClick={()=>window.open('https://github.com/aayush6200')} style={{width:'20px'}} href="#/action-2"><i class="fa-brands fa-github fa-2xl fa-beat-fade mb-2" style={{color:'white'}} ></i></Dropdown.Item>
                        <Dropdown.Item className='bg-black mb-2' type='button' onClick={()=>window.open('https://https://www.instagram.com/aayush_thappaliya')}   style={{width:'20px'}} href="#/action-3"><i class="fa-brands fa-instagram fa-beat-fade fa-2xl" style={{color:'royalblue'}}></i></Dropdown.Item>
                        <Dropdown.Item className='bg-black' type='button' onClick={()=>window.scroll(0,document.body.scrollHeight)}  style={{width:'20px'}} href="#/action-3"><i class="fa-solid fa-envelope fa-2xl fa-beat-fade" style={{color:'steelblue'}}></i></Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>


                </li>
                
                {/* <li className="list-items" style={{color:'whitesmoke'}}>
              <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary dropdown-toggle" id="dropdown-basic">
                        Projects
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='bg-black' style={{width:'30px'}}>
                        <Dropdown.Item className='bg-black mb-2' type='button'  onClick={projectsHandler} style={{width:'30px',paddingRight:'10px',color:'beige'}} >Sorting Algorithms</Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>


                </li>
                 */}

                <li className="list-items" style={{color:'whitesmoke'}}><Button onClick={()=>window.open('https://www.linkedin.com/in/aayush-thapaliya-154018252/overlay/1635509265495/single-media-viewer/')}  variant="outline-info" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View Resume">View</Button></li>
                <li className="list-items" style={{color:'whitesmoke'}}><Button variant="outline-danger">About</Button></li>
                
            </ul>
            </nav>
      
        </header>
       
      
       </>
        
    )
   
}

export default Nav;
