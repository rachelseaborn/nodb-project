import React, { Component } from 'react';
import axios from 'axios'

class DeleteRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.recipe.title,
            ingredient: this.props.recipe.ingredient
        }
    }

    deleteRecipe = () => {
        axios.put(`/api/recipes/${this.props.recipe.id}`, { title: this.state.title, ingredient: this.state.ingredient })
            .then(() => this.props.getRecipeFn())
            .catch(err => console.log(err));
    }


    render() {

        const { title, ingredient } = this.state;
        const { recipe } = this.props;

        return (
            <section>
                <input value={title} name='title' onChange={e => this.handleInputs(e)} />
                <input value={ingredient} name='ingredient' onChange={e => this.handleInputs(e)} />
                <button onClick={this.toggleView}>Submit</button>

                <h3>{recipe.title}</h3>
                <h4>{recipe.ingredient}</h4>
                <button onClick={this.toggleView}>Edit</button>
                <button>Delete</button>
            </section>
        )
    }
}
