import React from 'react';
import Accordion  from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SehatiImg from '../../static/sehati.jpg'
import KobulImg from '../../static/kobul.jpg'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	backgroundGradient: {
		backgroundImage: 'radial-gradient( circle farthest-corner at 22.4% 21.7%,  rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )'
	}
}));


const Kecamatan = ({data}) => {
  const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.backgroundGradient}>
	    <AccordionSummary
	      expandIcon={<ExpandMoreIcon />}
	      aria-controls="panel1a-content"
	      id="panel1a-header"
	    >
	    <Typography><b>{data.name}</b></Typography>
	    </AccordionSummary>
	    <AccordionDetails>
		  <List component="nav" aria-label="main mailbox folders">
		    <ListItem button>
		  	  <div style={{display: 'flex', alignItems: 'center', color: '#0000FF'}}>
		  	    <Avatar alt="Sehati" src={SehatiImg} style={{marginRight: '7px', marginLeft: '7px'}} />
		  	    <b> <span style={{marginRight: '7px', marginLeft: '7px'}}> Sehati </span> : {data.sehati} Suara </b>
		  	  </div> 
		    </ListItem>
		    <ListItem button>
		  	  <div style={{display: 'flex', alignItems: 'center', color: '#FFFF00'}}>
		  	    <Avatar alt="Sehati" src={KobulImg}  style={{marginRight: '7px', marginLeft: '7px'}} />
		  	    <b> <span style={{marginRight: '7px', marginLeft: '7px'}}>Kobul </span> : {data.kobul} Suara </b>
		  	  </div> 
		    </ListItem>
		    <ListItem button>
		  	  <div>
		  	   <b> <span style={{color: '#000'}}>Total</span> : {data.kobul+data.sehati} Suara </b>
		  	  </div> 
		    </ListItem>
          </List>
		</AccordionDetails>
  	  </Accordion>
    </div>
  )
} 
 

export default Kecamatan;