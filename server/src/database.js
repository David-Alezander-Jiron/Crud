const { use } = require('express/lib/application');
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://Localhost/mean-employees', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //useFindAndModify: false

    })
    .then((db) => console.log('Db is connected'))
    .catch((err)=> console.error(err));