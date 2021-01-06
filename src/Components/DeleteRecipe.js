import React, { Component } from 'react';
import axios from 'axios'

//THIS SHOULD BE A FUNCTIONAL COMPONENT BECAUSE NOT CHANGING
//STATE

class DeleteRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.recipe.title,
            ingredient: this.props.recipe.ingredient
        }
    }

    deleteRecipe = () => {
        axios.delete(`/api/recipe/${this.props.recipe.id}`, { title: this.state.title, ingredient: this.state.ingredient })
            .then(() => this.props.getRecipeFn())
            .catch(err => console.log(err));
    }



    render() {

        const { title, ingredient } = this.state;
        const { recipe } = this.props;

        return (
            <button onClick={() => this.deleteRecipe(this.props.recipe.id)
            } > Delete</button >
        )
    }
}


export default DeleteRecipe
