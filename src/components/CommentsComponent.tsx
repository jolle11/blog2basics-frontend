import { Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { authTokenAtom } from "../atoms/authAtoms";
import {
    userBlogAtom,
    userCommentsAtom,
    userPostAtom,
} from "../atoms/blogAtoms";

const CommentsComponent = () => {
    const [blog] = useAtom(userBlogAtom);
    const [authToken] = useAtom(authTokenAtom);
    const [post] = useAtom(userPostAtom);
    const [comments, setComments] = useAtom(userCommentsAtom);

    useEffect(() => {
        if (post) {
            axios
                .get(
                    `http://localhost:3333/api/blogs/${blog.id}/posts/${post.id}/comments`,
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                            "Access-Control-Allow-Origin": "*",
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    console.log(response);

                    setComments(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [post]);

    return (
        <Space>
            {comments.map((comment) => (
                <Space
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "space-between",
                    }}
                >
                    <Title level={5}>{comment.alias}</Title>
                    <Paragraph>{comment.body}</Paragraph>
                </Space>
            ))}
        </Space>
    );
};

export default CommentsComponent;
