
import './navbar.css'
import { Link, useLocation } from 'react-router-dom';

import Lottie, { type LottieRefCurrentProps } from 'lottie-react';


import { useRef } from 'react';


import nav from '../../assets/json/nav.json'

import arrowNav from '../../assets/json/arrowNav.json'
import Scan from '../../assets/json/Scan.json'

import { useState } from 'react'











const Navbar = () => {
      const lottieRef = useRef<LottieRefCurrentProps | null>(null);
      const lottieRef1 = useRef<LottieRefCurrentProps | null>(null);
      const lottieRef2 = useRef<LottieRefCurrentProps | null>(null);
      const lottieRef3 = useRef<LottieRefCurrentProps | null>(null);
      const userIconRef = useRef<LottieRefCurrentProps | null>(null);
 

    const { pathname } = useLocation()
    const dots = [
        pathname === '/',
        pathname.startsWith('/about'),
        pathname.toLowerCase().startsWith('/project'),
        pathname.startsWith('/stack'),
        pathname.startsWith('/contact'),
    ] 




    const [isSidebar, changeSidebar] = useState(false)

    function toggleSidebar(){
        changeSidebar(!isSidebar)
        
    }

    








  return (
<>
<nav className='contofNavCont'>
       <nav className='navbar-cont'>
        <div className='navbar-header'>
            <div className='navbar-image' 
            


      onMouseEnter={() => userIconRef.current?.play()}
      onMouseLeave={() => userIconRef.current?.stop()}


            >


                 <Lottie
                            lottieRef={userIconRef}
                            animationData={Scan}
                            loop={false}

                            className='animntionNAVlottiAb'
                        />


            </div>

            <div className='navbar-header-titles'>
                <h4 className='navbar-title-one'>Ayush Kumar</h4>
                <h6 className='navbar-title-two'>Software Dev.</h6>
            </div>

        </div>


<div className='boxyBoxOfNavv'>






            <div className='navbar-links'>


<Link to="/" className='NoListStyle'>
            <div className='navbar-links-element' onClick={()=>changeSidebar(false)}>
                <h4 className='navbar-icons-title'>Home</h4>
                {dots[0] ? <div className='navbar-dot'></div>: <div></div> }

            </div>
</Link>


<Link to="/about" className='NoListStyle'>

            <div className='navbar-links-element'onClick={()=>changeSidebar(false)}>
                <h4 className='navbar-icons-title'>About</h4>
                {dots[1] ? <div className='navbar-dot'></div>: <div></div> }

            </div>

            
</Link>



<Link to="/projects" className='NoListStyle'>

  <div className='navbar-links-element' onClick={()=>changeSidebar(false)} >
                <h4 className='navbar-icons-title'>Projects</h4>
                {dots[2] ? <div className='navbar-dot'></div>: <div></div> }

            </div>


</Link>

<Link to="/stack" className='NoListStyle'>

            <div className='navbar-links-element' onClick={()=>changeSidebar(false)} >
                <h4 className='navbar-icons-title'>Stack</h4>
                {dots[3] ? <div className='navbar-dot'></div>: <div></div> }
            </div>


</Link>

<Link to="/contact" className='NoListStyle'>



            <div className='navbar-links-element' onClick={()=>changeSidebar(false)} >
                <h4 className='navbar-icons-title'>Contact</h4>
                {dots[4] ? <div className='navbar-dot'></div>: <div></div> }
            </div>

</Link>
          



    

        </div>



        <div className='navbar-links'>


<a href="mailto:ayushpro1428@gmail.com" target="_blank" rel="noopener noreferrer" className='a'>
    

                <div className='navbar-links-element OneElement' >
                <h4 className='navbar-icons-title'>Email</h4>
                    <div className='animntionNAVlotti OneANi '>
                        <Lottie
                            lottieRef={lottieRef1}
                            animationData={arrowNav}
                            loop={true}
                            className='animntionNAVlottiA '
                        />
                    </div>
                

            </div>



</a>

<a href="https://github.com/AYUSH-pro-grammer" target="_blank" rel="noopener noreferrer" className='a'>


            <div className='navbar-links-element TwoElement' >
                <h4 className='navbar-icons-title'>Github</h4>


                    <div className='animntionNAVlotti TwoANi'>
                        <Lottie
                            lottieRef={lottieRef2}
                            animationData={arrowNav}
                            loop={true}
                            className='animntionNAVlottiA'
                        />
                    </div>
                

            </div>  


</a>



<a href="https://linkedin.com/in/ayushpro1428" target="_blank" rel="noopener noreferrer" className='a'>


  <div className='navbar-links-element ThreeElement'  >
                <h4 className='navbar-icons-title'>Linkedin</h4>


                                    <div className='animntionNAVlotti ThreeANi'>
                        <Lottie
                            lottieRef={lottieRef3}
                            animationData={arrowNav}
                            loop={true}
                            className='animntionNAVlottiA'
                        />
                    </div>
                

            </div>



</a>



        



    

        </div>



</div>






    </nav>


    
 </nav>

<nav className='navForMobile'>
    <h1 className='navbarMobileTitles'>Ayush</h1>

    <h1 className='navbarMobileTitles' onClick={()=>{toggleSidebar()}}>≡</h1>
</nav>




<nav className={isSidebar ? 'SideBarNav': 'hideSidebar'}>

<h2 className='sidebarNavCancal' onClick={()=>{toggleSidebar()}}>╳</h2>

<div className='sidebarLinks'>


        <div className='navbar-links'>

<Link to="/" className='NoListStyle'>

            <div className='navbar-links-element' onClick={()=>changeSidebar(false)}>
                <h4 className='navbar-icons-title'>Home</h4>
                {dots[0] ? <div className='navbar-dot'></div>: <div></div> }

            </div>

</Link>


<Link to="/about" className='NoListStyle'>

                     <div className='navbar-links-element'onClick={()=>changeSidebar(false)}>
                <h4 className='navbar-icons-title'>About</h4>
                {dots[1] ? <div className='navbar-dot'></div>: <div></div> }
            </div>
      


</Link>


<Link to="/projects" className='NoListStyle'>

            <div className='navbar-links-element' onClick={()=>changeSidebar(false)} >
                <h4 className='navbar-icons-title'>Projects</h4>
                {dots[2] ? <div className='navbar-dot'></div>: <div></div> }

            </div>


</Link>


<Link to="/stack" className='NoListStyle'>


            <div className='navbar-links-element' onClick={()=>changeSidebar(false)} >
                <h4 className='navbar-icons-title'>Stack</h4>
                {dots[3] ? <div className='navbar-dot'></div>: <div></div> }
            </div>

</Link>


<Link to="/contact" className='NoListStyle'>


            <div className='navbar-links-element' onClick={()=>changeSidebar(false)} >
                <h4 className='navbar-icons-title'>Contact</h4>
                {dots[4] ? <div className='navbar-dot'></div>: <div></div> }
            </div>
</Link>






   





        </div>

</div>






</nav>



            <div 
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
      className="thisClassToThtat"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={nav}
        loop={false}
        autoplay={false}
      />
    </div>



</>

 

  )
}

export default Navbar
