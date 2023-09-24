import Paragraph from "antd/es/typography/Paragraph";
import { Post } from "../atoms/blogAtoms";
import Title from "antd/es/typography/Title";

interface Props {
    posts: Post[];
}

const PostsList = ({ posts }: Props) => {
    return posts.map((post) => {
        return (
            <>
                <Title level={4}>{post.title}</Title>
                <Paragraph>{post.body}</Paragraph>
            </>
        );
    });
};

export default PostsList;
