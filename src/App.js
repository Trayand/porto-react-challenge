import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import MainData from './components/MainData';
import { Button } from 'react-bootstrap';
import "./style/Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const [keyword, setKeyword] = useState('')
  const [pokeData, setPokeData] = useState({})
  
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/:name">
              <Link to="/"><Button className="back-btn">Home</Button></Link>
              {/* <Link to={`/${}`}><Button className="back-btn">NEXT</Button></Link> */}
              <MainData
                pokeData={pokeData}
                setPokeData={setPokeData}
              ></MainData>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
