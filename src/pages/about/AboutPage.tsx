import './aboutPage.css'

import one from '../../../src/assets/icon/one.svg'
import two from '../../../src/assets/icon/two.svg'
import three from '../../../src/assets/icon/three.svg'
import four from '../../../src/assets/icon/four.svg'


import Stack from '../../components/stack/Stack'

import Foot from '../../components/fotter/Foot'
import Contact from '../../components/contact/Contact'

const AboutPage = () => {
  return (
    <div className='mainContAbtPage'>
      
      
            <h1 className='titleMainAbtCont'>
                About Me
            </h1>

            <br />

            <p className='paraAfterCont'>The more you know, the more you know that you don't know.</p>


            <div className='OGaboutBOX'>







    <div className='aboutPageCont'>






      <div className='aboutUsCont'>


<div className='part1from'>


          <div className='aboutUsSection'>
<img src={one} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' >Academic Education</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

                          

Newton School of Technology – B.Tech CSE
<br />
<br />
2025 – Present


            </p>


            

    </div>


    <br />
    <br />
    


        <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

                          

 CBSE Class 12 – Science + CS

<br /><br />
2024-25

            </p>


            

    </div>

<br /><br />


        <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

                          

 CBSE Class 10 – 92%

<br /><br />
2022-23

            </p>


            

    </div>
          </div>


          <div className='aboutUsSection'>
<img src={two} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' >Non-Formal Education</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

Udemy Python Program - Coding Certification Program

<br /><br />

March – June 2023


            </p>

    </div>
    
    <br /><br />
        <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

YouTube & Open-Source Learning Paths

<br /><br />(Ongoing – DSA, Web, Tools)

            </p>


    </div>


    <br /><br />

            <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

IIT Madras – School Connect Program
<br /><br />
Oct 2024


            </p>

    </div>


          </div>
</div>


<div className='part1from part1fromn'>

          <div className='aboutUsSection'>
<img src={three} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' > Experience</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

                          
Academic Projects: CLI Library System, Mini Games.

<br /><br />
2024-25


            </p>

    </div>
          </div>


          <div className='aboutUsSection'>
<img src={four} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' >Certifications</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

NST DSA Hackathon
<br /><br />
22 July 2024


            </p>

    </div>


    <br /><br />

        <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

IIT Madras – School Connect Program
<br /><br />
Oct 2024


            </p>

    </div>
          </div>
</div>

      </div>




    </div>













            </div>



<Stack/>
<Contact/>

<Foot/>



    </div>
  )
}

export default AboutPage
