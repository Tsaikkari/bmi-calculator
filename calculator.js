//jshint = esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight/Math.pow(height, 2);

    res.send("Your BMI is " + Math.round(bmi));
});

app.listen(3002), () => {
    console.log('Server listening');
};

