import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }


  componentDidMount(){
    this.fetcher()
  }

  render() {
    return (
      <>
        <ul>
            {
                this.state.pokemons.map((pokemon, key)=>{
                    return <li key={key}>{pokemon.name}</li>
                })
            }
        </ul>
      </>
    );
  }

  fetcher = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
          console.log(myJson.results);
        this.setState({pokemons: myJson.results})
      });
  }

  //   fetch("https://pokeapi.co/api/v2/pokemon", {})
  //   .then(result => {
  //       console.log(result);
  //     return result.json();
  //   })
  //   .catch(err => {
  //       console.log(err);
  //       return 'nothing'
  //   });
  //   }
}
