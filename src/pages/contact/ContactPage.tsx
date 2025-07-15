
import './contactPage.css'

import github from '../../assets/socials/github.svg'
import ln from '../../assets/socials/linkden.svg'
import email from '../../assets/socials/email.svg'
import x from '../../assets/socials/x.svg'

import Foot from '../../components/fotter/Foot'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';


import arrowANi from '../../assets/json/newarror.json'

import { useRef } from 'react';


const ContactPage = () => {

  const lottieRef1 =  useRef<LottieRefCurrentProps | null>(null);
  const lottieRef2 =  useRef<LottieRefCurrentProps | null>(null);
  const lottieRef3 =  useRef<LottieRefCurrentProps | null>(null);
  const lottieRef4 =  useRef<LottieRefCurrentProps | null>(null);
  return (
    <div className='contactPageOverview'>


        <div className='contactPageCont'>
                <h1 className='contactPageTtittle'>Let's Connect!</h1>

<div className='paddingLin'></div>


                    <div className='socialBoxyBox'>

                        <div className='socialLinks'
                        
      onMouseEnter={() => lottieRef1.current?.play()}
      onMouseLeave={() => lottieRef1.current?.stop()}
      >
                            <div className='contycont1'>
                                <img src={email} className='iconsIco' alt="" />
                                Email
                            </div>



                  <div
      onMouseEnter={() => lottieRef1.current?.play()}
      onMouseLeave={() => lottieRef1.current?.stop()}
      

      className="arrowAnimintion"
    >
      <Lottie
        lottieRef={lottieRef1}
        animationData={arrowANi}
        loop={true}
        autoplay={false}
      />
    </div>


                           
                        </div>                        
                        
                        
                        <div className='socialLinks'
                        
                              onMouseEnter={() => lottieRef2.current?.play()}
      onMouseLeave={() => lottieRef2.current?.stop()}
      >
                            <div className='contycont1'>
                                <img src={github} className='iconsIco' alt="" />
                                Github
                            </div>

                                              <div
      onMouseEnter={() => lottieRef2.current?.play()}
      onMouseLeave={() => lottieRef2.current?.stop()}
      

      className="arrowAnimintion"
    >
      <Lottie
        lottieRef={lottieRef2}
        animationData={arrowANi}
        loop={true}
        autoplay={false}
      />
    </div>

                        </div>

                        <div className='socialLinks'
                        
      onMouseEnter={() => lottieRef3.current?.play()}
      onMouseLeave={() => lottieRef3.current?.stop()}
      >
                            <div className='contycont1'>
                                <img src={ln} className='iconsIco' alt="" />
                                Linkedin
                            </div>

                                              <div
      onMouseEnter={() => lottieRef3.current?.play()}
      onMouseLeave={() => lottieRef3.current?.stop()}
      

      className="arrowAnimintion"
    >
      <Lottie
        lottieRef={lottieRef3}
        animationData={arrowANi}
        loop={true}
        autoplay={false}
      />
    </div>


                        </div>                        <div className='socialLinks'
                        
                        
      onMouseEnter={() => lottieRef4.current?.play()}
      onMouseLeave={() => lottieRef4.current?.stop()}
      
      >
                            <div className='contycont1'>
                                <img src={x} className='iconsIco' alt="" />
                                Twitter
                            </div>

                                              <div
      onMouseEnter={() => lottieRef4.current?.play()}
      onMouseLeave={() => lottieRef4.current?.stop()}
      

      className="arrowAnimintion"
    >
      <Lottie
        lottieRef={lottieRef4}
        animationData={arrowANi}
        loop={true}
        autoplay={false}
      />
    </div>


                        </div>





                    </div>


<div className='paddingLin'></div>

<div className='contactForm'>

    <h1 className='GetinTouchL'>Get in touch</h1>
    <br /><br />
    <form action="https://formsubmit.co/ayushpro1428@gmail.com" className='formFotyn' method='POST'>

            <div className='upparLimitBox'>



            <div className='boxForEmailIP'>
                <label htmlFor=""  className='lalbelOnC' >Name</label>
                <br />
            
                <input type="text"  className='typeInputFor' placeholder='Ayush' required name='name'/>
            </div>

      

            <div className='boxForEmailIP'>
                <label htmlFor="" className='lalbelOnC'  >Email</label>
                <br />

                
                <input type="email" className='typeInputFor' required name='email' placeholder='me@email.com'/>
            </div>




            </div>

            <br /><br /><br />

            <div className='lowerLimitMag'>
                <label htmlFor="">Message</label>
                <br />

                <textarea id="w3review" className='typeInputForF' name="w3review" placeholder='Type something here...'>

</textarea>




            </div>
<div className='paddingLin'></div>



            <button className='buttonHereFOru' type='submit'>Send Message</button>


    </form>


</div>
                    


        </div>
      

      <Foot/>
    </div>
  )
}

export default ContactPage
