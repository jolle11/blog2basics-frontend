import { atom } from "jotai";

export const userEmailAtom = atom<string | null>("");
export const passwordAtom = atom<string | null>("");
export const isAuthenticatedAtom = atom<boolean | null>(false);
export const authTokenAtom = atom<string | null>(null);
