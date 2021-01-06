import axios from 'axios';
import React, { Component } from 'react';
import DeleteRecipe from './DeleteRecipe'


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
        axios.put(`/api/recipe/${this.props.recipe.id}`, { title: this.state.title, ingredient: this.state.ingredient })
            .then(() => {
                this.props.getRecipeFn();
                this.setState({
                    title: '',
                    ingredient: '',
                    isEditing: false
                })
            })
            .catch(err => console.log(err));
    }

    render() {

        const { title, ingredient, isEditing } = this.state;
        const { recipe } = this.props;
        //console.log(this.props)

        return (
            <section>
                {
                    isEditing
                        ? (
                            <section>
                                <input value={title} name='title' onChange={e => this.handleInput(e)} />
                                <input value={ingredient} name='ingredient' onChange={e => this.handleInput(e)} />
                                <button onClick={this.updateRecipe}
                                >Submit</button>
                                {/* { console.log(this.state.title)}
                                { console.log(this.state.ingredient)} */}
                            </section >
                        )
                        : (
                            <section>
                                <h3>Name: {recipe.title}</h3>
                                <h4>Main ingredient: {recipe.ingredient}</h4>
                                <button onClick={this.handleToggle}>Edit</button>

                                {/* { console.log(this.state.title)}
                                { console.log(this.state.ingredient)} */}

                                <DeleteRecipe recipe={this.props.recipe} getRecipeFn={this.props.getRecipeFn} />
                            </section>
                        )
                }

            </section>

        )
    }
}


export default UpdateRecipe;