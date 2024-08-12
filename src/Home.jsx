import React from 'react'
import Contact from './Contact'
import {  Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import "animate.css"
import Latest from './Latest'
import Foter from './Foter'
const Home = () => {
  return (
    <div>
    <section>
    <Container  className='cont1'>
  <div  className="homeText animate__animated animate__fadeInLeft"   >
    <h2>Turn your website into a customer-acquisition engine.</h2>
    <p>We build marketing websites that help you sell on autopilot.</p>
    <HashLink to="contact"><button className='talk'>Let's talk</button></HashLink>
  </div>
  <div  className='homeImg animate__animated animate__fadeInRight'  >

   <img className='back' src='\images\623a183aa76fb537cbc5dc0e_Group 8-p-500.png'/>
    <div className='bacgrd bacgrd-g'>  
     <img className='g' src='\images\62324067d42bfc263ee547ff_image 4 (Traced).svg'/>
     </div>
    <div className='bacgrd bacgrd-b'> 
    <img className='b' src='\images\6232406724bd9b36622aed48_image 3 (Traced).svg'/>
    </div>
    <div className='bacgrd bacgrd-w'>
    <img className='w' src='\images\623240674411e07510215b6f_image 2 (Traced).svg'/>
    </div>
    <img className='wave' src='\images\623503637e979197919c6c03_Topology-1 (1).svg'/>
    
  </div>
    
    </Container>
    </section>
    <section>
      <Container className='cont2'>
        <div className='animate__animated  animate__fadeInLeft'  >
          <img className='img2' src='\images\6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg'  />
        </div>
        <div className='text2 animate__animated animate__fadeInRight'>
         <p className='dream'>The Dream</p>
         <h4>Imagine having your sales on the jop 24/7, interacting with an endless stream of ready-to-buy visitors  </h4>

        </div>

      </Container>
    </section>
    <Latest/>
    <Contact/>
    <Foter/>
    </div>
    
  )
}

export default Home
