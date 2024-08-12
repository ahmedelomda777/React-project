import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import "./Latest.css"
import {  Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from 'react-bootstrap';
const Latest = () => {
    const [builds,setBuilds]=useState([])
    useEffect(()=>{
      fetch("data.json")
      .then(response=>response.json())
      .then(data=>setBuilds(data.projects)
      )
  },[])
    return (
      <Container className='cards'>
      <h2>Latest builds</h2>
      <div >
      <Swiper
        modules={[FreeMode, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        freeMode={true}
        pagination={{ clickable: true }}
      
      
      >
           {builds.map((build)=>(
            <swiper>
        <SwiperSlide>  
  <Card className='card mystyle' key={build.id} >
    <Card.Img variant="top" src={build.photo} />
    <Card.Body>
      <Card.Title>{build.title}</Card.Title>
      <Card.Text>
      {build.description}
      </Card.Text>
      <a href={build.link}>View</a>
    </Card.Body>
  </Card>
  
  </SwiperSlide>
   
    </swiper>
  ))}
  
        
      </Swiper>
         
  
        
      </div>
      </Container>
    )
  }

export default Latest