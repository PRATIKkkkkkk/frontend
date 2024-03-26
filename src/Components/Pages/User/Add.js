import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Add() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data) {
        axios.post('http://127.0.0.1:8000/student/', data, {
            'headers': {
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

export default Add