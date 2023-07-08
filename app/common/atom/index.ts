import { atom } from 'jotai';

export type ViewModeType = 'horizontal' | 'grid';

export const viewModeAtom = atom<ViewModeType>('horizontal');
export const fontSizeAtom = atom<number>(32);

export const localFontListAtom = atom<any[]>([]);
export const filterTextAtom = atom<string>('');
export const sampleTextAtom = atom<string>('');
export const isBoldAtom = atom<boolean>(false);
export const isItalicAtom = atom<boolean>(false);
