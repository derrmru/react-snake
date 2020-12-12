## Snake

A classic game, built as reusable react component. Very lightweight, easy to install and get up and running.

Try the demo [here](https://thepetersweeney.com/snake/).

Typescript version available [here](https://github.com/derrmru/react-snake-404).

## Used Technologies and Libraries

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://reactjs.org/)

## Installation
```
npm install react-snake-game --save

```

## Usage

```
import React from 'react';
import Snake from './components/Snake/Snake';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Snake 
        color1="#248ec2"
        color2="#1d355e"
        backgroundColor="#ebebeb"
        />
    </div>
  );
}

export default App;

```
## Props

To match branding, you can input your preferred color scheme.

Props: 

1. color1: string
2. color2: string
3. backgroundColor: string

## Dependencies

React of course.