import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  const loadProduct=async()=>{
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`)
    console.log(data);
    setImage(data.image)
    setName(data.name)
    setPrice(data.price)
    setDescription(data.description)
    setCategory(data.category)
  }

  useEffect(()=>{
    loadProduct();
  },[])

  const updateProductInfo=async()=>{
    let formData = new FormData();
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    formData.append('category',category);
    if (image!==null){
      formData.append('image',image);
    }
    await axios({
      method:'PUT',
      url:`http://localhost:8000/api/${id}/`,
      data:formData,
    }).then(response=>{
      console.log(response.data);
      navigate('/')
    })
  }

  return (
    <div>
      <h1 className="text-center text-success">Update Product</h1>
      <div class="container">
       <div class="form-group">
          <div class="form-control">

          <div className="form-group mb-3">
            <div>
              <img src={image} alt="" height='300' width='250' />
            </div>
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
       <button className='btn btn-success btn-sm' onClick={updateProductInfo}>Update</button>
      </div>
    </div>

  )
}

export default UpdateProduct
