const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello world');
});

require("./routes/track.routes")(app);
const db = require("./models");
db.sequelize.sync({force: true});

app.listen(port, () => {
    console.log(`App is listening at 'localhost/${port}'`);
})