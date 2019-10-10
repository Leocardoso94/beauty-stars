import React, { Component } from 'react';

import BeautyStars from 'beauty-stars';

export default class App extends Component {
  state = { value: 0 };
  render() {
    return (
      <div className="wrapper">
        <h1 style={{ textAlign: 'center', color: '#fff' }}>Beauty Stars</h1>
        <BeautyStars
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </div>
    );
  }
}
