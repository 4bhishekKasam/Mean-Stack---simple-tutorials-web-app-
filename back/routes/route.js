var express  = require('express');
var router = express.Router();
const bodyParser  = require('body-parser');
var User = require('../models/user');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
  /* serves main page */
router.get("/user", function(req, res, next) {
 //   res.json("message:main page");
    User.find(function(err, user){
        if(err){
                res.json(err);
                }
        else{   
             res.json(user);  
             }
    });
 });

 router.post('/user',(req,res,next)=>{
    let newUser = new User({
        lang : req.body.lang,
        topic : req.body.topic,
        info : req.body.info
    });
    newUser.save((err) => {
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'user added successfully'});
        }
    });
});

// router.delete('/user/:id',function(req,res){
//     User.findByIdAndRemove(req.params.id, function(err,user){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json({msg:"deleted successfully"});
//         }
//     });
// });


// router.put('/user/:id', (req,res,next)=>{
//     User.findOneAndUpdate({_id:req.params.id}, {
//         $set :{
//             name : req.body.name,
//             username : req.body.username
//         }
//     },
//         function(err, user){
//             if(err){
//                 res.json(err);
//             }
//             else{
//                 res.json(user);
//             }
//         });
// });



 module.exports = router;