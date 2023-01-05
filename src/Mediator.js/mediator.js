import Project from '../Home.js/projects'
import './mediator.css'
import { useState } from 'react'


const myProjects=[
    ['Weather App'," A javascript App which gives current weather and forecast the upcoming weather for 4 days",'https://github.com/aayush6200/weather-app'],
    ["Calculator"," A simple caculator capabale of doing all the Bodmas operations and is made my using React , HTML and CSS","https://github.com/aayush6200/react-javascript-calculator"],
    ['Password Generator',' Made by using React and CSS which is capable of generating random password based on user inputs','https://github.com/aayush6200/Project-Voice-of-associate'],
    ['Form-Validation', 'Another react project that validates the form of user on the browser side depeneding on their inputs. It combines states and other react hooks','scdscs']

]
const Mediator=()=>{
    const [fronttarget,setFronttarget]=useState(3)
    const [index,setIndex]=useState(0)
    const [val,myVal]=useState(0)

    const frontHandler=()=>{
        if(fronttarget<=myProjects.length-1){
            setIndex(index+1)
            setFronttarget(fronttarget+1)
        }
        
    }
    const backHandler=()=>{
        if (index>0){
            setIndex(index-1)
        }
        if (fronttarget>3){
            setFronttarget(fronttarget-1)
        }
       
    }

    return(
        <div className='items' style={{display:'flex',height:'max-content',flexDirection:'row',gap:'1rem',alignItems:"center"}}>
           {fronttarget>3 && <button className="back" onClick={backHandler}><i class="fa-solid fa-angle-left fa-2xl"></i></button>}
            {myProjects.slice(index,fronttarget).map(x=>(
                <Project data={x}/>
            ))
            }
            {fronttarget<=myProjects.length-1 &&<button className="front" onClick={frontHandler}><i class="fa-solid fa-angle-right fa-2xl"></i></button>}
        </div>


    )
}

export default Mediator;