import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { authTokenAtom } from "../atoms/authAtoms";
import { userBlogAtom, userPostsAtom } from "../atoms/blogAtoms";
import PostsList from "../components/PostsList";
import { Content } from "antd/es/layout/layout";

const DashboardPage = () => {
    const [blog, setBlog] = useAtom(userBlogAtom);
    const [authToken] = useAtom(authTokenAtom);
    const [posts, setPosts] = useAtom(userPostsAtom);

    useEffect(() => {
        if (blog) {
            axios
                .get(`http://localhost:3333/api/blogs/${blog.id}/posts`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    setPosts(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [blog]);

    return (
        <Content
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                height: "100%",
            }}
        >
            {blog.id !== 0 ? (
                <>
                    <Title>{blog.name}</Title>
                    <PostsList posts={posts} />
                </>
            ) : (
                <Title>CreateBlog</Title>
            )}
        </Content>
    );
};

export default DashboardPage;
