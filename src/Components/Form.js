import React,{useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'


const Form = () => {

    const [name, setName] = useState('')
    const navigate= useNavigate()
    const [errors,setErrors] = useState({})

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/addAuthor',{
            name
        }).then((res)=>{
        navigate('/allAuthors')
            console.log(res)
        }).catch((err) =>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }


  return (
    <div>
        <h1>Add A New Author</h1>
        <form className='row g-3 mx-auto mt-5' onSubmit={handleSubmit}>
            <div class="col-md-4 mx-auto mt-5">
                <label for="name" class="form-label">Name </label>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name} className='form-control'></input>
                <p>{errors.name ? <span className='text-danger' id='validationError'>{errors.name.message}</span> : null}</p>
                <Link to={'/allAuthors'} className='btn btn-primary'>Cancel</Link>
                <button type='submit' className='btn btn-primary mt-4 mb-4'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form