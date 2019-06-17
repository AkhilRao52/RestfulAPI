let mongoose = require(`mongoose`);

mongoose.connect('mongodb://localhost/products');

let connection = mongoose.connection;

connection.on(`connected`,()=>{
    console.log(`DB connected`);
})

connection.on(`error`,(error)=>{
    console.log(`error connecting to DB ${error}`);
})

connection.on(`disonnected`,()=>{
    console.log(`Disconnected from DB`);
})

let customerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model(`Customer`, customerSchema);