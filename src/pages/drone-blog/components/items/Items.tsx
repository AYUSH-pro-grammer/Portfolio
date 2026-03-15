import Shuffle from "../../react-bits/Shuffle"

export default function Component(){
    return(

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

  triggerOnHover
  respectReducedMotion={true}
  loop={false}
  loopDelay={0}
  className="shuffle-text"
/>

   </div>

    )
}