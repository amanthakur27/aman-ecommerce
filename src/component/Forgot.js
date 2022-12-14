import React from 'react'
const Forgot = () => {
  return (
    <div className='container'>
      <form>
        <h1>Forgot Password</h1><br/>
        <label className="form-label">Forgot your password</label>
        <input type="password" placeholder='create new password' className="form-control w-25" />
      </form>
    </div>
  )
}
export default Forgot