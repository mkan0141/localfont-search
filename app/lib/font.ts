import { groupBy } from 'lodash-es';

type FontData = {
  family: string;
  fullName: string;
  postscriptName: string;
  style: string;
};

type Font = {
  family: string;
  isBold: boolean;
  isItalic: boolean;
};

declare global {
  interface Window {
    queryLocalFonts?: () => Promise<FontData[]>;
  }
}

const isSupportedQueryLocalFontsApi = () => {
  return typeof window === 'object' && 'queryLocalFonts' in window;
};

const getLocalFontList = async (): Promise<Font[]> => {
  if (!isSupportedQueryLocalFontsApi()) return [];

  const localFontList = await window.queryLocalFonts!();

  return Object.values(groupBy(localFontList, (font) => font.family)).map(
    (fonts: FontData[]) => {
      return {
        family: fonts[0].family,
        isBold: fonts.some((font) => font.style === 'Bold'),
        isItalic: fonts.some((font) => font.style === 'Italic'),
      };
    }
  );
};

export { isSupportedQueryLocalFontsApi, getLocalFontList };
export type { Font };
