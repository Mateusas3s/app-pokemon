import React, { Component } from 'react';
import { Link } from "react-router-dom"

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
    }
  }
  async componentDidMount() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const dataJson = await response.json();

      this.setState({ pokemons: dataJson.results });
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    const { pokemons } = this.state
    const regex = /\/pokemon\/(\d)/gm

    return (
      <div className="App">
        {
          pokemons.map(pokemon => {
            let url = pokemon.url.match(regex)[0]
            return (
              <div key={pokemon.name}> 
                <Link to={url}>
                  {pokemon.name} 
                </Link>
              </div> 
            )
          })
        }
      </div>
    )
  }
}
export default App;
