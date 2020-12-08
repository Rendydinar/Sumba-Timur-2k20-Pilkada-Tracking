import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
  	<Router>
  	  <Header />
      <Route path="/" exact={true} component={Home} /> 
      <Route path="/tentang" component={About} /> 
      <Route path="/dashboard-set-data" component={Dashboard} /> 
      <Footer />
  	</Router>
    
  );
}

export default App;
