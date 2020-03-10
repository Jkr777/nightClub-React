import React, {Component} from 'react';
import { scroller } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Btn from '../components/Button';

class Price extends Component {
  state = {
    positions: ["Entrance", "Near The Scene", "Middle"],
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit quis lorem nec sodales.", "Morbi enim eros, vestibulum sit amet sodales at, faucibus eu ipsum. Duis in vestibulum mauris, at pharetra urna.", "In hac habitasse platea dictumst. Nam at lacus urna."],
    delay: [500, 0, 500]
  };

  scrollHandler = e => {
    scroller.scrollTo(e, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
  }

  containerContent = () => (
    this.state.positions.map((e, i) => ( 
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="price-card">
          <div className="price-card__top">
            <span>{this.state.positions[i]}</span>
            <span className="price-card__top__price"> $ {this.props.prices[i]}</span>
          </div>
          <div className="price-card__middle">
            <p>{this.state.description[i]}</p>
          </div>
          <div className="price-card__bottom">
            <Btn text="Book" scroll={() => this.scrollHandler("Booking")} />
          </div>
        </div>
      </Zoom>
    ))
  );

  render() {
    return (
      <React.Fragment>
        <h1 className="title">PRICING</h1>
        <div className="price-container">
          {this.containerContent()}
      </div>
      </React.Fragment>
    )
  }
}

export default Price;