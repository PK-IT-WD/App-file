const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.use('/add-product', (req, res, next) => {
    console.log('Add Product Page');
    res.send('<form action="/product" method="POST"><h1>Product Name: </h1><input type="text" name="title"><br><br><h1>Size: </h1><input type="number" name="size"><button type="submit">Submit</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('Main Page');
    res.send('<h1>Main Page<h1>');
});

app.listen(4000);