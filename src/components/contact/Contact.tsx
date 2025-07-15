
import './contact.css'

import contactCat from '../../assets/json/contactCat.json'
import Lottie from 'lottie-react'

import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Contact = () => {
  const CatOnref = useRef(null)
  

  return (
    <div className='mainContyCOnt'>

            
    <div className='contactOverVIew'>

        <div className='otherCOntY'>


        <h4 className='contactTitleO'>Do you have any project idea you <br /> want to discuss about?</h4>
        

              <br />


        <button className='conectBUtton0'>


                                      <Link to="/contact" className='NoListStyle'>


            <h4 className='contactMeText contactMeTextuu '>Contact Me</h4>



                    
                                
                    </Link>

      
        </button>


<div className='lottieContCat'>

          <Lottie
        lottieRef={CatOnref}
        animationData={contactCat}
        loop = {true}

        />



</div>



        </div>

    </div>

    </div>
  )
}

export default Contact
