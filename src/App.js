import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'; // Import connect
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact'; // Corrected import
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import Favourites from './Components/Favourites';
import Checkout from './Components/Checkout';
import Error from './Components/Error';


function App({ cartQuantity, favoritesQuantity }) {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav className='w-full h-28 px-6 text-xl flex items-center justify-between bg-gray-200'>
        <div className='text-3xl font-bold '>Dukaan.com</div>
        <ul className='flex items-center justify-between gap-6'>
          <li>
            <button onClick={() => navigate('/')} className='px-4 py-1 rounded-full font-bold text-white bg-blue-500'>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/favourite')} className='relative'>
              Favourite
              {favoritesQuantity > 0 && (
                <span className='absolute top-0 right-0 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs'>{favoritesQuantity}</span>
              )}
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/cart')} className='relative'>
              Cart Page
              {cartQuantity > 0 && (
                <span className='absolute top-0 right-0 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs'>{cartQuantity}</span>
              )}
            </button>
          </li>
          <li>
            <button className='px-4 py-1 rounded-full font-bold text-white bg-blue-500'>Login</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      
      <footer className="w-full h-32 bg-gray-800 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Contact us: www.Dukaan.com</p>
          <p className="text-sm mt-2">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartQuantity: state.cart.items.reduce((total, item) => total + item.quantity, 0),
  favoritesQuantity: state.cart.favorites.length,
});

export default connect(mapStateToProps)(App);
