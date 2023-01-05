import { useState } from "react";
import { useEffect } from "react";
import myObjects from "./global";





const Bubble=(props)=>{
    const [bubble,setBubble]=useState(myObjects)
    const [first,setFirst]=useState(0)
    const [sec,setSec]=useState(0)

   
    useEffect(()=>{
        let arr=bubble
        console.log(arr)
        let j=0
        if (first<bubble.length){
            let k=setInterval(()=>{
                if(arr[j]>arr[j+1]){
                    
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                    props.onSaveBubble([[j,arr[j]],[j+1,arr[j+1]]])
                    setSec(1)
                    console.log('sorting')
                    console.log(arr)
                
                
                
                }
                j+=1
                if (j===arr.length){
                    clearInterval(k)
                    console.log('aay')
                    setFirst(first+1)
                }
                 
        },100)


        }
       
     


        
       
        

        
       
    },[first])
    return(
        <>
      
        </>
    )
}

export default Bubble;