import { vi, describe, it, expect, afterEach } from 'vitest';

import { isSupportedQueryLocalFontsApi, getLocalFontList } from './font';

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

describe('getLocalFontList', () => {
  afterEach(async () => {
    await delete window['queryLocalFonts'];
  });

  it('not supported queryLocalFonts API', async () => {
    const result = await getLocalFontList();
    expect(result).toEqual([]);
  });

  it('supported queryLocalFonts API', async () => {
    window.queryLocalFonts = vi.fn(async () => {
      return Promise.resolve([
        {
          family: 'Noto Sans JP',
          fullName: 'Noto Sans JP Bold',
          postscriptName: 'NotoSansJP-Bold',
          style: 'Bold',
        },
        {
          family: 'Noto Sans JP',
          fullName: 'Noto Sans JP Italic',
          postscriptName: 'NotoSansJP-Italic',
          style: 'Italic',
        },
        {
          family: 'Jost',
          fullName: 'Jost Medium Italic',
          postscriptName: 'Jost-MediumItalic',
          style: 'Medium Italic',
        },
      ]);
    });

    expect(await getLocalFontList()).toEqual([
      {
        family: 'Noto Sans JP',
        isBold: true,
        isItalic: true,
      },
      {
        family: 'Jost',
        isBold: false,
        isItalic: false,
      },
    ]);
  });
});
