import app, { getFilter } from './index.mjs';

describe('getFilter()', () => {
  it('returns null if filter not found', () => {
    expect(getFilter('ddd')).toBeNull();
  });
  it('returns supported filter name', () => {
    expect(getFilter('facebook')).toEqual('facebook');
  });
});
