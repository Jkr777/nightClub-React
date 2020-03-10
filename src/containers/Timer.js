import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Timer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  TIMER;

  getTime = () => {
    const time = Date.parse(this.props.eventDate) - Date.parse(new Date());
    if(time < 0) {
     
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000/60) % 60);
      const hours = Math.floor((time / (1000*60*60)) % 24);
      const days = Math.floor(time / (1000*60*60*24));

      this.setState({days, hours, minutes, seconds});
    }
  };

  componentDidMount() {
    this.TIMER = setInterval(() => this.getTime(this.state.deadline), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.TIMER);
  };

  render() {
    return (
      <Fade top delay={500}>
        <div className="timer">
          <div className="timer__item">
            <div className="timer__item__name">
              Days
            </div>
            <div className="timer__item__time">
              { this.state.days || 0 }
            </div>
          </div>
          <div className="timer__item">
            <div className="timer__item__name">
              Hours
            </div>
            <div className="timer__item__time">
              { this.state.hours || 0 }
            </div>
          </div>
          <div className="timer__item">
            <div className="timer__item__name">
              Minutes
            </div>
            <div className="timer__item__time">
              { this.state.minutes || 0 }
            </div>
          </div>
          <div className="timer__item">
            <div className="timer__item__name">
              Seconds
            </div>
            <div className="timer__item__time">
              { this.state.seconds || 0 }
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Timer;