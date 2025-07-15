import { Link } from 'react-router-dom'
import './header.css'

import hello from '../../assets/json/hello.json'

import { useRef } from 'react'
import Lottie from 'lottie-react'
const Header = () => {

  const newRaf = useRef(null)
  return (
    <div className='header-cont'>



        <div className='header-navbar'>

        <h1 className='header-heading'>
            <h1 className='totleOfanimintion'>Hey,</h1>
            


            <div className='helloAnimintion'>
              <Lottie
               lottieRef={newRaf}
               animationData={hello}
               loop={true}
               className='helosjkb'
              />
            </div>
            
            
             
            <h1 className='totleOfanimintion'>I'm Ayush!</h1>

        </h1>


                            <Link to="/contact" className='NoListStyle'>

        <button className='header-contact-button'>Contact Me</button>


                    
                                
                    </Link>

        
        </div>
<br />

    <p className='lightText'>📍 Based in India</p>

    </div>
  )
}

export default Header
