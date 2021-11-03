// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();

// API ENDPOINTS GO HERE


// WEBPAGES

routes.get('/', (req,res) => {
    res.render('homepage');
})

routes.get('/specialty-pizza', (req, res) => {
    res.render('specialty-pizza')
})
 
routes.get('/review', (req, res) => {
    res.render('review')
})

routes.get('/build-your-own', (req, res) => {
    res.render('build-your-own')
})

routes.get('/your-review', (req, res) => {
    res.render('your-review')
})

routes.get('/your-pizza', (req, res) => {
    res.render('your-pizza')
})


export default routes;
