import './drone.css';
import { Link } from 'react-router-dom';
import ClickSpark from './react-bits/ClickSpark';
import Shuffle from './react-bits/Shuffle';
import PixelTransition from './react-bits/PixelTransition';


import allItems from "./assets/allItems.png"
import { useEffect, useState } from 'react';

import controller from './image/controller.png';
// import PixelTransition from './PixelTransition';







 export default function DronePage(){

   const tableOfContent = [
  {
    sno: 1,
    title: "Components",
    keyPoint: "Build the F450 body"
  },
  {
    sno: 2,
    title: "How It Works",
    keyPoint: "Build the F450 body"
  },
  {
    sno: 3,
    title: "Assemble Frame",
    keyPoint: "Build the F450 body"
  },
  {
    sno: 4,
    title: "Install ESCs",
    keyPoint: "One ESC per motor"
  },
  {
    sno: 5,
    title: "Mount Motors",
    keyPoint: "Attach one motor on each arm"
  },
  {
    sno: 6,
    title: "Connect Motors to ESC",
    keyPoint: "Solder motor wires"
  },
  {
    sno: 7,
    title: "Mount KK Flight Controller",
    keyPoint: "Center of frame"
  },
  {
    sno: 8,
    title: "Connect ESC Signals",
    keyPoint: "M1–M4 ports on KK board"
  },
  {
    sno: 9,
    title: "Connect Receiver",
    keyPoint: "Plug channels into KK board"
  },
  {
    sno: 10,
    title: "Connect Battery XT60",
    keyPoint: "Power distribution"
  },
  {
    sno: 11,
    title: "Install Propellers",
    keyPoint: "Correct CW/CCW orientation"
  },
  {
    sno: 12,
    title: "Calibrate KK Board",
    keyPoint: "Configure sensors"
  },
  {
    sno: 13,
    title: "Test Motors",
    keyPoint: "Ensure correct direction"
  },
  {
    sno: 14,
    title: "First Hover Test",
    keyPoint: "Test in open area"
  }
];

const [data, setData] = useState(tableOfContent);

useEffect(()=>{
   setData(tableOfContent);
}, [])



   return(

      <ClickSpark
  sparkColor='#000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

       <div className='dronePage'>

         <div className="thisis">


<svg xmlns="http://www.w3.org/2000/svg">

<defs>

<pattern id="grid" width="40" height="121" patternUnits="userSpaceOnUse">

<g fill="#000" opacity="0.03">

<path d="M2.83 1H0V0H2.83V1Z"/>
<path d="M16.17 1H9.5V0H16.17V1Z"/>
<path d="M29.5 1H22.83V0H29.5V1Z"/>
<path d="M39 0.999954H36.17V-4.57764e-05H40V3.82996H39V0.999954Z"/>
<path d="M40 17.17H39V10.5H40V17.17Z"/>
<path d="M40 30.5H39V23.83H40V30.5Z"/>
<path d="M2.83 41H0V40H2.83V41Z"/>
<path d="M39 41H36.17V40H39V37.17H40V43.83H39V41Z"/>
<path d="M16.17 41H9.5V40H16.17V41Z"/>
<path d="M29.5 41H22.83V40H29.5V41Z"/>
<path d="M40 57.17H39V50.5H40V57.17Z"/>
<path d="M40 70.5H39V63.83H40V70.5Z"/>
<path d="M2.83 81H0V80H2.83V81Z"/>
<path d="M39 81H36.17V80H39V77.17H40V83.83H39V81Z"/>
<path d="M16.17 81H9.5V80H16.17V81Z"/>
<path d="M29.5 81H22.83V80H29.5V81Z"/>
<path d="M40 97.17H39V90.5H40V97.17Z"/>
<path d="M40 110.5H39V103.83H40V110.5Z"/>
<path d="M39 121V120V117.17H40V121H39Z"/>

</g>

</pattern>

</defs>

<rect width="100%" height="100%" fill="url(#grid)" />

</svg>
</div>



<nav className='drone-nav'>
   <ul className='drone-nav-list'>
      <li className='liLinksNav liLinksNav1' ><Link  className="droneLink" to="/">Menu</Link></li>
      <li className='liLinksNav liLinksNav2' ><Link className="droneLink"  to="https://www.ayushpro1428.tech/stack">AYUSH</Link></li>
      <li className='liLinksNav liLinksNav3' ><Link className="droneLink"  to="/">More Blog</Link></li>
   </ul>
</nav>


<div>


<div className="title-wrapper">


   <div className="title">


<Shuffle
key="shuffle1"
  text="DRONE"
  shuffleDirection="right"
  duration={0.35}
  animationMode="evenodd"
  shuffleTimes={1}
  ease="power3.out"
  stagger={0.03}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover
  respectReducedMotion={true}
  loop={false}
  loopDelay={0}
  className="shuffle-text"
/>

   </div>


  <span className="corner tl"></span>
  <span className="corner tr"></span>
  <span className="corner bl"></span>
  <span className="corner br"></span>
</div>

<p className='drone-description'>
      Dagger is a scalable, cost-effective, autonomous counter-UAS and counter-UxS interceptor designed to defend against massed drone swarms across air, land, and maritime domains.
</p>

</div>




<div className='drone-image-wrapper'>
   <img src={allItems} alt="" className='drone-image' />
</div>



<h2 className='table-of-contents'>Table of Contents</h2>


<div className="table-cont">

   <table className='table'>



   {
      data.map((items) => {
         return (
            <tr key={items.sno}>
               <th># {items.sno}</th>
               <th>{`{* ${items.title} *}`}</th>
               <th>// {items.keyPoint}</th>
               <th>{"->"}</th>
            </tr>
         )
      })
   }



</table>







</div>




<div className='gridMainCont'>

   <div className='gridMainCompp'>

      <div className=" gridItem gridItem2 imgeInGird">

      {/* <img src={controller} className='gridinsideImgae' alt="" /> */}



<PixelTransition
className="custom-pixel-card"
  firstContent={
    <img
      src={controller}
      alt="default pixel transition content, a cat!"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Controller!</p>
    </div>
  }
  gridSize={12}
  pixelColor='#000000ff'
  once={false}
  animationStepDuration={0.4}
/>


      </div>


      <div className='gridItem gridItem1'>
<h2 className='compoentTitle'>Components</h2>

      </div>
      <div className='gridItem gridItemText'>// BODY - F450 Quadcopter Frame</div>
      <div className='gridItem gridItemText'>// MOTOR - A2212 1000 KV BLDC Brushless DC Motor</div>
      <div className='gridItem gridItemText'>// ESC - SimonK 30A BLDC ESC </div>
      <div className='gridItem gridItemText'>// PROPELLERS - Quadcopter propellers 10 x 4.5 (2 Pair)</div>
      <div className='gridItem gridItemText'>// FLIGHT CONTROLLER - KK2.1 Flight Control Board</div>
      <div className='gridItem gridItemText'>// BATTERY - 11.1V 2200mAh 3S 60C LiPo Battery</div>
      <div className='gridItem gridItemText'>// Battery Charger - Imax B3 Pro LiPo Battery Charger</div>
      <div className='gridItem gridItemText'>Item 10</div>
      <div className='gridItem gridItem3 gridItemText'>// Transmitter & Receiver - FlySky CT6B 2.4GHz 6CH  & FS-R6B </div>
      <div className='gridItem gridItem4 gridItemText'>Item 11</div>


   </div>

</div>





       </div>
       


 
       
       </ClickSpark>



    )
 }