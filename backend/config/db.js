const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("MongoDB Connection Successful");
    } catch (error) {
        console.log("MongoDB Connection Failed");
        process.exit(1);
    }
}

module.exports =  connectDB;