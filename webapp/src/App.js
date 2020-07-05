import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainContentComponent';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Time Tables</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
