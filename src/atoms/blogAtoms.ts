import { atom } from 'jotai';

interface Blog {
	id: number;
	name: string;
	description: string;
}

export interface Post {
	id: number;
	title: string;
	body: string;
}

interface Comment {
	id: number;
	body: string;
}

export const userBlogAtom = atom<Blog>({
	id: 0,
	name: '',
	description: '',
});

export const userPostAtom = atom<Post>({
	id: 0,
	title: '',
	body: '',
});

export const userPostsAtom = atom<Post[]>([]);

export const userCommentAtom = atom<Comment>({
	id: 0,
	body: '',
});

export const userCommentsAtom = atom<Comment[]>([]);
