const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');
 
//load mong models
//const {User , Task} = require('./db/models');

//middleware loading
app.use(bodyParser.json());


//Route handler


//list routes

//get users listed
app.get('/users', (req,res) => {
    User.find({}).then((users) => {
        res.send(users);
    });
})
 
// create new user and return new uaer with id

app.post('/users',(req,res) => {
    //user info(field) passed through json body of req
    let name = req.body.name;

    let newUser = new User({
        name
    });

    newUser.save().then((userDoc) => {
        //callback returns full user doc with id
        require.send(userDoc);
    })
   
});
 
//update user 
app.patch('/users',(req,res) => {
    User.findOneAndUpdate({_id: req.params.id},{
      $set: req.body  
    }).then(() => {
        res.sendStatus(200);

    });

});

//delete user
app.delete('/users',(req,res) => {
    User.findOneAndRemove({
        _id: req.params.id
    }).then((removedUserDoc) => {
        res.send(removedUserDoc);
    });

});


app.get('/users/:userId/tasks', (req,res) =>{
    TextTrackList.find({   //return all task belonging to same id
        _userID: req.params.userId
    }).then((task) => {

        res.send(tasks);
    });
})




app.listen(3000,() => {
    console.log('server is running on port 3000');
})



