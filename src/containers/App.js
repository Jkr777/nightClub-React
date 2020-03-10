import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Element } from 'react-scroll';
import axiosInstance from '../services/axios';
import Header from './Header';
import Main from '../components/Main';
import Booking from '../components/Booking';
import AboutUs from '../components/AboutUs';
import Price from './Price';
import Location from '../components/Location';
import Footer from '../components/Footer';
import AuthForm from './AuthForm';
import EventsForm from './EventsForm';

class App extends Component {
  state = {
    auth: false,
    guestImg: "",
    eventMessage: "",
    eventDate: "",
    prices: [],
    error: ""
  };

  handleError = (err) => {
    this.setState({error: err})
  };

  removeError = () => {
    this.setState({error: ""})
  };

  handleAuth = res => {
    const token = localStorage.setItem("auth-token-club", res.headers['x-auth']);
    axiosInstance.defaults.headers.common['X-Auth'] = token;
    this.setState({auth: true});
  };

  componentDidMount() {
    const token = localStorage.getItem("auth-token-club");
    if(token) {
      axiosInstance.defaults.headers.common['X-Auth'] = token;
      axiosInstance.get('/admin')
        .then(() => this.setState({auth: true}))
        .catch(() => localStorage.removeItem("auth-token-club"));
    }

    axiosInstance.get('/events')
      .then(res => this.setState({guestImg: `https://yourAWSlink${res.data.guestImg}`, eventMessage: res.data.eventMessage, eventDate: res.data.eventDate, prices: res.data.prices}) )
      .catch(err => console.log(err.response.data));
  };

  handleRender = () => {
    return (
        <React.Fragment>
          <Element name="Event">
            <Main 
              guestImg={this.state.guestImg}
              eventMessage={this.state.eventMessage}
              eventDate={this.state.eventDate}
            />
          </Element>
          <Element name="Prices">
            <Price 
              prices={this.state.prices}
            />
          </Element>
          <Element name="About Us">
            <AboutUs />
          </Element>
          <Element name="Booking">
            <Booking />
          </Element>
          <Element name="Location">
            <Location />
          </Element> 
          <Footer />
        </React.Fragment>
    )
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={() => this.handleRender()} />
            <Route exact path="/register" render={props =>  <AuthForm endpoint="register" error={this.state.error} handleError={this.handleError} handleAuth={this.handleAuth} {...props} /> } />
            <Route exact path="/login" render={props =>  <AuthForm endpoint="login" error={this.state.error} handleError={this.handleError} handleAuth={this.handleAuth} {...props} /> } />
            <Route path="/events" component={this.state.auth ? EventsForm : null} />
            <Redirect from="/" to="/" />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;