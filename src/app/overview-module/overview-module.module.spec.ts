import { OverviewModuleModule } from './overview-module.module';

describe('OverviewModuleModule', () => {
  let overviewModuleModule: OverviewModuleModule;

  beforeEach(() => {
    overviewModuleModule = new OverviewModuleModule();
  });

  it('should create an instance', () => {
    expect(overviewModuleModule).toBeTruthy();
  });
});
