import React from 'react'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import DataSource from '../../DataSource/data';
import Kecamatan from './Kecamatan';

const ExpansionPanel = () => {
	
  return (
	<div>
  	  <br/>
	  <br/>
	  <center>
	    <h1>Data Per-Kecamatan</h1>
	    <hr style={{width: "30%", marginTop: "-1em"}} />
	  </center>
	  <br/> 
	  <Container maxWidth="md">
	    <Paper>	
	     {
	   	  DataSource.perkecamatan.map((kecamatan, key) => { return ( <Kecamatan data={kecamatan} key={key}/> ) })
	     } 
	    </Paper>				     
	  </Container>
	</div>
  )
}

export default ExpansionPanel;