import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComp from '../components/Drawer';

class Header extends Component {
  state = {
    drawer: false,
    headerStyle: false
  };

  handleDrawer = () => {
    this.setState((prevState) => ({drawer: !prevState.drawer}));
  };

  handleScroll = () => {
    window.scrollY > 0 ? this.setState({headerStyle: true}) : this.setState({headerStyle: false});
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <AppBar style = {{ backgroundColor: this.state.headerStyle ? "#142420" : "rgba(20, 36, 32, 0.5)", boxShadow: "none" }} position = "fixed">
        <Toolbar>
          <div className="header__container">
            <span className="header__logo">BAMBOO</span>
          </div>
          
          <IconButton aria-label="Menu" onClick = {() => this.handleDrawer()}>
            <MenuIcon style = {{ color: "#d6e9e3"}} />
          </IconButton>
        
          <DrawerComp drawerState = { this.state.drawer } handleDrawer = { this.handleDrawer } scrollHandler={this.props.scrollHandler}/>
        </Toolbar>
      </AppBar> 
    );
  }
}

export default Header;