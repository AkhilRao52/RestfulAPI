let customerModel = require(`../models/customer.model`);
let express = require(`express`);
let router = express.Router();

router.post('/customer',(req,res)=>{
    if(!req.body){
        return res.status(400).send('Request body is missing');
    } else {
        let model = new customerModel(req.body);
        model.save().then((doc)=>{
            if(!doc){
                return res.status(500).send(doc);
            } else {
                res.status(201).send(doc);
            }
        }).catch(err =>{
            res.status(500).json(err);
        })
    }
})

router.get('/customer',(req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing url parameter: email');
    }
    customerModel.findOne({
        email: req.query.email
    }).then(doc=>{
        res.json(doc)
    }).catch(err=>{
        res.status(500).json(err);
    })
})

router.put('/customer',(req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing url parameter: email');
    }
    customerModel.findOneAndUpdate({
        email: req.query.email
    },req.body,{new: true}).then(doc=>{
        res.json(doc)
    }).catch(err=>{
        res.status(500).json(err);
    })
})

router.delete('/customer',(req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing url parameter: email');
    }
    customerModel.findOneAndRemove({
        email: req.query.email
    }).then(doc=>{
        res.json(doc)
    }).catch(err=>{
        res.status(500).json(err);
    })
})


module.exports = router;