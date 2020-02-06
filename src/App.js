import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import MainData from './components/MainData';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import "./style/Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPokemon from './components/AllPokemon';
import { CirclePicker } from 'react-color'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

function App() {
  // const [keyword, setKeyword] = useState('')
  const [pokeData, setPokeData] = useState({})
  const [bgColor, setBgColor] = useState({ backgroundColor: '#282c34' })
  const color = ["#282c34", "#242322", "#673ab7", "#3f51b5", "#00bcd4", "#009688", "#821cad", "#8bc34a", "#000000", "#ff9800", "#795548", "#607d8b"]

  const handleChangeComplete = (color) => {
    setBgColor({ backgroundColor: color.hex });
  };


  return (
    <div className="App">
      <header className="App-header" style={bgColor}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/">
                <DropdownButton
                  title="Change background color"
                  variant="outline-light"
                  style={{position: 'absolute', top: 0}}
                >
                  <Dropdown.Item eventKey="1">
                    <CirclePicker colors={color} onChangeComplete={handleChangeComplete} />
                  </Dropdown.Item>
                </DropdownButton>
                <MainPage />
              </Route>
              <Route exact path="/:name">
                <Link to="/"><Button className="back-btn">Home</Button></Link>
                {/* <Link to={`/${}`}><Button className="back-btn">NEXT</Button></Link> */}
                <DropdownButton
                  title="Change background color"
                  variant="outline-light"
                  style={{position: 'absolute', top: 0}}
                >
                  <Dropdown.Item eventKey="1">
                    <CirclePicker colors={color} onChangeComplete={handleChangeComplete} />
                  </Dropdown.Item>
                </DropdownButton>
                <MainData
                  pokeData={pokeData}
                  setPokeData={setPokeData}
                ></MainData>
                <AllPokemon />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </header>
    </div>
  );
}

export default App;
