import './project.css'

import Stack from '../../components/stack/Stack'
import Contact from '../../components/contact/Contact'
import Foot from '../../components/fotter/Foot'

import imgA from '../../../src/assets/projectImage/imgA.png'
import imgB from '../../../src/assets/projectImage/imgB.png'

import { Link } from 'react-router-dom';


const ProjectP = () => {
  return (
    <div className='projectMainiCOnt'>

        <h1 className='projectHeading'>Projects</h1>

<>
    <div className='projectCont'>

      <div className='projectShowCaseCont'>


<div>
  <Link to='/projecta'>
        <img src={imgA} className='imageProject' alt="" />
  </Link>

        <div className='imageContPort'>
            <h1 className='titleProjeectIMg' >Adv. Site</h1>
            <a href="https://www.advocatemanjuprajapati.com/">Visit</a>

        </div>

</div>

<div>

    <Link to='/projectb'>
        <img src={imgB} className='imageProject' alt="" />
  </Link>
        
        <div className='imageContPort'>
            <h1  className='titleProjeectIMg' >Law Firm</h1> 
            <a href="https://www.divorcelawyersnoida.online/">Visit</a>

        </div>

</div>

      </div>

    </div>
    
    
    </>
        <Stack/>
        <Contact/>
        <Foot/>
      
    </div>
  )
}

export default ProjectP
