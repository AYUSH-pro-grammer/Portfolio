import './stack.css'


import react from '../../assets/teachy/react.svg'
import python from '../../assets/teachy/python.svg'
import django from '../../assets/teachy/django.svg'
import figma from '../../assets/teachy/figma.svg'
import pandas from '../../assets/teachy/pandas.svg'

import { Link } from 'react-router-dom'
import sql from '../../assets/teachy/sql.svg'



const Stack = () => {
  return (
    <div className='mainStackCont'>

        <h1 className='stackHeading'>Stack</h1>

        <div className='stackWhiteBox'>

                <div className='techStackConters'>

                        <div className='techStackOnlyCont'>
                            <div className='imageBoxTechStack'>
                                <img src={react} alt="" className='teactStackIcons'/>

                            </div>
                            <h4 className='headingOfTechstackTtitle'>React</h4>
                        </div>

                                                <div className='techStackOnlyCont'>
                            <div className='imageBoxTechStack'>
                                <img src={python} alt="" className='teactStackIcons'/>
                            </div>
                            <h4 className='headingOfTechstackTtitle'>Python</h4>
                        </div>

                                                <div className='techStackOnlyCont'>
                            <div className='imageBoxTechStack'>
                                <img src={django} alt="" className='teactStackIcons'/>


                            </div>
                            <h4 className='headingOfTechstackTtitle'>Django</h4>
                        </div>

                                                <div className='techStackOnlyCont'>
                            <div className='imageBoxTechStack'>
                                <img src={figma} alt="" className='teactStackIcons'/>


                            </div>
                            <h4 className='headingOfTechstackTtitle'>Figma</h4>
                        </div>

                                                <div className='techStackOnlyCont'>
                            <div className='imageBoxTechStack'>
                                <img src={sql} alt="" className='teactStackIcons'/>


                            </div>
                            <h4 className='headingOfTechstackTtitle'>PostgreSQL</h4>
                        </div>

                                                <div className='techStackOnlyCont'>
                            <div className='imageBoxTechStack'>
                                <img src={pandas} alt="" className='teactStackIcons'/>


                            </div>
                            <h4 className='headingOfTechstackTtitle'>Pandas</h4>
                        </div>


                </div>

                
                <div className='viewMoreTechStack'>



                    <Link to="/stack" className='NoListStyle'>

<div className='gapygap'> </div>


                    <h4 className='niewmoveTExtTECH'>View More</h4>

                    
                                
                    </Link>
                    


                </div>


        </div>
      
    </div>
  )
}

export default Stack
