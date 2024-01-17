import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


const ShowProducts = () => {
  const [products, setProducts] = useState([])

  const getProducts =async()=>{
    const response = await axios.get('http://localhost:8000/api/')
    console.log(response.data);
    setProducts(response.data);
  }

  useEffect(() =>{
    getProducts();
  },[])

  return (
    <div className='card-info'>
      {
        products.map((product,index)=>(
          <Card key={index} style={{ width: '18rem', marginTop:'10px'}}>
          <Card.Img variant="top" src={product.image} height='300px' width='250px' />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Link className='btn btn-primary btn-sm' to={`/${product.id}/`}> Show Details</Link>
          </Card.Body>
        </Card>
        ))
      }
    </div>
  )
}

export default ShowProducts
