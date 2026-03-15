import Navbar from './components/navbar/Navbar';
import './App.css';

import AboutPage from './pages/about/AboutPage';
import Home from './pages/home/Home';
import ProjectP from './pages/projectPage/ProjectP';
import ProjectA from './pages/projectA/ProjectA';
import ProjectB from './pages/projectB/ProjectB';


import StackPage from './pages/stack/StackPage'
import ContactPage from './pages/contact/ContactPage';
import Blog from './pages/blog/Blog';

import NstBot from './pages/blog-nst/NstBot';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import DronePage from './pages/drone-blog/DronePage';

function App() {

   const [subdomain, setsumDomain] = useState<string | null>(null);

   useEffect(()=>{


   const host = window.location.host;
   console.log(host); 

   const arr = host.split(".");
   setsumDomain(arr[0]);

   console.log("subdimain: ", arr[0]);


   }, [])

   if (subdomain=="blog"){
      return(
         <Router>
            <Routes>
               <Route path="/drone" element={<DronePage />} />
               <Route path="/" element={<Blog />} />
            </Routes>

         </Router>
      )
   } ;


  return (
    <Router>
      {/* <div className='body0body'> 






        <div className='contentOFconter'> */}
          <Routes>
            <Route path="/" element={

                      <div className='body0body'>
          
        <Navbar no={0}/>
           <div className='contentOFconter'>
            <Home/>
           </div>
         
        </div>

            } />
            <Route path="/about" element={
              
                      <div className='body0body'>
          
        <Navbar no={1}/>
           <div className='contentOFconter'>
            <AboutPage />
           </div>
         
        </div>
        
        } />
            <Route path="/projects" element={        <div className='body0body'>
          
        <Navbar no={1}/>
           <div className='contentOFconter'>
             <ProjectP />
           </div>
         
        </div>
      } />

            <Route path="/ProjectA" element={
              
                      <div className='body0body'>
          
        <Navbar no={1}/>
           <div className='contentOFconter'>
            <ProjectA />
           </div>
         
        </div>



              } />


            <Route path="/ProjectB" element={        <div className='body0body'>
          
        <Navbar no={1}/>
           <div className='contentOFconter'>
            <ProjectB />
           </div>
         
        </div>
       } />


            <Route path="/stack" element={        <div className='body0body'>
          
        <Navbar no={1}/>
           <div className='contentOFconter'>
            <StackPage />
           </div>
         
        </div>
       } />
            <Route path="/contact" element={        <div className='body0body'>
          
        <Navbar no={1}/>
           <div className='contentOFconter'>
          <ContactPage />
           </div>
         
        </div>
        } />

          <Route path="/blog/how-to-make-qotd-bot" element={        <div className='body0body'>
          
       
           
           <NstBot/>

        </div>
       } />
         



          </Routes>
 
    </Router>
  );
}

export default App;
