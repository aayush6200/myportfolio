import Nav from './Navbar/navbar';
import Intro from './Home.js/Intro';
import Query from './Query/query';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import MyApp from './components/myApp';
import image from './universe.jpg'


function App() {
  
  
  const [val,setVal]=useState(0)
  const [algo,setAlgo]=useState(0)

  const moveRight=(event)=>{
    setVal(1)
    document.getElementById('apps-1').style.backgroundColor="pink"
    

}
const moveLeft=()=>{
    
    setVal(0)
    document.getElementById('apps-1').style.backgroundColor="black"
    
  }

  const projectHandler=()=>{
    
    setAlgo(1)
  }


  // const sortingHandler=()=>{

  // }


  return (
    <>

   {/* { val===1 && <div className="App-2 ">
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div className="mybox-2 mx-3" id="box-1" style={{marginTop:'9px'}}>
                    <i id="btn-1" onClick={moveLeft} class="fa-solid fa-moon"></i></div>
                    <Dropdown style={{marginTop:'9px'}}>
                    <Dropdown.Toggle variant="outline-secondary dropdown-toggle" id="dropdown-basic">
                        Projects
                    </Dropdown.Toggle>

                    <Dropdown.Menu  style={{backgroundColor:'steelblue'}}  >
                        <Dropdown.Item  type='button'  onClick={projectHandler} style={{ backgroundColor:'steelblue',borderRadius:'1px',width:'10px',height:'20px'}} >Sorting Algorithms</Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>
                    
                
    
      navbar is given below
      <BrowserRouter>
              <Nav/> 
      </BrowserRouter>

</div>
      { algo===1 && <div className='sort-card ' style={{display:'flex',marginTop:'30px',marginLeft:'20%',height:'100vh'}}>
    <MyApp/>
    </div>}
   
   
   {algo!=1 && <> <Intro/>
    <div style={{marginTop:'5rem'}}>
    <Query/>
    </div>
    </>}

    </div>
    } */}

    { (val===0 || val===1)  && <div className="App-1" id='apps-1'>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          {val===0 && <div className="mybox-1 mx-3 "  id="box-1" style={{marginTop:'9px'}} ><i id="btn-1" onClick={moveRight} class="fa-solid fa-moon"></i></div>}
          {val===1 && <div className="mybox-2 mx-3 "  id="box-2" style={{marginTop:'9px'}} ><i id="btn-1" onClick={moveLeft} class="fa-solid fa-moon"></i></div>}
          <Dropdown style={{marginTop:'9px'}}>
                    <Dropdown.Toggle variant="outline-secondary dropdown-toggle" id="dropdown-basic">
                        Projects
                    </Dropdown.Toggle>

                    <Dropdown.Menu  style={{backgroundColor:'steelblue'}}  >
                        <Dropdown.Item  type='button'  onClick={projectHandler} style={{ backgroundColor:'steelblue',borderRadius:'1px',width:'10px',height:'20px'}} >Sorting Algorithms</Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>
          
      
      <Nav/> 
     
    </div>
  
   { algo===1 && <div className='sort-card ' style={{display:'flex',marginTop:'30px',marginLeft:'20%',height:'100vh'}}>
    <MyApp/>
    </div>}
   
   
   {algo!==1 && <> <Intro/>
    <div style={{marginTop:'5rem'}}>
    <Query/>
    </div>
    </>}

    </div>
    }
    
    </>
  );
}

export default App;
