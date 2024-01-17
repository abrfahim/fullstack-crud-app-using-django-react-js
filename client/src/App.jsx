import './App.css'
import NavbarMenu from './components/navbar/NavbarMenu'
import AddProduct from './components/product/AddProduct'
import ProductDetails from './components/product/ProductDetails'
import ShowProducts from './components/product/ShowProducts'
import UpdateProduct from './components/product/UpdateProduct'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='container mt-3 mb-3'>
      <Router>
        <NavbarMenu/>
        <Routes>
          <Route exact path='/' Component={ShowProducts}/>
          <Route path='add-product/' Component={AddProduct}/>
          <Route path='/:id/' Component={ProductDetails}/>
          <Route path='/:id/update' Component={UpdateProduct}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
