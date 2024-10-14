const mongoose = require('mongoose');

const mongoURI = "mongodb://nero:nero@neog-shard-00-00.ghizv.mongodb.net:27017,neog-shard-00-01.ghizv.mongodb.net:27017,neog-shard-00-02.ghizv.mongodb.net:27017/?ssl=true&replicaSet=atlas-xvxmq6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=neoG";

const initializeDatabase = async () => {
    try{
        const connection = mongoose.connect(mongoURI);
        if (connection) {
            console.log('Connected Successfully');
            
        }
    }catch(error){
        console.log('Connection Failed', error);
    }

}

module.exports = {initializeDatabase};    
