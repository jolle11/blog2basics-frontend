import { Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authTokenAtom } from "../atoms/authAtoms";
import { userBlogAtom, userPostAtom } from "../atoms/blogAtoms";

const PostComponent = () => {
    const [post] = useAtom(userPostAtom);
    const [blog, setBlog] = useAtom(userBlogAtom);
    const [authToken] = useAtom(authTokenAtom);

    const [postBlog, setPostBlog] = useState<string | null>("");

    const navigate = useNavigate();

    useEffect(() => {
        if (post.blog_id !== blog.id) {
            axios
                .get(`http://localhost:3333/api/blogs/${post.blog_id}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    console.log(response.data);

                    setBlog(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [blog]);

    return (
        <Space
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "space-between",
            }}
        >
            <Title>{post?.title}</Title>
            <Title
                level={5}
                onClick={() => {
                    navigate(`/blogs/${blog.slug}`);
                }}
            >
                {blog?.name}
            </Title>
            <Paragraph>{post?.body}</Paragraph>
        </Space>
    );
};

export default PostComponent;
