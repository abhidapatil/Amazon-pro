import React from 'react';
import './style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Nav from './Nav';
import Carousel from './Carousel';
import Container from './Container';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Nav />
       <Carousel />
       <Container />
     
      </BrowserRouter>
  );
}
