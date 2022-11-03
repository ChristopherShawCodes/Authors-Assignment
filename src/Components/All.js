import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'





const All = () => {

    const [list,setList] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/allAuthors')
        .then((res) =>{
        console.log(res)
        setList(res.data)
        }).catch(err => console.log(err))
    },[])



  return (
    <div className='col-6 mx-auto mt-5'>
    <h1>All Authors</h1>
    {
        list.map((author) =>(
            <div className='card mt-2' id='allCards'>
                <h4 className='card-title'>{author.name}</h4>
                <div id='card-body'>
                    <Link to={`/author/${author._id}`} className='text-primary'>More Info</Link>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default All