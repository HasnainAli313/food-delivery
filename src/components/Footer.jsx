import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"

function Footer() {
  return (
   <>
    <footer id="contact" className=''>
        <div className='flex gap-3 justify-center p-3'>
        <a href="https://facebook.com">
            <img style={{width:"30px"}} src={facebook} alt="" />
        </a>
        <a href="https://instagram.com">
            <img style={{width:"30px"}} src={instagram} alt="" />
        </a>
        <a href="https://twitter.com">
            <img style={{width:"30px"}} src={twitter} alt="" />
        </a>
        </div>
        <p className='text-center'>All right reserved <span style={{color:"red"}}>2024</span></p>
    </footer>
   </>
  )
}

export default Footer