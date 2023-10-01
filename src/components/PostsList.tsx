import Space from "antd/es/space";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { Blog, Post } from "../atoms/blogAtoms";

interface Props {
    posts: Post[];
    blog: Blog;
}

const PostsList = ({ posts, blog }: Props) => {
    const navigate = useNavigate();

    return (
        <Space
            style={{
                maxWidth: "75vw",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
            }}
        >
            {posts.map((post) => {
                return (
                    <Space
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "auto",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            navigate(`/blogs/${blog.slug}/posts/${post.slug}`);
                        }}
                    >
                        <Title level={4}>{post.title}</Title>
                        <Paragraph>{post.body}</Paragraph>
                    </Space>
                );
            })}
        </Space>
    );
};

export default PostsList;
