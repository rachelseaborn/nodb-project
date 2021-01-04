
const data = require('../src/data')
let id = 1;

/* alt to data.json
const recipes = [];
let id = 0;
*/

//Put server handler functions in controller files. Keep separate from server logic. 
//Handler functions handle the server response to a client request
//module.exports allows function to be exported as an object
//req: request obj, e.g. id parameter
//res: response obj of methods; how info back to client is packaged


module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(data);
    },

    getSingleRecipe: (req, res) => {
        const { id } = req.params  //destructure id off of req.params
        const recipe = data.find(el => +id === el.id)
        if (!recipe) return res.sendStatus(404)
        res.status(200).send(recipe)
    },

    //post

    addRecipe: (req, res) => {
        // const { id } = req.params;
        const { title, ingredient } = req.body;

        let newRecipe = {
            id: id,
            title: title,
            ingredient: ingredient
        }


        data.push(newRecipe);
        //console.log('data')
        id++;
        res.status(200).send(data);
    },

    //put

    updateRecipeName: (req, res) => {
        const { id } = req.params;
        let editRecipe = data.find(el => el.id === +id);
        editRecipe = {
            id: editRecipe.id,
            title: req.body.title || editRecipe.title,
            ingredient: req.body.ingredient || editRecipe.ingredient
        }
        res.sendStatus(200);
    },

    deleteRecipe: (req, res) => {
        const { id } = req.params;
        let recipeID = data.findIndex(el => el.id === +id)
        data.splice(recipeID, 1);

        res.sendStatus(200);

    }
}