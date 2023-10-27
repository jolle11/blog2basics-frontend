import Space from "antd/es/space";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { Blog, Post, userBlogAtom, userPostAtom } from "../atoms/blogAtoms";

interface Props {
    posts: Post[];
    blog: Blog;
}

const PostsList = ({ posts, blog }: Props) => {
    const navigate = useNavigate();
    const [, setUserPost] = useAtom(userPostAtom);
    const [, setBlog] = useAtom(userBlogAtom);

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
                            setUserPost(post);
                            if (blog) {
                                navigate(
                                    `/blogs/${blog.slug}/posts/${post.slug}`
                                );
                            } else {
                                axios
                                    .get(
                                        `http://localhost:3333/api/blogs/${post.blog_id}`,
                                        {
                                            headers: {
                                                "Access-Control-Allow-Origin":
                                                    "*",
                                                "Content-Type":
                                                    "application/json",
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        console.log(response.data);

                                        setBlog(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
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
