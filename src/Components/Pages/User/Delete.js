import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    let {pk} = useParams()

    const navi = useNavigate()

    function deletUser(){
        axios.delete(`http://127.0.0.1:8000/student/${pk}/`, {
            'headers':{
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        navi('/user/show')
    }


  return (
    <>
    <form className='container' onSubmit={()=>{deletUser()}} >
        <h2>Are you sure you want to delete this user????</h2>
        <input type='submit' value='Delete' className='btn btn-outline-danger' />
        <NavLink to='/user/show' className='btn btn-outline-info'>Return</NavLink>
    </form>
    </>
  )
}

export default Delete