import axios from 'axios';
import React, { Component } from 'react';


class UpdateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            nameInput: '',
            title: this.props.recipe.title,
            ingredient: this.props.recipe.ingredient
        }
    }

    handleInput = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    handleToggle = () => {
        if (this.state.isEditing) {
            this.setState({ isEditing: false })
        } else {
            this.setState({ isEditing: true })
        }
    }

    //put - 2 params: endpoint & body

    updateRecipe = () => {
        axios.put(`/api/recipes/${this.props.book.id}`, { title: this.state.title, ingredient: this.state.ingredient })
            .then(() => {
                this.props.getRecipeFn();
                this.setState({
                    title: '',
                    author: '',
                    isEditing: false
                })
            })
            .catch(err => console.log(err));
    }


    handleEdit = () => {

    }

    render() {
        //destructuring makes using state and props values easier
        const { title, ingredient, isEditing } = this.state;
        const { recipe } = this.props;

        return (
            <section>
                {isEditing
                    ? (
                        <section>
                            <input value={title} name='title' onChange={e => this.handleInputs(e)} />
                            <input value={ingredient} name='ingredient' onChange={e => this.handleInputs(e)} />
                            <button onClick={this.updateRecipe}>Submit</button>
                        </section>
                    )
                    : (
                        <section>
                            <h3>{recipe.title}</h3>
                            <h4>{recipe.ingredient}</h4>
                            <button onClick={this.handleToggle}>Edit</button>
                            <button>Delete</button>
                        </section>
                    )}
            </section>

        )
    }
}


export default UpdateRecipe