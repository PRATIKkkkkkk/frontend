import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data) {
        try{
            axios.post('http://127.0.0.1:8000/v1/user/', data)
            console.log('data added successfully')
            navi('/user/signin')
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
        <label htmlFor='un'>Enter UserName:</label>
        <input type='text' id='un' className='form-control' {...register('username')} />
        <br />
        <label htmlFor='email'>Enter Email:</label>
        <input type='email' id='email' className='form-control' {...register('email')} />
        <br />
        <label htmlFor='pass'>Enter Password:</label>
        <input type='password' id='pass' className='form-control' {...register('password')} />
        <br />
        <input type='submit' className='btn btn-outline-success' />
    </form>
    </>
  )
}

export default Signup