import React from 'react';
import Button from '@material-ui/core/Button';

const Btn = ({text, scroll}) => (
  <Button
    onClick={scroll}
    variant="contained" 
    size="small" 
    style={{backgroundColor: "#4a8776", color: "#f7fbfa", fontWeight: "bold"}}>
      {text}
  </Button>
);

export default Btn;