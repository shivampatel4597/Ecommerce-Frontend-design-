import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

class Cart extends Component {
  handleRemove = (id) => {
    this.props.removeFromCart({ id });
  };

  handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      this.props.updateQuantity({ id, quantity });
    }
  };

  render() {
    const { cartItems, totalPrice, totalItems } = this.props;

    return (
      <div className='w-full flex items-start h-[75vh]  px-20 bg-gray-100'>
        <div className='w-full flex flex-col'>
          {cartItems.map((item) => (
            <div key={item.id} className='w-full flex h-full bg-white mb-6'>
              <div className='w-70 py-7 '>
                <div className='w-full flex'>
                  <div className='w-20 '>
                    <img className='p-4' src={item.images ? item.images[0] : ''} alt={item.title} />
                  </div>
                  <div className='w-55 border-2 p-4'>
                    <h1 className='text-lg font-md'>{item.title}</h1>
                    <p className='text-lg mt-4'>Price Rs {Math.floor(item.price * 80)}</p>
                  </div>
                  <div className='w-25 border-2 p-4'>
                    <p className='text-sm text-gray-600 font-md'>{item.shippingInformation}</p>
                  </div>
                </div>
                <div className='flex items-center gap-10 mt-6'>
                  <div className='px-6'>
                    <button
                      onClick={() => this.handleQuantityChange(item.id, item.quantity - 1)}
                      className=' rounded-full px-5 text-xl py-2'
                    >
                      -
                    </button>
                    <span className='px-6'>{item.quantity}</span>
                    <button
                      onClick={() => this.handleQuantityChange(item.id, item.quantity + 1)}
                      className=' rounded-full px-4 text-2xl py-2'
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => this.handleRemove(item.id)}
                      className='  text-xl py-2 px-6 bg-black text-white font-bold'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <div className='w-full border-2 bg-white'>
            <h1 className='text-lg text-gray-500 px-10 py-4'>PRICE DETAILS</h1>
            <hr />
            <div className='mt-6 px-10 flex items-center justify-between'>
              <p className='text-lg font-md'>Price ({totalItems} items)</p>
              <span className='text-lg font-md'>Rs {Math.floor(totalPrice)}</span>
            </div>
            <div className='mt-6 px-10 flex items-center justify-between'>
              <p className='text-lg font-md'>Discount</p>
              <span className='text-lg font-md'>Rs 0</span>
            </div>
            {cartItems.length > 0 && (
              <div className='mt-6 mb-6 px-10 flex items-center justify-between'>
                <p className='text-lg font-md'>Delivery charges</p>
                <span className='text-lg font-md'>Rs 50</span>
              </div>
            )}
            <hr />
            <div className='mt-6 mb-6 px-10 flex items-center justify-between'>
              <p className='text-2xl font-md'>Total Amount</p>
              <span className='text-2xl font-md'>Rs {Math.floor(totalPrice + 50)}</span>
            </div>
            <div className='mt-6 mb-6 px-10'>
              <Link to='/checkout'>
                <button className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'>
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cartItems = state.cart.items;
  const totalPrice = cartItems.reduce((total, item) => total + item.price * 80 * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return {
    cartItems,
    totalPrice,
    totalItems,
  };
};

const mapDispatchToProps = { removeFromCart, updateQuantity };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
