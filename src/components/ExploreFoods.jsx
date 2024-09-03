import img1 from "../assets/pizza1.jpg"
import img2 from "../assets/pizza2.jpg"
import img3 from "../assets/pizza3.jpg"

function ExploreFoods() {
  return (
    <>
    <section id="about">
        <h3 className='text-center p-5 '>Explore Foods</h3>
    <div className='explore-food flex flex-wrap md:gap-16 justify-around p-3  '>
       <div className=' text-center text-white rounded-3 pizza '>
        <img src={img1} alt="" />
        <p className='para'>Pizza</p>
        </div>
       <div className=' text-center text-white rounded-3 pizza '>
       <img src={img2} alt="" />
        <p className='para'>Pizza</p>
        </div>
       <div className=' text-center text-white rounded-3 pizza '>
       <img src={img3} alt="" />
        <p className='para'>Pizza</p>
        </div>
    </div>
    </section>
    </>
  )
}

export default ExploreFoods