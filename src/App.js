import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import DeleteRecipe from './Components/DeleteRecipe';
import UpdateRecipe from './Components/UpdateRecipe';
//import UserInputFoods from './Components/UserInputFoods';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      title: '',
      ingredient: ''
    }

    //bind here

  }

  //Use e.target.name property to work with all inputs - use name with all //elements & set this.state for that specific el.

  handleInputs = (el) => {
    this.setState({
      [el.target.name]: el.target.value
    })
  }

  //.then & .catch are promise functions

  getRecipes = () => {
    axios.get('/api/recipes')
      .then(res => {
        this.setState({ recipes: res.data })

      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getRecipes();
  }

  //post 2 args: endpoint & body - obj for ctrl ()

  addRecipe = () => {
    axios.post('/api/recipe', { title: this.state.title, ingredient: this.state.ingredient })
      .then(res => {
        this.setState({ recipes: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">

        <Header />

        <button onClick={this.getRecipes}>Recipe List</button>

        <input value={this.state.title} name='title' placeholder='title' onChange={el => this.handleInputs(el)} />
        <input value={this.state.ingredient} name='ingredient' placeholder='ingredient' onChange={el => this.handleInputs(el)} />
        <button onClick={this.addRecipe}>Add Recipe</button>

        {
          this.state.recipes.map(recipe => (
            <UpdateRecipe key={recipe.id} recipe={recipe} getRecipeFn={this.getRecipes} />
          ))
        }
        {/* {
          
          this.state.recipes.map(recipe => (
            <DeleteRecipe key={recipe.id} recipe={recipe} getRecipeFn={this.getRecipes} />
          ))
        } */}

      </div >

    );
  }
}

export default App;
