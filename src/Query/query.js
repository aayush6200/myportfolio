import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

const Query=()=>{
    const [firstname, setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [mail, setMail]=useState('')
    const [query, setQuery]=useState('')

    const firstnameHandler=(event)=>{
        setFirstname(event.target.value)
    }

    const lastnameHandler=(event)=>{
        setLastname(event.target.value)
    }

    const emailHandler=(event)=>{
        setMail(event.target.value)
    }

    const queryHandler=(event)=>{
        setQuery(event.target.value)
    }

    const queryformHandler=(event)=>{
        event.preventDefault();
        emailjs.sendForm('service_97qqcy8', 'template_mvysj0t', event.target, 'SrJioApp1h153vuqW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset()
    };
                        
    


    return(
        <Form className='form-control bg bg-black' method='post' onSubmit={queryformHandler} style={{textAlign:'center', border:'2px solid red',width:'50%',margin:'auto'}} >
            <Form.Group style={{display:'flex', flexDirection:'column',flexWrap:'wrap'}}>
                <Form.Label >FirstName</Form.Label> 
                <Form.Control  style={{height:'2rem',width:'40%',margin:'auto'}} type='text' className='form-control bg bg-dark text-white mb-2' required='required' size='14' onChange={firstnameHandler} name='firstname'></Form.Control>
                
            </Form.Group>
            <Form.Group style={{display:'flex', flexDirection:'column',flexWrap:'wrap'}} >
            <Form.Label >Lastname</Form.Label>
                
                <Form.Control style={{height:'2rem',width:'40%',margin:'auto'}} type='text' className='form-control bg bg-secondary mb-2' onChange={lastnameHandler} name='lastname' ></Form.Control>
                
            </Form.Group>
            <Form.Group style={{display:'flex', flexDirection:'column',flexWrap:'wrap'}}>
            <Form.Label >Enter your Email</Form.Label>
             
                <Form.Control style={{height:'2rem',width:'40%',margin:'auto'}} type='text' className='form-control bg bg-secondary mb-2' onChange={emailHandler} name='email'></Form.Control>
               
            </Form.Group>
            <Form.Group style={{display:'flex', flexDirection:'column',flexWrap:'wrap'}}>
            <Form.Label> Enter your Query</Form.Label>
                
                <Form.Control type='text' className='mb-2' style={{height:'100px', width:'60%',margin:'auto'}} onChange={queryHandler} name='query'></Form.Control>
            </Form.Group>
            <Button type='submit' >Send</Button>
        </Form>
    )
}
export default Query;