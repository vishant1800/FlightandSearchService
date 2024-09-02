const express = require('express');
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const SetupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);

        const obj = new CityRepository();
        //obj.createCity({name: "New Delhi"}); 
        obj.deleteCity(1);
    })
}

SetupAndStartServer();