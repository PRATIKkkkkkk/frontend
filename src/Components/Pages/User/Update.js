import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    let {pk} = useParams()

    const {register, handleSubmit, setValue} = useForm()

    async function fetchUser(){
        let result = await axios.get(`http://127.0.0.1:8000/student/${pk}`, {
            'headers':{
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        // console.log(result.data)
        setValue('roll', result.data.roll)
        setValue('name', result.data.name)
        setValue('marks', result.data.marks)
    }

    useEffect(()=>{fetchUser()}, [])

    const navi = useNavigate()

    function saveData(data){
        axios.put(`http://127.0.0.1:8000/student/${pk}/`, data, {
            'headers':{
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        navi('/user/show')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
        <label htmlFor='r'>Enter Roll:</label>
        <input type='number' id='r' className='form-control' {...register('roll')} />
        <br />
        <label htmlFor='n'>Enter Name:</label>
        <input type='text' id='n' className='form-control' {...register('name')} />
        <br />
        <label htmlFor='m'>Enter Marks:</label>
        <input type='number' id='m' className='form-control' {...register('marks')} />
        <br />
        <input type='submit' className='btn btn-outline-success' />
    </form>
    </>
  )
}

export default Update