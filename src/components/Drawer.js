import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const DrawerComp = props => {
  const scrollHandler = e => {
    scroller.scrollTo(e, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
    props.handleDrawer();
  };

  return(
    <div>
      <Drawer anchor="right" open={props.drawerState} onClose={() => props.handleDrawer()}>
        <List component="nav">
          <ListItem button onClick={() => scrollHandler("Event")}>
            Event
          </ListItem>
          <ListItem button onClick={() => scrollHandler("Prices")}>
            Prices
          </ListItem>
          <ListItem button onClick={() => scrollHandler("About Us")}>
            About us
          </ListItem>
          <ListItem button onClick={() => scrollHandler("Booking")}>
            Book
          </ListItem>
          <ListItem button onClick={() => scrollHandler("Location")}>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
)};

export default DrawerComp;