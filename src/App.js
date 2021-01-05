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

  //Use e.target.name property to work with all inputs - use name with all elements & set this.state for that specific el.

  handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //.then & .catch are promise functions

  getRecipes = () => {
    axios.get('/api/recipes')
      .then(res => {
        this.setState({ recipes: res.data })
        //console.log(res)
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

        <input value={this.state.title} name='title' placeholder='Title' onChange={e => this.handleInputs(e)} />
        <input value={this.state.ingredient} name='ingredient' placeholder='ingredient' onChange={e => this.handleInputs(e)} />
        <button onClick={this.addRecipe}>Add Recipe</button>
        {/** 
        {
          this.state.recipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} getRecipeFn={this.getRecipes} />
          ))
        }

        **/}

      </div >

    );
  }
}



export default App;
