import { atom } from "jotai";

export interface Blog {
	id?: number;
	name?: string;
	slug?: string;
	description?: string;
}

export interface Post {
	id?: number;
	blog_id?: number;
	title?: string;
	slug?: string;
	body?: string;
}

export interface Comment {
	id?: number;
	body?: string;
}

export const userBlogAtom = atom<Blog>({
	id: 0,
	name: "",
	slug: "",
	description: "",
});

export const userPostAtom = atom<Post>({
	id: 0,
	title: "",
	slug: "",
	body: "",
});

export const userPostsAtom = atom<Post[]>([]);

export const userCommentAtom = atom<Comment>({
	id: 0,
	body: "",
});

export const userCommentsAtom = atom<Comment[]>([]);
