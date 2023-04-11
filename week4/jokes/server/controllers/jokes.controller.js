
const Joke = require('../models/jokes.model');

// all jokes
module.exports.getAllJokes = (req,res) =>{
    Joke.find()
        .then((allJokes) =>{
            res.json({jokes:allJokes})
        })
        .catch((err) =>{
            res.json({message:'something went wrong', error:err})
        })
}

//get single joke
module.exports.getOneJoke= (req,res) =>{
    Joke.findOne({_id: req.params.id})
    .then((oneJoke) =>{
        res.json({joke:oneJoke})
    })
    .catch((err) =>{
        res.json({message:'something went wrong', error:err})
    })
}

//create joke
module.exports.createJoke = (req,res) =>{
    Joke.create(req.body)
    .then((newJoke) =>{
        res.json({joke:newJoke})
    })
    .catch((err) =>{
        res.json({message:'something went wrong', error:err})
    })
}

//update joke
module.exports.updateJoke = (req,res) =>{
    Joke.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true, runValidators:true}
        )
        .then((updatedJoke)=>{
            res.json({joke:updatedJoke})
        })
        .catch((err) =>{
            res.json({message:'something went wrong', error:err})
        })
}

//delete joke
module.exports.deleteJoke = (req,res) =>{
    Joke.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.json({result:result})
    })
    .catch((err) =>{
        res.json({message:'something went wrong', error:err})
    })
}