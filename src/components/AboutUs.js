import React from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';


const AboutUs = () => (
  <div className="about-container">
    <h1 className="about__title">About Us</h1>
    <div className="about__data">
      <p>Sophistication and innovation seamlessly combine to revamp Bucharest nightlife, altering your senses to a new style of entertainment. BAMBOO is a novel approach to nightlife hospitality that fuses decadent opulence and superior white-glove service with the latest innovations in technology. BAMBOO is outfitted with endless crushed velvet drapery oversized statues, marble table tops, white crocodile banquets and plush satin finishes and gilded gold moulding framing.</p>
    </div>
    <div className="about__data">
      <p>Sophistication and innovation seamlessly combine to revamp Bucharest nightlife, altering your senses to a new style of entertainment. BAMBOO is a novel approach to nightlife hospitality that fuses decadent opulence and superior white-glove service with the latest innovations in technology.</p>
    </div>
    <div className="about__images">
      <img src={img1} alt="club inside"/>
      <img src={img2} alt="club inside"/>
      <img src={img3} alt="club inside"/>
      <img src={img4} alt="club inside"/>
    </div>
  </div>
);

export default AboutUs;