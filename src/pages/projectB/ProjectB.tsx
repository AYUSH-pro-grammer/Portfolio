import './projectB.css'

import imgB from '../../../src/assets/projectImage/imgB.png'

import Stack from '../../components/stack/Stack'
import Foot from '../../components/fotter/Foot'
import Contact from '../../components/contact/Contact'


const ProjectB = () => {
  return (
    <div className='projectAPage'>

        <h1 className='projectAtitle'>DivorceLawyersNoida — Targeted Legal Site</h1>

<br /><br />
<div className='projectAspace'>
    <img src={imgB} className='imageAgoeshere' alt="" />


    <div className='boxyBoxforDetails'>

        <h1 className='boxyboxH1'>Problem</h1>
        <br />
        <p className='boxyboxParaa'>The challenge was to target a niche service (divorce law) while keeping the design warm, professional, and reassuring for sensitive clients.</p>

    </div>


    <br /><br />


    <div className='boxyBoxforDetails'>

        <h1 className='boxyboxH1'>My Approach</h1>
        <br />
        <p className='boxyboxParaa'>Crafted a layout that felt human, not robotic. I avoided heavy text blocks and focused on quick scannability, soft tones, and precise CTAs.</p>

    </div>


    <br /><br /><br />


        <div className='boxyBoxforDetails'>

            <h1 className='boxyboxH1 boxyboxH1b'>Design Highlights</h1>
            <br />
            <p className='boxyboxParaa boxyboxParaab'>Emphasis on emotional comfort

, SEO-rich landing pages

, Easy navigation and appointment flows

, Optimized for speed and mobile viewing</p>

 


    </div>




    <br /><br />







    <div className='boxyBoxforDetails'>

        <h1 className='boxyboxH1'>Outcome</h1>
        <br />
        <p className='boxyboxParaa'>Over 150+ reviews, great ranking performance, and valuable client results. Demonstrated that focused UX + SEO can dominate even niche legal markets.</p>

    </div>


    <br /><br />


</div>

<br /><br />

<Stack/>
<Foot/>
<Contact/>

    </div>
  )
}

export default ProjectB
