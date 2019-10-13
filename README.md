<h1 align="center">Welcome to beauty-stars 👋</h1>
<p>
  <a href='https://coveralls.io/github/Leocardoso94/beauty-stars?branch=master'>
    <img src='https://coveralls.io/repos/github/Leocardoso94/beauty-stars/badge.svg?branch=master' alt='Coverage Status' />
  </a>
  <a href="https://badge.fury.io/js/beauty-stars">
    <img src="https://badge.fury.io/js/beauty-stars.svg" alt="npm version" height="18">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/leocardoso94_" target="_blank">
    <img alt="Twitter: leocardoso94_" src="https://img.shields.io/twitter/follow/leocardoso94_.svg?style=social" />
  </a>
</p>

> A simple and beauty star rating for React projects

![](https://raw.githubusercontent.com/Leocardoso94/beauty-stars/master/gif.gif)

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

### API

This a list of props that you can pass down to the component:

| Property             | Description                                                | Default value | type     |
| -------------------- | ---------------------------------------------------------- | ------------- | -------- |
| `maxStars`           | How many total stars you want                              | 5             | number   |
| `value`              | Set rating value                                           | 0             | number   |
| `editable`           | Enable edit                                                | true          | boolean  |
| `inactiveColor`      | Color of inactive star (this supports any CSS valid value) | `#121621`     | string   |
| `activeColor`        | Color of selected or active star                           | `#FFED76`     | string   |
| `size`               | Size of stars (in px)                                      | `36px`        | string   |
| `onChange(newValue)` | Will be invoked any time the rating is changed             | `undefined`   | function |

## Author

👤 **Leocardoso94**

- Twitter: [@leocardoso94\_](https://twitter.com/leocardoso94_)
- Github: [@leocardoso94](https://github.com/leocardoso94)

## Show your support

Give a ⭐️ if this project helped you!
