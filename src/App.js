import logo from './logo.svg';
import './App.css';
import { Breadcrumb, Toolbar, Link } from '@material-ui/core';
import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div className="App">
		<Navigation />
		<Footer />	
    </div>
  );
}

export default App;
