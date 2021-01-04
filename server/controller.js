
const data = require('../src/data.json')

//Put server handler functions in controller files. Keep separate from server logic. 
//Handler functions handle the server response to a client request
//module.exports allows function to be exported as an object
module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(data)
    },

    getSingleRecipe: (req, res) => {
        const { id } = req.params  //destructure id off of req.params
        const recipe = data.find(el => +id === el.id)
        if (!recipe) return res.sendStatus(404)
        res.status(200).send(recipe)
    }
}