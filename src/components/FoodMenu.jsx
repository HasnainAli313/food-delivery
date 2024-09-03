import Cart from './Cart'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"

function FoodMenu() {
  return (
    <section className='d-flex  bg-light flex-column justify-content-center'>
        <h3 className='text-center p-5 '>Food Menu</h3>
        <div className='food-menu d-flex justify-content-center flex-wrap '>
          <Cart foodTitle="Margherita" price="$2.5" image={img1}/>
          <Cart foodTitle="Pizzette Montanare" price="$3.6" image={img2}/>
          <Cart foodTitle="Quattro Formaggi" price="$4.6" image={img3}/>
          <Cart foodTitle="Diavola" price="$5.6" image={img4}/>
          <Cart foodTitle="California-style Pizza" price="$4.6" image={img5}/>
          <Cart foodTitle="Miami Pizza" price="$4.6" image={img6}/>
        </div>
        <h6 className='mt-3 text-danger text-center'>see all foods</h6>
    </section>
  )
}

export default FoodMenu