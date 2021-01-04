import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import RecipeBox from './Components/RecipeBox';
import UpdateRecipe from './Components/UpdateRecipe';
import UserInputFoods from './Components/UserInputFoods';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      id: 0,
      title: '',
      ingredient: ''

    }
    //bind here
  }

  //get master recipe list
  //axios.get('../data.json')

  componentDidMount() {
    this.getRecipes();
    console.log(this.getRecipes())
  }

  //.then & .catch are promise functions

  getRecipes = () => {
    axios.get('/api/recipes')
      .then(res => {
        this.setState({ recipes: res.data })
      })
      .catch(err => console.log(err));
  }

  addRecipe = () => {

  }
}



export default App;
