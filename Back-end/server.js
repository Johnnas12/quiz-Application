const {MongoClient}  = require('mongodb');


const connect = async () => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017');

        await client.connect();
        
        console.log('Connected to database');
        return  client.db('quiz_questions');
        
    } catch (error) {
        console.log(error);
    }
} 
module.exports = {connect};
