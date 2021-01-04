import React, { Component } from 'react';
import Header from './Components/Header';
import RecipeBox from './Components/RecipeBox';
import UpdateRecipe from './Components/UpdateRecipe';
import UserInputFoods from './Components/UserInputFoods';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind here
  }

  //get master recipe list
  componentDidMount() {
    axios.get('../data.js')
  }
}

export default App;
