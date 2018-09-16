export class Question {
  questionID: string;
  questionText: string;
  questionImage:string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
  answerFour: string;
  correctAnswerID: string;
  correctAnswerText: string;
  answerGiven: boolean;
  timeExceeded: boolean;
  competitionOver: boolean;
  currentRingLevel: number;
  currentNodeNumber: number;
}
