# Portfolio

## What My PortFolio is about?

I created this portfolio to experiment and apply various concepts learnt in HTML, CSS, JavaScript, React, and Style-Components. 
I also integrated packages to my PortFolio.
Code is open source in GitHub, and the application is deployed on Vercel.
Also, this website is responsive.

## Sections of my PortFolio

The main page, Navbar, and Footer allow to direct you through the various sections of my website that are:
About
Projects
Weather

The about page will show my card, an accordeon, a form to contact me, and an embedded video.

The Projects page is a carousel showing the various projects I accomplished during my Bootcamp.

The Weather page allows to disclose information about the weather in your area.

## What Technologies were used?

I used various hooks from react and react-router-dom to create the navigation, and make my project working. 
The hooks below are the one that were used in the various components of my PortFolio:

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

### API

#### Moment.js

To show, and format an accurate day/month/year/time, I decided to use Moment.js.
Website can be found at the following URL: https://momentjs.com/

I used this API to show the date when showing the weather.

#### Weather API

I used this API to fetch the data from a server concerning the weather.
These information obtained from their server, can be seen in the weather page of my website.

Website can be found at the following URL: https://openweathermap.org/api

### CSS and Style-components

I styled most of the components with Style-Components that allowed me to keep the code lean.
I did use the classNames as well to show I could use another way to styled my components.

#### Icons

Icons were obtained through two different libraries:

fontawesome
https://fontawesome.com/docs/web/use-with/react/

React Icons
https://react-icons.github.io/react-icons

