import { Link } from 'react-router-dom'
import './header.css'

import hello from '../../assets/json/hello.json'
import greendot from '../../assets/json/greendot.json'

import { useRef } from 'react'
import Lottie from 'lottie-react'
const Header = () => {

  const newRaf = useRef(null)
  const greenRef = useRef(null)
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


                            
                            <div className='contactWallabth'>

                              <div className='mainContGreen'>



      <Lottie
        lottieRef={greenRef}
        animationData={greendot}
        loop={true}
        className='greenDotAni'

      />

                                <h1 className='projectAvail'>On a mission</h1>


                              </div>


                              <Link to="/contact" className='NoListStyle'>

        <button className='header-contact-button'>Contact Me</button>


                    
                                
                    </Link>


                            </div>

        
        </div>
<br />

    <p className='lightText'>📍 Based in India</p>

    </div>
  )
}

export default Header
