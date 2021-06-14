import React, { Component } from 'react';

class Pokemon extends Component {
  state = {
    data: false,
    loading: true,
  }

  async componentDidMount() {
    const { params: { id }} = this.props.match;
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const dataJson = await response.json();
      
      this.setState({ loading: false, data: dataJson });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div>
        {
          loading ? (
            <p>Carregando...</p>
          ) : (
            <div>
              <h4>{data.name}</h4>

              <div>
                Abilities:
                {
                  data.abilities.map(row => <p key={row.ability.name}>* {row.ability.name}</p>)
                }
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Pokemon;