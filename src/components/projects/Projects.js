import React from 'react'
import { SliderData } from './SliderData';
import Carousel from './Carousel';
import Techicons from '../Techicons';
import Footer from '../Footer';
import ScrollTop from '../ScrollTop';

const Projects = () => {

  return (
    <div>
      <ScrollTop />
      <div>
        <Carousel slides={SliderData} />
      </div>
      <div>
        <Techicons />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Projects
