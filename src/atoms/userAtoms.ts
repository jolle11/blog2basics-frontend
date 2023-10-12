import { atom } from 'jotai';

export interface User {
	id: string;
	email: string;
	password: string;
	name: string;
	surname: string;
	alias: string;
	remember_me_token: string;
}

export const userAtom = atom<User>({
	id: '',
	email: '',
	password: '',
	name: '',
	surname: '',
	alias: '',
	remember_me_token: '',
});
