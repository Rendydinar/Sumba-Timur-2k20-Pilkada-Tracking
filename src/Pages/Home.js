import React from 'react';
import Landing from '../Components/Landing';
import Paslon from '../Components/Paslon';
import Statistik from '../Components/Statistik/index';
import ExpansionPanel from '../Components/ExpansionPanel/index';
import Mitra from '../Components/Mitra';

const Home = () => {
  return (
  	<div>
  	  <Landing />
  	  <Paslon />
  	  <br />
  	  <br />
  	  <Statistik />
  	  <ExpansionPanel />
  	  <br />
  	  <br />
  	  <Mitra />
  	</div>
  );
}

export default Home;
