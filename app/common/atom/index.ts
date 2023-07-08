import { atom } from 'jotai';

export type ViewModeType = 'grid' | 'horizontal';

export const viewModeAtom = atom<ViewModeType>('grid');
export const fontSizeAtom = atom<number>(32);

export const localFontListAtom = atom<any[]>([]);
export const filterTextAtom = atom<string>('');
export const sampleTextAtom = atom<string>('');
export const isBoldAtom = atom<boolean>(false);
export const isItalicAtom = atom<boolean>(false);
