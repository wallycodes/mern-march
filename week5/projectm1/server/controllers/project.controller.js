//funstions that connect to our routes

const Project = require('../models/project.model');

module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then((allProjects) => {
            res.json({ projects: allProjects })
            // or you can just return allshows in the object
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createProjects =(req,res) =>{
    Project.create(req.body)
        .then ((newProject) =>{
            res.json({project: newProject})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// module.exports.findOneShow = (req, res) =>{
//     console.log(req.params)
//     //req.params.id the "id" cannot be changed to another name here and in the routes section, must be same. 
//     //params is an object
//     Show.findOne({_id: req.params.id})
//         .then((oneShow)=>{
//             res.json({show:oneShow})
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.updateShow = (req, res) =>{
//     Show.findOneAndUpdate({_id: req.params.id},
//         req.body,
//         {new:true, runValidators:true}
//         ) 
//         .then((updatedShow) => {
//             res.json({show:updatedShow})
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.deleteShow = (req,res) =>{
//     Show.deleteOne({_id:req.params.id})
//         .then((result) =>{
//             res.json({result:result})
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }