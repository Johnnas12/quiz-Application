const {MongoClient}  = require('mongodb');


const connect = async () => {
    try {
        // const client = await MongoClient.connect('mongodb://localhost:27017');
        const client = await MongoClient.connect('mongodb+srv://yohanesmesfin3:Mm12192127@cluster0.qz3pihx.mongodb.net/');


        await client.connect();
        
        console.log('Connected to database');
        return  client.db('quiz_questions');
        
    } catch (error) {
        console.log(error);
    }
} 
module.exports = {connect};
