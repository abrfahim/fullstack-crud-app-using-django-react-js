import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate();

  const addProductInfo=async()=>{
    let formField = new FormData()

    formField.append('name',name)
    formField.append('price',price)
    formField.append('description',description)
    formField.append('category',category)
    if (image!==null){
      formField.append('image',image)
    }

    await axios({
      method:'POST',
      url: 'http://127.0.0.1:8000/api/',
      data: formField
    }).then((response)=>{
      console.log(response.data);
      navigate('/')
    })
  }

  return (
    <div>
      <h1 className="text-center text-success">Add Product</h1>
      <div class="container">
       <div class="form-group">
          <div class="form-control">

          <div className="form-group mb-3">
            <label >Select Image</label>
            <input type="file" className='form-control form-control-lg' name='image' onChange={(e)=>setImage(e.target.files[0])} />
          </div>

          <div className="form-group mb-3">
            <input type="text" className='form-control form-control-lg' placeholder='Enter Product Name' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <input type="text" className='form-control form-control-lg' placeholder='Give Product Price' name='price' value={price} onChange={(e)=>setPrice(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <textarea type="text" className='form-control form-control-lg' placeholder='Write Product Description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <input type="text" className='form-control form-control-lg' placeholder='Enter Product Category' name='category' value={category} onChange={(e)=>setCategory(e.target.value)} />
          </div>
        </div>
       </div>
       <button className='btn btn-success btn-sm' onClick={addProductInfo}>Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct
