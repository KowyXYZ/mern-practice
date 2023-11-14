import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CreateUser() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/createUser', {name, email, age})
        .then(result => {
            navigate('/')
            console.log(result)
        })
        .catch(err => console.log(err))
    }

    
  return (
    <div className='flex flex-col justify-center items-center py-24'>
        <form className='flex flex-col gap-4' onSubmit={Submit}>
            <h2 className='text-[24px]'>Add User</h2>


            <div className='justify-center items-start flex gap-4'>
                <label>Name</label>
                <input type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)}/>
            </div>
         

            <div className=' mb-2 justify-center items-start flex gap-4' >
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' className= 'form-control' onChange={(e) => setEmail(e.target.value)}/>
            </div>


            <div className='mb-2 justify-center items-start flex gap-4'>
                < label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Age' className=' form-control' onChange={(e) => setAge(e.target.value)}/>
            </div>


            <button className='btn btn-success'>Submit</button>
        </form>
        
    </div>
  )
}

export default CreateUser
