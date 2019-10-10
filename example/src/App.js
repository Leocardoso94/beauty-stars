import React, { Component } from 'react';

import BeautyStars from 'beauty-stars';

export default class App extends Component {
  state = { value: 0 };
  render() {
    return (
      <div>
        <BeautyStars
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </div>
    );
  }
}
