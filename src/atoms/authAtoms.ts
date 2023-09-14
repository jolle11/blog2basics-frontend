import { atom } from 'jotai';

export const isAuthenticatedAtom = atom<boolean | null>(false);
export const authTokenAtom = atom<string | null>(null);
