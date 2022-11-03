import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom'



const Edit = () => {

    const [name, setName] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    const [errors,setErrors] = useState({})

    

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) =>{
            setName(res.data.name)
        }).catch((err)=>{
            console.log(`Unable To Edit ${id}`)
            console.log(err)
        })
    },[])


    const handleSubmit = (e) => {
        e.preventDefault()
        //Server --> Routes --> Update Movie
        axios.put(`http://localhost:8000/api/edit/${id}`,{
            name
        }).then((res) =>{
            console.log(res)
            navigate('/allAuthors')
        }).catch((err)=>{
            setErrors(err.response.data.errors)
            console.log(err)
        })
    }


  return (
    <div>
        <h1>Edit This Author</h1>
        <Link to={'/allAuthors'} className='badge rounded-pill text-warning' id='link'>See All Authors</Link>
        <form className='row g-3 mx-auto mt-5' onSubmit={handleSubmit}>
            <div class="col-md-4 mx-auto mt-5">
                <label for="name" class="form-label">Name </label>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name} className='form-control'></input>
                <p>{errors.name ? <span className='text-danger' id='validationError'>{errors.name.message}</span> : null}</p>
                <button type='submit' className='btn btn-primary mt-4 mb-4'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default Edit