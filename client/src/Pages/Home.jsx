import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  }, [])
  
  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/deleteUser/' + id)
    .then(result => {console.log(result) 
      window.location.reload()})
    .catch(err => console.log(err))
  }

  return (
    <div className='py-24 container mx-auto flex justify-center items-center flex-col'>
      <Link className='text-red-500' to='/create'>Add User</Link>
      <div className='flex flex-col gap-4'>
        {users.map((el, index) => {
          return (
            <div key={index} className='border-2 justify-center items-center flex flex-col p-2 gap-2'>
              <p>Name: {el.name}</p>
              <p>Email: {el.email}</p>
              <p>Age: {el.age}</p>
              <div className='gap-2 flex '>
                    <Link className='bg-green-500' to={`/update/${el._id}`}>Update</Link>
                    <button className='bg-red-500' onClick={(e) => handleDelete(el._id)}>Delete</button>
              </div>
          
            </div>
          )
        })}
      </div>

      
    </div>
  )
}

export default Home
