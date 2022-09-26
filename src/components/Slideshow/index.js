import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import "./styles.css";

export default function Slideshow() {
  return(
    <div className='Slideshow'>
      <Carousel>
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
}
