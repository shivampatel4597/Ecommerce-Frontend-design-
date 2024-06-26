import React, { Component } from 'react'
import Hoc from './Hoc'
 class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {arr:[]}
  }

  componentDidMount(){
const {id} = this.props.router.params;
console.log(id)
this.callApi(id)
  }

  callApi = (id)=>{
    const { arr } = this.state;
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network request problem");
        }

        return response.json()
      }).then((data) => {
        this.setState({arr: [...arr,data]}
    
        )


      })
      .catch((error) => {
        console.log("error is", error)
      })
  }


  render() {
    const {arr} = this.state;
    return (
     
    <div className='w-full flex item-center justify-center  bg-gray-100'>
   
   {arr && arr.map((item, index)=>{

   
   return <div className='w-[80%] flex item-center justify-center h-[full] bg-white '>
<div  className='w-[70%]  py-7 border-2'>
<div className='w-full flex'>
  <div className='w-[20%] border-2'>
    <img className='p-4' src={item.images ? item.images[0] : ""}/>
  </div>
  <div className='w-[55%] border-2 p-4'>
    <h1 className=' text-start text-lg font-md'>{item.title}</h1>
    <p className='text-start text-lg mt-4'>Price ${item.price}</p>
  </div>
  <div className='w-[25%] border-2 p-4 '>
    <p className='text-start text-sm text-gray-600 font-md'>{item.shippingInformation}</p>
  </div>


</div>

<div className='flex items-center gap-10  mt-6' >
  <div className='text-start px-6'><button className='border-2  rounded-[100%] px-5 text-xl py-2'>-</button><span className='text-2xl  px-6 '>1</span> <button className='border-2 rounded-[100%] px-4 text-2xl py-2'>+</button></div>
  <div><button  className='border-2 text-xl py-2 px-6 bg-black text-white font-bold'>Remove</button></div>
</div>

</div>
<div  className='w-[30%] border-2 '>
<h1 className='text-start text-lg text-gray-500 px-10 py-4'> PRICE DETAILS</h1>
<hr></hr>
<div className=' mt-6 px-10 flex  items-center justify-between'>
<p className='text-lg font-md'>Price 3 items</p>
<span className='text-lg font-md'>Rs 1668</span>
</div>
<div className='mt-6 px-10 flex  items-center justify-between'>
<p className='text-lg font-md'>Discount</p>
<span className='text-lg font-md'>Rs 1668</span>
</div>
<div className='mt-6 mb-6 px-10 flex  items-center justify-between'>
<p className='text-lg font-md'>Delhivary charges</p>
<span className='text-lg font-md'>Rs 1668</span>
</div>

<hr></hr>
<div className='mt-6 mb-6 px-10 flex  items-center justify-between'>
<p className='text-2xl font-md'>Total Amount</p>
<span className='text-2xl font-md'>Rs 1668</span>
</div>



</div>
<div>

</div>
</div>
   })}

    </div>
    )
  }
}

export default Hoc(Cart)