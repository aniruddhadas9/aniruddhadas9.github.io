import { AniruddhModule } from './aniruddh.module';

describe('AniruddhModule', () => {
  let aniruddhModule: AniruddhModule;

  beforeEach(() => {
    aniruddhModule = new AniruddhModule();
  });

  it('should create an instance', () => {
    expect(aniruddhModule).toBeTruthy();
  });
});
