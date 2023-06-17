import { vi, describe, it, expect, afterEach } from 'vitest';

import { isSupportedQueryLocalFontsApi } from './font';

describe('isSupportedQueryLocalFontsApi', () => {
  afterEach(async () => {
    await delete window['queryLocalFonts'];
  });

  it('supported queryLocalFonts API', () => {
    window.queryLocalFonts = vi.fn();
    expect(isSupportedQueryLocalFontsApi()).toBe(true);
  });

  it('not supported queryLocalFonts API', () => {
    expect(isSupportedQueryLocalFontsApi()).toBe(false);
  });
});
