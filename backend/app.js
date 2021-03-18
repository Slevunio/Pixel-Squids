const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3200;
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/track.routes")(app);
require("./routes/shop-item.routes")(app);
require("./routes/image.routes")(app);
const db = require("./models");
db.sequelize.sync({force: true});

app.listen(port, () => {
    console.log(`App is listening at 'localhost:${port}'`);
})