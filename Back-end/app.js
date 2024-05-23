const express = require('express');
const {connect} = require('./server'); // Import the database object
const QuizQuestion = require('./Models/QuizQuestion');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());


// Use the db object to fetch quiz questions

app.get('/api/quiz-questions', async (req, res) => {
  try {
    const db = await connect();
    const quizQuestions = await db.collection('quiz_questions').find({}).toArray();
    res.json(quizQuestions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch quiz questions' });
  }
});

app.post('/api/quiz-questions', async (req, res) => {
  
  try {

    const db = await connect();
    const quizQuestions =  db.collection('quiz_questions');


    //const quizQuestions = await db.collection('quiz_questions'); 
    const { question, options, correctAnswer } = req.body;
    console.log(req.body);
    const newQuizQuestion = { question, options, correctAnswer };
     myResult = await quizQuestions.insertOne(newQuizQuestion); // Use the db object to insert a new quiz question
    console.log(myResult);
    res.status(201).json(newQuizQuestion);

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to create a new quiz question' });

  }


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});