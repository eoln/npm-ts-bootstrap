import * as index from './index';

describe('index', () => {
  it('should be defined', () => {
    expect(index).toBeDefined();
  })

  it('should export pkg', () => {
    expect(index.pkg).toBeDefined();
  })
});