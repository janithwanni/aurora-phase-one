export class Question {
  questionID: string;
  questionText: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
  answerFour: string;
  correctAnswerID: string;
  correctAnswerText: string;
  answerGiven: boolean;
  timeExceeded: boolean;
  competitionOver: boolean;
}
