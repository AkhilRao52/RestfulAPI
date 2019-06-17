let express = require('express');
let app = express();
let personRoute = require(`./routes/person`);
let customerRoute = require(`./routes/customer`);
let bodyParser = require(`body-parser`);

app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log(`Request at ${new Date().toString()} is ${req.originalUrl}, body of request is ${req.body}`);
    next();
})

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

app.use((req,res,next)=>{
    res.status(404).send("Wrong address");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.info(`Server started on port ${PORT}`));