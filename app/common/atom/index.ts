import { atom } from 'jotai';

export type ViewModeType = 'horizontal' | 'grid';

export const viewModeAtom = atom<ViewModeType>('horizontal');
export const fontSizeAtom = atom<number>(32);
