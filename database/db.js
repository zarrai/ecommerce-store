const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://saif711:zarrai711@ecommerce-app.xxkpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected successfully')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;