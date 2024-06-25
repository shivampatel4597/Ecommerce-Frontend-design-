import React, { Component } from 'react'
import Hoc from './Hoc';

import FavoriteIcon from '@mui/icons-material/Favorite';
 class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { arr: "",images:"" ,value: "", sliderImg: ["https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/77e402bbfdae0e68.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e1c77383c5405c7c.jpg?q=20"] }
  }
  componentDidMount() {
    this.callApi()
    this.callSlider()

  }

  callApi = () => {
    const { arr } = this.state;
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network request problem");
        }

        return response.json()
      }).then((data) => {
        this.setState({ arr: data})
        // console.log(data.products)

      })
      .catch((error) => {
        console.log("error is", error)
      })
  }

  callSlider = () => {

    const { sliderImg } = this.state;
    let i = 0;
    setInterval(() => {

      if (i < sliderImg.length) {
        this.setState({ value: sliderImg[i] }, () => {
          // console.log(i);
        })
        i++
      }
      if (i >= sliderImg.length) {
        i = 0;

      }
    }, 4000)


  }

  Viewpage = (itemIndex)=>{
   const {navigate} = this.props.router;
   navigate(`/singleproduct/${itemIndex}`)
  
  }


  render() {
    const { arr, value } = this.state;
    return (
      <div>
       

        {/* hero section */}

        <section>
          <div className=' px-5 py-5 w-full h-auto bg-slate-300 hover:cursor-pointer'>

            <img className='w-full rounded-md' src={value} />

          </div>
        </section>
        {/* products page */}
        <div  className=' py-8 grid grid-cols-3   gap-10 place-items-center   border-2 border-black'>
        {
        arr.products && arr.products.map((item, itemIndex) => {
          

        return  <div onClick={()=>  this.Viewpage(itemIndex)} className='flex flex-col items-center justify-center w-80 h-80 px-5 border-2 rounded-lg border-gray shadow-2xl hover:cursor-pointer' >
       <button className=' w-full  text-gray-400 text-start '>{<FavoriteIcon/>}</button>
               <img className=' w-full h-[60%] hover:scale-[1.1] hover:translate-x-1 hover:translate-y-1' src={item.images[0]} />
         <p >{item.title}</p>
         <p className='font-bold'>Rs {item.price}</p>
         <button className='w-full py-1 my-2 bg-blue-500 text-white'>ADD To CART</button>
              </div> 





})
}
</div>

{/* footer */}

<footer>
  <div className='w-full h-50 bg-black'>
<h1> shivsm</h1> <h1> shivsm</h1> <h1> shivsm</h1> <h1> shivsm</h1>
  </div>
</footer>
      </div>
    )
  }
}
export default Hoc(Home)