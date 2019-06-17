let express = require(`express`);
let router  = express.Router();

// queryString => query property on the request object
// localhost:3000/person?name=akhil
router.get(`/person`,(req,res)=>{
   if(req.query.name){
    res.send(`you requested a person ${req.query.name}`);
   } else
    res.send(`you requested a person`);
})

// params proprty on the request object
// localhost:3000/person/name
router.get(`/person/:name`,(req,res)=>{
    res.send(`you requested a person ${req.params.name}`);
})

module.exports = router;