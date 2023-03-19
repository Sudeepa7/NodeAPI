const express = require('express')
const mongoose = require('mongoose');
const Movie = require('./models/productModel');
const Movies = require('./models/productModel');
const app = express()

app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('hello Blog')
})

app.get.('/movies',async(req,res)=>{
    try{
        const Movies = await Movie.find({});
        res.status(200).json(Movies)
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

app.post('/movies', async (req, res) => {
    try {
      const product = await Movie.create(req.body)
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  });
  

mongoose.connect('mongodb+srv://MovieAPI:MovieAPI@cluster0.8rc2daf.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(8080, () => {
            console.log('Node API app is running on port 8080')
        });
    }).catch((error) => {
        console.log(error)
    })
