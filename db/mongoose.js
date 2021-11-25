// connection of logic to db

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}) .then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.log("error while connecting to db");
    console.log(e); 
});

//prevent deprecation
// mongoose.set('useCreateIndex', true);
 //mongoose.set('useFindAndModify', true);

module.exports = {
    mongoose
};


