import { atom } from 'jotai';

export const isDarkModeAtom = atom<boolean>(false);
export const isLoadingAtom = atom<boolean>(false);
export const isAppLoadingAtom = atom<boolean>(true);
export const errorAtom = atom<string | null>(null);
