import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Signin() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function checkUser(data){
        axios.post(`http://127.0.0.1:8000/access/`, data).then(
            (response)=>{
                if(response.status === 200){
                    console.log(response.data.access);
                    sessionStorage.setItem('token', response.data.access)
                    navi('/user/add')
                }
            }
        ).catch(
            (error)=>{
                console.error(error)
                alert('Username or password invalid')
            }
        )
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(checkUser)} >
        <label htmlFor='un'>Enter UserName:</label>
        <input type='text' id='un' className='form-control' {...register('username')} />
        <br />
        <label htmlFor='pass'>Enter Password:</label>
        <input type='password' id='pass' className='form-control' {...register('password')} />
        <br />
        <input type='submit' className='btn btn-outline-success' />
    </form>
    </>
  )
}

export default Signin