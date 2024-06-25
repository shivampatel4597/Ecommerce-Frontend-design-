import React, { Component } from 'react'
import Hoc from './Hoc'
class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = { arr: "", index: "" }
  }
  componentDidMount() {
    const { id } = this.props.router.params;
    console.log(id)
    this.callingApi(id)


  }

  callingApi = (id) => {
    const { arr } = this.state;
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network request problem");
        }

        return response.json()
      }).then((data) => {
        this.setState({arr:[ ...arr, data ]}

        )


      })
      .catch((error) => {
        console.log("error is", error)
      })
  }
  render() {
    const {arr} = this.state;
    return (
<h1>{console.log(arr[0].products)}</h1>

      // <div className='w-full flex item-center justify-center  bg-gray-100' >
      //   {arr && arr.map((item,itemIndex)=>{
      //    return   <div className='w-[80%] flex item-center justify-center h-[full] bg-white border-2 border-red-500'>
      //       <div className='w-[35%]'>
      //         <img src={item.images[0]} className='w-full  p-3 text-yellow-400  bg-green-300' />
      //         <button className='w-48 h-14 text-xl py-1 mx-1 my-2 bg-yellow-500 text-white'>ADD To CART</button>
      //         <button className='w-48 h-14 text-xl  py-1 mx-1 my-2 bg-orange-500 text-white'>BUY NOW</button>
      //       </div>
  
      //       <div className='w-[65%] px-6 border-2 border-green-400'>
      //         <h1 className='text-xl text-start'>Electronic gadgets</h1>
      //         <div className='mt-3 text-start w-full border-2 border-yellow-300'>
      //           <span className='px-3 py-1 bg-green-400'>4</span>
      //           <p className='text-green-400'>Special price</p>
  
      //           <span className='text-2xl  font-bold'>₹1,199</span><span className='px-6 text-green-400'>76% off</span>
      //         </div>
  
      //         <div className='mt-6 flex flex-col items-start justify-start border-2 border-yellow-400'>
      //           <h1 className='text-xl text-start'>Product Description</h1>
      //           <p className='mt-3 text-start w-[60%]'>The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design."</p>
      //         </div>
      //       </div>
      //     </div>

        
      //   })}
     

      // </div>

   

    )
  }
}

export default Hoc(SingleProduct)