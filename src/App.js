import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {

  const { register, handleSubmit, errors } = useForm();
  const [userInfo,setUserInfo]=useState()

  const onSubmit=(data)=>{
    setUserInfo(data)
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <div className="col-md-4">
              <h5 className='text-center'>Email Address</h5>
              <input style={{ width: "100%" }} type="text" name="email"
              ref={register({required:"Email is Required",pattern:{value:/^\S+@\S+$/i,message:"This is not valid email"}})} />
              <div className='text-danger'>{errors.email?.message}</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <h5 className='text-center'>Password</h5>
              <input style={{ width: "100%" }} type="text" name="password" 
              ref={register({required:"Password is Required",minLength:{value:4,message:"minimum 4 characters required"},maxLength:{value:8,message:"Not More Than 8 Characters"}})} />
              <div className='text-danger'>{errors.password?.message}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
