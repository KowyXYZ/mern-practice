import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function CreateUser() {

    
    const {id} = useParams()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)

    
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:5000/getUser/' + id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
      }, [])
      
    
    
      const Update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/updateUser/' + id, {name, email, age})
        .then(result => {
            navigate('/')
            console.log(result)
        })
        .catch(err => console.log(err))
      }
    
  return (
    <div className='flex flex-col justify-center items-center py-24'>
        <form className='flex flex-col gap-4' onSubmit={Update}>
            <h2 className='text-[24px]'>Update User</h2>


            <div className='justify-center items-start flex gap-4'>
                <label>Name</label>
                <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
         

            <div className=' mb-2 justify-center items-start flex gap-4' >
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' className= 'form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>


            <div className='mb-2 justify-center items-start flex gap-4'>
                < label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Age' className=' form-control' value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>


            <button className='btn btn-success'>Submit</button>
        </form>
        
    </div>
  )
}

export default CreateUser
