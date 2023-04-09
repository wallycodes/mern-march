//funstions that connect to our routes

const Show = require('../models/tvshow.model');

module.exports.findAllShows = (req, res) => {
    Show.find()
        .then((allShows) => {
            res.json({ shows: allShows })
            // or you can just return allshows in the object
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createShow =(req,res) =>{
    Show.create(req.body)
        .then ((newShow) =>{
            res.json({show:newShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneShow = (req, res) =>{
    console.log(req.params)
    //req.params.id the "id" cannot be changed to another name here and in the routes section, must be same. 
    //params is an object
    Show.findOne({_id: req.params.id})
        .then((oneShow)=>{
            res.json({show:oneShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateShow = (req, res) =>{
    Show.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
        ) 
        .then((updatedShow) => {
            res.json({show:updatedShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteShow = (req,res) =>{
    Show.deleteOne({_id:req.params.id})
        .then((result) =>{
            res.json({result:result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}