
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Contact';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import Favourites from './Components/Favourites';
import Error from './Components/Error';

function App() {
  const navigate = useNavigate();
  let moveCart = () => {
   navigate('/cart');

  }
  let favourite = () => {
    navigate('/favourite');
 
   }

   let home = ()=>{
    navigate('/');
   }


 
  return (
    <div className="App">
      <nav className=' w-full h-28 px-6 text-xl flex items-center justify-between  bg-gray-200'>
        <div className='text-3xl font-bold italic'>Ecommerce</div>
        <ul className='flex items-center justify-between gap-6'>
        <li><button onClick={() => home()} className='px-4 py-1 rounded-full font-bold text-white bg-blue-500'>Home</button></li>
          <li><button onClick={() => favourite()} className='px-4 py-1 rounded-full font-bold text-white bg-blue-500'>Favourite</button></li>
          <li><button onClick={() => moveCart()} className='px-4 py-1 rounded-full font-bold text-white bg-blue-500'>Cart Page </button></li>
          <li><button className='px-4 py-1 rounded-full font-bold text-white bg-blue-500'>Login</button></li>

        </ul></nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/favourite" element={<Favourites/>} />
        <Route path="*" element={<Error />} />
      </Routes>



    </div>
  );
}

export default App
