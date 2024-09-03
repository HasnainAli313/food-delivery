function Cart(props) {
  return (
    <>
          <div className='bg-white   w-[45%] rounded-md flex gap-4 m-1   p-5 '>
                <div>
                    <img style={{height:"90px",width:"90px" , borderRadius:"10px"}} src={props.image} alt="" />
                </div>
                <div>
                <h4>{props.foodTitle}</h4>
                <h5>{props.price}</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <button className='bg-red-500 hover:bg-red-600 text-white text-sm rounded-md p-[2px]'>Order Now</button>
                </div>
            </div>
    </>
  )
}

export default Cart