import { PreliminaryModuleModule } from './preliminary-module.module';

describe('PreliminaryModuleModule', () => {
  let preliminaryModuleModule: PreliminaryModuleModule;

  beforeEach(() => {
    preliminaryModuleModule = new PreliminaryModuleModule();
  });

  it('should create an instance', () => {
    expect(preliminaryModuleModule).toBeTruthy();
  });
});
