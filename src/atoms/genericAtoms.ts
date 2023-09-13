import { atom } from 'jotai';

export const isLoadingAtom = atom<boolean | null>(false);
export const errorAtom = atom<string | null>(null);
