import React,{useState,useEffect} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'




const One = () => {

  const {id} = useParams()
  const [author,setAuthor] = useState({})
  const navigate = useNavigate()



  useEffect(() =>{
    //Server --> Routes --> Get One Movie
    axios.get(`http://localhost:8000/api/author/${id}`)
    .then((res)=>{
        //storing to State
        setAuthor(res.data)
    }).catch((err)=>{
        console.log(err)
    })
},[])

const handleDelete = (id) =>{
  //Server --> Routes --> Delete Movie
  axios.delete(`http://localhost:8000/api/delete/${id}`)
  .then((res)=>{
      navigate('/allAuthors')
      console.log(`Deleted ${author.title} from DB`)
  }).catch((err)=>{
      console.log(`Unable to delete ${author.title}`)
      console.log(err)
  })
}


  return (
    <div>
        <Link to={'/allAuthors'} className='btn btn-info'>Return To All Authors</Link>
    <div className='card' id='oneCard'>
      <div className='card-header'>
        {author.name}
      </div>
      <div className='card-body'>
      <Link to={`/edit/${author._id}`} className='btn btn-primary'>Edit</Link>
      <button onClick={(e)=> handleDelete(author._id)} className='btn btn-danger' id='delete'>Delete</button>

      </div>
    </div>




    </div>
  )
}

export default One