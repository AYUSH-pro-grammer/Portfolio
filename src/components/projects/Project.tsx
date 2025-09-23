import './project.css'
import imgB from '../../assets/projectImage/imgB.png'
import imgA from '../../assets/projectImage/imgA.png'

const Project = () => {
  return (
    <div className='projectCont'>
      
      <h1 className='projectTitle'>Projects</h1>

      <div className='projectShowCaseCont'>


<div>
        <img src={imgA} className='imageProject' alt="" />

        <div className='imageContPort'>
            <h1 className='titleProjeectIMg' >Adv. Site</h1>
            <a href="https://www.advocatemanjuprajapati.com/" target="_blank" rel="noopener noreferrer">Visit</a>

        </div>

</div>

<div>

        <img src={imgB} className='imageProject' alt="" />
        
        <div className='imageContPort'>
            <h1  className='titleProjeectIMg' >Law Firm</h1> 
            <a href="https://www.amdivorcelawyer.online/" target="_blank" rel="noopener noreferrer">Visit</a>

        </div>

</div>

      </div>

    </div>
  )
}

export default Project
