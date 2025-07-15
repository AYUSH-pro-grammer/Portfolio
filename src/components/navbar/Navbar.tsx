
import './navbar.css'
import { Link } from 'react-router-dom';

import Lottie, { type LottieRefCurrentProps } from 'lottie-react';


import { useEffect, useRef } from 'react';


import nav from '../../assets/json/nav.json'

import arrowNav from '../../assets/json/arrowNav.json'

import { useState } from 'react'





interface NavbarProps {
  no: number;
}





const Navbar = ({no}: NavbarProps) => {
      const lottieRef = useRef<LottieRefCurrentProps | null>(null);
      const lottieRef1 = useRef<LottieRefCurrentProps | null>(null);
      const lottieRef2 = useRef<LottieRefCurrentProps | null>(null);
      const lottieRef3 = useRef<LottieRefCurrentProps | null>(null);
 

    const [dots, changeDots] = useState([false, false,false,false,false])


      useEffect(() => {
        const newDots = [...dots]
        newDots[no] = true
        changeDots(newDots)

  }, []); 




    const [isSidebar, changeSidebar] = useState(false)

    function toggleSidebar(){
        changeSidebar(!isSidebar)
        
    }

    function toggleDots(updateDot: number){
        
        const newDotList = [false, false,false,false,false]
        newDotList[updateDot] = true
        changeDots(newDotList)

    }








  return (
<>
<nav className='contofNavCont'>
       <nav className='navbar-cont'>
        <div className='navbar-header'>
            <div className='navbar-image'></div>

            <div className='navbar-header-titles'>
                <h4 className='navbar-title-one'>Ayush Kumar</h4>
                <h6 className='navbar-title-two'>Software Dev.</h6>
            </div>

        </div>


<div className='boxyBoxOfNavv'>






            <div className='navbar-links'>


<Link to="/" className='NoListStyle'>
            <div className='navbar-links-element' onClick={()=>{toggleDots(0)}}>
                <h4 className='navbar-icons-title'>Home</h4>
                {dots[0] ? <div className='navbar-dot'></div>: <div></div> }

            </div>
</Link>


<Link to="/about" className='NoListStyle'>

            <div className='navbar-links-element'onClick={()=>{toggleDots(1)}}>
                <h4 className='navbar-icons-title'>About</h4>
                {dots[1] ? <div className='navbar-dot'></div>: <div></div> }

            </div>

            
</Link>



<Link to="/projects" className='NoListStyle'>

  <div className='navbar-links-element' onClick={()=>{toggleDots(2)}} >
                <h4 className='navbar-icons-title'>Projects</h4>
                {dots[2] ? <div className='navbar-dot'></div>: <div></div> }

            </div>


</Link>

<Link to="/stack" className='NoListStyle'>

            <div className='navbar-links-element' onClick={()=>{toggleDots(3)}} >
                <h4 className='navbar-icons-title'>Stack</h4>
                {dots[3] ? <div className='navbar-dot'></div>: <div></div> }
            </div>


</Link>

<Link to="/contact" className='NoListStyle'>



            <div className='navbar-links-element' onClick={()=>{toggleDots(4)}} >
                <h4 className='navbar-icons-title'>Contact</h4>
                {dots[4] ? <div className='navbar-dot'></div>: <div></div> }
            </div>

</Link>
          



    

        </div>



        <div className='navbar-links'>


            <div className='navbar-links-element OneElement' >
                <h4 className='navbar-icons-title'>Email</h4>

                    <div className='animntionNAVlotti OneANi'>
                        <Lottie
                            lottieRef={lottieRef1}
                            animationData={arrowNav}
                            loop={true}
                            className='animntionNAVlottiA'
                        />
                    </div>
                

            </div>




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

            <div className='navbar-links-element' onClick={()=>{toggleDots(0)}}>
                <h4 className='navbar-icons-title'>Home</h4>
                {dots[0] ? <div className='navbar-dot'></div>: <div></div> }

            </div>

</Link>


<Link to="/about" className='NoListStyle'>

                     <div className='navbar-links-element'onClick={()=>{toggleDots(1)}}>
                <h4 className='navbar-icons-title'>About</h4>
                {dots[1] ? <div className='navbar-dot'></div>: <div></div> }
            </div>
      


</Link>


<Link to="/projects" className='NoListStyle'>

            <div className='navbar-links-element' onClick={()=>{toggleDots(2)}} >
                <h4 className='navbar-icons-title'>Projects</h4>
                {dots[2] ? <div className='navbar-dot'></div>: <div></div> }

            </div>


</Link>


<Link to="/stack" className='NoListStyle'>


            <div className='navbar-links-element' onClick={()=>{toggleDots(3)}} >
                <h4 className='navbar-icons-title'>Stack</h4>
                {dots[3] ? <div className='navbar-dot'></div>: <div></div> }
            </div>

</Link>


<Link to="/contact" className='NoListStyle'>


            <div className='navbar-links-element' onClick={()=>{toggleDots(4)}} >
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
