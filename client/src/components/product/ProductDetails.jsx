import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'

const ProductDetails = () => {

  const [product, setProduct] = useState('')
  const {id} = useParams()
  const navigate = useNavigate()

  const getSingleProduct = async() =>{
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`)
    console.log(data);
    setProduct(data);
  }

  useEffect(()=>{
    getSingleProduct();
  },[])

  const deleteProduct=async(id)=>{
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    navigate('/')
  }

  return (
    <div className='container'>
      <h1>Details about product</h1>
      <div className="single-product-info">
        <img src={product.image} alt="" height='300' width='250' />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
      </div>
      <div>
        <Link className='btn btn-warning btn-sm m-2' to={`/${product.id}/update`}>Update</Link>
        <Link className='btn btn-danger btn-sm m-2' onClick={()=>deleteProduct(product.id)} >Delete</Link>
      </div>
    </div>
  )
}

export default ProductDetails
