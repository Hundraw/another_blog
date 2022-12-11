import React from 'react'
import '../scss/components/LoginCard.scss'

const LoginCard: any = () => {
  return (
    <form className='LoginCard'>
      <h2>Please Log In</h2>
      <input type='text' name='username' placeholder='Username' />
      <input type='password' name='password' placeholder='Password' />
      <input className='button submit' type='submit' value='Log In' />
      <a className='button action'>Register Instead ?</a>
    </form>
  )
}

export default LoginCard
