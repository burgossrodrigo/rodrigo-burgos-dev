import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Breadcrumb, Toolbar, Link } from '@material-ui/core';
import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import Content from './Components/Content.js';


function App() {
	
			useEffect(() => {
			document.title = `Rodrigo Burgos - Fullstack Deveoper`;
		  });
	
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
		<Navigation />
		<Content /> 
		<Footer />	
    </div>
  );
}

export default App;
