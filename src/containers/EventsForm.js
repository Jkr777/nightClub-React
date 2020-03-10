import React, { Component } from 'react';
import axiosInstance from '../services/axios';

class EventsForm extends Component {
  state = {
    aws: {},
    eventMessage: '',
    eventDate: '',
    entrancePositionPrice: '',
    middlePositionPrice: '',
    scenePositionPrice: '',
    selectedFile: null,
    error: ''
  };

  handleFileSelection = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.selectedFile) return this.setState({error: 'Add a guest image!'});

    const data = Object.assign({}, { eventDate: this.state.eventDate, eventMessage: this.state.eventMessage , entrancePositionPrice: this.state.entrancePositionPrice, middlePositionPrice: this.state.middlePositionPrice, scenePositionPrice: this.state.scenePositionPrice });
    
    axiosInstance.get('/events/upload')
    .then(res => this.setState({ aws: res.data })) // aws url and link request
    .then(() => { // aws file upload req
      axiosInstance.put(this.state.aws.url, this.state.selectedFile, {   
        headers: {
          'Content-Type': this.state.selectedFile.type
        }
      })
    })
    .then(() => { // heroku server form req
      axiosInstance.post('/events', { ...data, guestImg: this.state.aws.key })
      .then(res => {
        this.setState({img: res.data.guestImg});
        this.props.history.push('/');
      }).catch(err => this.setState({error: err.response.data}));
    })
    .catch(err => this.setState({error: err.response.data}));
  };

  render() {
    return (
      <div className="event-form">
        <h1 className="event-form__title">Add a new Event</h1>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form className="auth-container__form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="eventMessage" 
            placeholder="Event Message"
            onChange={this.handleChange}
            className="auth-container__form__input"
          />
          <input 
            type="text"
            name="eventDate" 
            placeholder="Event Date: mm/dd/yyyy"
            onChange={this.handleChange}
            className="auth-container__form__input"
          />
          <input 
            type="text"
            name="entrancePositionPrice" 
            placeholder="Entrance Position Price"
            onChange={this.handleChange}
            className="auth-container__form__input"
          />
          <input 
            type="text"
            name="middlePositionPrice" 
            placeholder="Middle Position Price"
            onChange={this.handleChange}
            className="auth-container__form__input"
          />
          <input 
            type="text"
            name="scenePositionPrice" 
            placeholder="Scene Position Price"
            onChange={this.handleChange}
            className="auth-container__form__input"
          />
          <input 
            type="file" 
            accept="image/*"
            name="image" 
            placeholder="artist img"
            onChange={this.handleFileSelection}
            className="file-input"
          />
          <button className="auth-container__form__btn">Create Event</button>
        </form>
      </div>
    ); 
  };
}

export default EventsForm;