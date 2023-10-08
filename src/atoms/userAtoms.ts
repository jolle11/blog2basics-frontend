import { atom } from 'jotai';

export interface User {
	email: string;
	password: string;
	name: string;
	surname: string;
	alias: string;
}

export const userAtom = atom<User>({
	email: '',
	password: '',
	name: '',
	surname: '',
	alias: '',
});

export const userEmailAtom = atom<string | null>('');
export const userPasswordAtom = atom<string | null>('');
export const usernameAtom = atom<string | null>('');
export const userSurnameAtom = atom<string | null>('');
export const userAliasAtom = atom<string | null>('');
