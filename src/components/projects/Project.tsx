import './project.css'
import { Link } from 'react-router-dom'
import imgB from '../../assets/projectImage/imgB.png'
import imgA from '../../assets/projectImage/imgA.png'
import devboard from '../../assets/projectImage/devboard.png'
import keyboard from '../../assets/projectImage/keyboard.png'

const Project = () => {
  return (
    <div className='projectCont'>
      
      <h1 className='projectTitle'>Projects</h1>

      <div className='projectShowCaseCont'>
        <div className='projectGridInner'>
          <div>
            <img src={imgA} className='imageProject' alt="Advocate Site" />
            <div className='imageContPort'>
              <h1 className='titleProjeectIMg'>Adv. Site</h1>
              <a href="https://www.advocatemanjuprajapati.com/" target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
          </div>

          <div>
            <img src={imgB} className='imageProject' alt="Law Firm" />
            <div className='imageContPort'>
              <h1 className='titleProjeectIMg'>Law Firm</h1> 
              <a href="https://www.amdivorcelawyer.online/" target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
          </div>

          <div>
            <img src={devboard} className='imageProject' alt="Devboard" />
            <div className='imageContPort'>
              <h1 className='titleProjeectIMg'>Devboard</h1> 
              <a href="https://github.com/AYUSH-pro-grammer/devboard" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>

          <div>
            <img src={keyboard} className='imageProject' alt="Custom Keyboard" />
            <div className='imageContPort'>
              <h1 className='titleProjeectIMg'>Keyboard</h1> 
              <a href="https://github.com/AYUSH-pro-grammer/keyboard" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>

        <div className='projectFooterMore'>
          <Link to="/projects">View More</Link>
        </div>
      </div>

    </div>
  )
}

export default Project