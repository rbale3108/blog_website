
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require("./routes/blogRoutes");
// require("dotenv").config();

// console.log(process.env.APP_PORT)
// console.log(process.env.DB_URL)
// express app
const app = express();
// connect mongodb
const dbURI = /*process.env.DB_URL*/"mongodb+srv://rbale0831:rohit3108@cluster0.dzwxs.mongodb.net/node-tuts";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(/*process.env.APP_PORT*/3000))
    .catch((error) => console.log(error));

// register view engine
app.set('view engine', 'ejs');

app.use(express.static('node_public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// normal routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.status(200).render('about', { title: 'About' });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 Packages
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
