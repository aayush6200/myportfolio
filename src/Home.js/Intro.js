import Mediator from '../Mediator.js/mediator';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import './intro.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Intro=()=>{

  const [greet, SetGreet]=useState('')
  const[intro, SetIntro]=useState('')
  const[track,setTrack]=useState(0)
  const [time,setTime]=useState(0)
 
  
 useEffect(()=>
    setTime(setTimeout((()=>{
      
    if (track===0){
        SetGreet('Hi,')
      }
    else if (track===1){
      SetGreet(greet+' good')
    }
    else if (track===2 && parseInt(new Date().getHours())<12){
      SetGreet(greet+' morning')
    }
    else if (track===2 && parseInt(new Date().getHours())>=12){
      SetGreet(greet+' afternoon')
    }

    
    else if (track===3){
      SetIntro('This')
    }
    else if (track===4){
      SetIntro(intro+' is')
    }
    else if (track===5){
      SetIntro (intro+ ' Aayush')
    }
    
  
    if (track<6){
      setTrack(track+1)
    }

}),700)),[track])

  return(
    <div className='box' >
      <div style={{marginTop:'20%'}}>
      <h1 style={{color:'beige'}}>{greet}</h1>
      <h1 style={{color:'beige'}}>{intro}</h1>
      </div>
      <Card id='card-one' >
        <Card.Body >
          <Card.Text>
            <p className='description' style={{fontFamily:'courier',color:'beige'}}>I am a frontend developer and a cricket test match lover. I specialize in Python,Javascript and React. 
              Currently I am working on expanding my knowledge on backend by playing wih nodejs and moongodb. Beside programming, I love travelling and enjoying new foods.
              My favourite food is MOMO: typical nepali food. Whenever I am not eating, running or programming, you can find watching cricket or movies </p>
            
          </Card.Text>
          <div className='my-expertise' style={{display:'flex', flexDirection:'column'}}>
            <h1 style={{margin:'auto' }}>My Expertise</h1>
            <div className='resume ' style={{display:'flex',flexDirection:'row',gap:'1rem', marginTop:'2rem'}}>
            <ul className='list p-languages'>
            <li className='p-lang mx-2'>ProgammingLanguages</li>
              <li><i class="fa-brands fa-python fa-xl fa-beat  mx-2" style={{color:'blue'}}></i>Python</li>
              <li><i class="fa-brands fa-js fa-xl fa-beat mx-2" style={{color:'yellow'}}></i>Javascript</li>
            </ul>
            <ul className='list frameworks'>
            <li className='p-frameworks mx-2'>Frameworks</li>
              <li><i class="fa-brands fa-react fa-xl fa-beat mx-2" style={{color:'pink'}}></i>React</li>
              <li><i class="fa-brands fa- fa-xl fa-beat mx-2"></i>Django</li>
            </ul>
            <ul className=' list Languages'>
            <li className='p-f mx-2'>Languages</li>
              <li>English(Fluent)</li>
              <li>Nepali(Advanced)</li>
              <li>Hindi(Fluent)</li>
            </ul>
            <ul className=' list softskills'>
              <li>Communications</li>
              <li>Customer service</li>
              <li>Volunteering</li>
            </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
        <Mediator/>
    </div>
    )
   


    
}
export default Intro;