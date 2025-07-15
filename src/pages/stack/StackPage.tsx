import "./stack.css";

import arch from "../../assets/teachy/arch.svg";
import css from "../../assets/teachy/css.svg";
import figma from "../../assets/teachy/figma.svg";
import django from "../../assets/teachy/django.svg";
import html from "../../assets/teachy/html.svg";
import js from "../../assets/teachy/js.svg";
import matplotlib from "../../assets/teachy/matplotlib.svg";
import numpy from "../../assets/teachy/numpy.svg";
import pandas from "../../assets/teachy/pandas.svg";
import python from "../../assets/teachy/python.svg";
import react from "../../assets/teachy/react.svg";
import sql from "../../assets/teachy/sql.svg";
import vs from "../../assets/teachy/vs.svg";
import fastapi from "../../assets/teachy/fastapi.png";

import Contact from "../../components/contact/Contact";
import Foot from "../../components/fotter/Foot";


const Stack = () => {
  return (
    <div className="stackPageMainCont">
      <h1 className="titleForCont">Stack</h1>

      <br />
      <br />
      <br />
      <div className="contFoRStack">
        <div className="containterFORstack">
          <h1 className="nameOFteachTackTitle">Web Development</h1>

          <br />

          <div className="stackONEbox">
            <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={html} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">HTML5</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
           
                Foundation of all structured content on the web. Clean,
                semantic, and SEO-friendly markup.
              </p>
            </div>

            <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={css} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">CSS3</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
        
                Handles the styling, layout, and responsiveness of your
                interfaces.
             <br />
             <br />
             
              </p>
            </div>



                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={js} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">JavaScript (ES6+)</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
     Main scripting language of the web. Powers interactivity and logic on the frontend. 
              </p>
            </div>



                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={react} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">React</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
 A powerful frontend library used to build dynamic, component-based user interfaces.
              </p>
            </div>



                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={python} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">Python</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
 My core backend + scripting language. Also used for data-related tools and automation.
              </p>
            </div>



                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={sql} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">PostgreSQL</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
    Robust and scalable SQL database system used in your full-stack applications.

    <br />
    <br />
              </p>

              
            </div>





          </div>
        </div>


                <div className="containterFORstack">
          <h1 className="nameOFteachTackTitle">Backend & APIs</h1>

          <br />

          <div className="stackONEbox">
            <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={fastapi} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">FastAPI</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
           High-performance Python framework for building APIs fast. Used for backend logic and REST APIs.
              </p>
            </div>




                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={django} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">Django </h1>
              </div>

              <br />

              <p className="paraofSTACKp">

                 This is a popular full-stack Python web framework.

<br /><br />
              </p>
            </div>







          </div>
        </div>




                <div className="containterFORstack">
          <h1 className="nameOFteachTackTitle">Design & Prototyping</h1>

          <br />

          <div className="stackONEbox">
            <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={figma} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">Figma</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
 My primary tool for designing UI, wireframes, and prototypes. Design-to-code ready.              </p>
            </div>











          </div>
        </div>


                <div className="containterFORstack">
          <h1 className="nameOFteachTackTitle">Development Tools</h1>

          <br />

          <div className="stackONEbox">
            <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={vs} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">VS Code</h1>
              </div>

              <br />

              <p className="paraofSTACKp">
           My go-to code editor with powerful extensions and integrations.
           <br /><br /></p>
            </div>




                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={arch} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">Linux (Arch) </h1>
              </div>

              <br />

              <p className="paraofSTACKp">

 Personal development environment, used for scripting, CLI work, and Python projects.


<br />
              </p>
            </div>









          </div>
        </div>



                <div className="containterFORstack">
          <h1 className="nameOFteachTackTitle">Data & Visualization</h1>

          <br />

          <div className="stackONEbox">
            <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={numpy} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">NumPy</h1>
              </div>

<br />
              <p className="paraofSTACKp">
Numerical computing in Python              </p>
            </div>




                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={pandas} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">Pandas </h1>
              </div>
<br />
          

              <p className="paraofSTACKp">

Data wrangling and analysis

              </p>
            </div>





                        <div className="teachStackFinalBox">
              <div className="withImageStack">
                <div className="imageForHrCONT">
                  <img src={matplotlib} className="imageForHr" alt="" />
                </div>
                <h1 className="titleOFstackP">Matplotlib </h1>
              </div>

<br />
              <p className="paraofSTACKp">
Basic data visualization


            <br /><br />

              </p>
            </div>





          </div>
        </div>

      </div>


      <Contact/>
      <Foot/>
    </div>
  );
};

export default Stack;
