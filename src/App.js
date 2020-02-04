import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
// import ListItem from './components/ListItem'
// import Main from './components/Main';
// import Search from './components/Search';
import "./components/style/Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [keyword, setKeyword] = useState('')
  return (
    <div className="App">
      <header className="App-header">
      <img className={"main-image"} src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
      <MainPage></MainPage>
      {/* <img className={"main-image"} src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt=""></img>
        <Search keyword={keyword} setKeyword={setKeyword}/>
        <Image keyword={keyword} />
        <Main setKeyword={setKeyword}/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ListItem/> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
