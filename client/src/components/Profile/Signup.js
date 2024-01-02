import React from 'react'
import '../Profile/signup.css'
const Signup = () => {
  return (
    <div>
      <form className='form'>
      <label for="username">Username:</label>
      < input className='inputs' type="text"  name="Username" placeholder='username'/>
      <label for="username">Email:</label>
      < input className='inputs' type="email"  name="Email" />
      <label for="password">password:</label>
      < input className='inputs' type="text"  name="password" />
      <label for="Title">Title :</label>
      < input className='inputs' type="text"  name="Title" />
      <label for="Title">Language :</label>
      < input className='inputs' type="text"  name="English" />
      <button className='button'>Save</button>
      </form>
    </div>
  )
}

export default Signup
