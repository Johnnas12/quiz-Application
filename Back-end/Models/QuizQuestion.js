// The Below is model that contains all of the properties
class QuizQuestion {
    constructor(question, options, correctAnswer) {
      this.question = question;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  }

  module.exports = QuizQuestion;