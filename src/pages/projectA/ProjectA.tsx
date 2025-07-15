import './projectA.css'
import imgA from '../../../src/assets/projectImage/imgA.png'
import googleAds from '../../../src/assets/googleAds.png' 

import Stack from '../../components/stack/Stack'
import Foot from '../../components/fotter/Foot'
import Contact from '../../components/contact/Contact'

const ProjectA = () => {
  return (
    <div className='projectAPage'>

        <h1 className='projectAtitle'>Advocate Manju Prajapati — Legal Website</h1>

<br /><br />
<div className='projectAspace'>
    <img src={imgA} className='imageAgoeshere' alt="" />


    <div className='boxyBoxforDetails'>

        <h1 className='boxyboxH1'>Vision & Problem</h1>
        <br />
        <p className='boxyboxParaa'>The client needed a strong digital presence to attract and convert potential legal clients. There was no existing SEO, branding, or structured content.</p>

    </div>


    <br /><br />


    <div className='boxyBoxforDetails'>

        <h1 className='boxyboxH1'>My Approach</h1>
        <br />
        <p className='boxyboxParaa'>I integrated Google Ads and ran campaigns targeting legal queries in Noida — generating thousands of impressions and real conversions.</p>

    </div>


    <br /><br /><br />

    <div className='googleAdsWallaCont'>

        <div className='boxyBoxforDetails'>

            <h1 className='boxyboxH1 boxyboxH1b'>Innovation</h1>
            <br />
            <p className='boxyboxParaa boxyboxParaab'>The client needed a strong digital presence to attract and convert potential legal clients. There was no existing SEO, branding, or structured content.</p>

        </div>

        <img src={googleAds} className='imageWallaAds' alt="" />




    </div>




    <br /><br />



    <div className='boxyBoxforDetails'>

        <h1 className='boxyboxH1'>Design Highlights</h1>
        <br />
        <p className='boxyboxParaa'>

            Mobile-first responsive layout
, Accessibility-focused structure



, High trust factor (highlighting reviews, services, and call-to-actions)


, Designed with the goal of building trust in seconds


        </p>

    </div>


    <br /><br />



    <div className='boxyBoxforDetails'>

        <h1 className='boxyboxH1'>Outcome</h1>
        <br />
        <p className='boxyboxParaa'>Ranked high on Google for competitive legal keywords

Drove 350,000+ impressions and 4,900+ clicks via Google Ads

Helped the client gain 350+ Google reviews and consistent lead generation

The success led to a second project for a niche divorce law website</p>

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

export default ProjectA
