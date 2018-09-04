import { QuizModuleModule } from './quiz-module.module';

describe('QuizModuleModule', () => {
  let quizModuleModule: QuizModuleModule;

  beforeEach(() => {
    quizModuleModule = new QuizModuleModule();
  });

  it('should create an instance', () => {
    expect(quizModuleModule).toBeTruthy();
  });
});
