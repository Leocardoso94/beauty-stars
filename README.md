<h1 align="center">Welcome to beauty-stars 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D8-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D5-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/leocardoso94_" target="_blank">
    <img alt="Twitter: leocardoso94_" src="https://img.shields.io/twitter/follow/leocardoso94_.svg?style=social" />
  </a>
</p>

> A simple and beauty star rating for React projects

## Install

```bash
npm install --save beauty-stars
// or
yarn add beauty-stars
```

## Usage

```tsx
import React, { Component } from 'react';

import BeautyStars from 'beauty-stars';

export default class App extends Component {
  state = { value: 0 };
  render() {
    return (
      <BeautyStars
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}
```

## Author

👤 **Leocardoso94**

- Twitter: [@leocardoso94\_](https://twitter.com/leocardoso94_)
- Github: [@leocardoso94](https://github.com/leocardoso94)

## Show your support

Give a ⭐️ if this project helped you!
