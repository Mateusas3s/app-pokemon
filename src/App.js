import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      name: '',
      postResponse: false,
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

  handleFormInput = (e) => {
    const target = e.target;
    this.setState({
      name: target.value
    })
  }

  handleFormSubmit = async () => {
    const { name } = this.state;

    try {
      const response = await fetch('https://en7y8iizmptsj.x.pipedream.net/', {
        method: 'post',
        body: JSON.stringify({
          name
        })
      });
      const dataJson = await response.json();

      this.setState({ postResponse: dataJson });
    } catch(e) {
      console.log(e);
    }
  }

  render(){
    const { pokemons, name, postResponse } = this.state

    return (
      <div className="App">
        {
          pokemons.map(pokemon => {
            return (
              <div key={pokemon.name}> {pokemon.name} </div> 
            )
          })
        }
        <hr />
        <form>
          <div>Nome: {name}</div>
          <input name="nome" type="text" value={name} onChange={this.handleFormInput} />
          <button type="button" onClick={this.handleFormSubmit}>Enviar</button>
          <div>
            Response: 
            {
              postResponse && JSON.stringify(postResponse)
            }
          </div>
        </form>
      </div>
    )
  }
}
export default App;
