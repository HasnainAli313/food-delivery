
function Hero() {
  return (
    <section id="home" className='hero flex  flex-col place-content-center'>
        <div className="text-center">
        <input className=' w-[50%]  p-1' type="text" placeholder='Search for pizza' />
        <button className='m-2 p-1  rounded-md bg-red-600 hover:bg-red-800 font-semibold text-white w-[90px] border border-white '>Search</button>
        </div>
    </section>
  )
}

export default Hero