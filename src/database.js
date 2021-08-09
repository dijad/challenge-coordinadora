const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://coordinadora-diego:coordinadora-diego@cluster0.vti3r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));