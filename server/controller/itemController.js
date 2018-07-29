var itemModel = require("../model/itemModel");


class ItemController {
    static addItem(req,res){
        itemModel.create({
            name: req.body.name,
            price : `$${req.body.price}`,
            imageUrl : req.body.imageUrl,
            category : req.body.category,
            description: req.body.description
        },(err,data)=>{
            if(err){
                res
                .status(500)
                .json(err)
            }else{
                res
                .status(200)
                .json(data)
            }
        })
    }

    static getAllItems(req,res){
        itemModel.find({},(err,data)=>{
            if(err){
                console.log(err);
                res
                .status(500)
                .json(err);
            }else{
                res
                .status(200)
                .json(data);
            }
        })
    }

    static getItemByCategory(req,res){
        itemModel.find({ category : req.body.category},(err,data) =>{
            if(err){
                res
                .status(500)
                .json(err)
            }else{
                res
                .json(data)
            }
        })
    }
}


module.exports = ItemController;