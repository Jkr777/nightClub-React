import React from 'react';
import Carousel from './Carousel';
import Timer from '../containers/Timer';
import '../styles/styles.css';

const Main = props => (
  <main>
    <Carousel guestImg={props.guestImg} />
    <div className="artist-container">
      <div className="artist-container__name"> {props.eventMessage} </div>
      <Timer 
        eventDate={props.eventDate}
      />
    </div>
  </main>
);

export default Main;