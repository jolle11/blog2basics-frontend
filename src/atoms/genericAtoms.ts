import { atom } from 'jotai';

export const isDarkModeAtom = atom<boolean | null>(false);
export const isLoadingAtom = atom<boolean | null>(true);
export const errorAtom = atom<string | null>(null);
