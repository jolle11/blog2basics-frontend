import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { userPostsAtom } from "../atoms/blogAtoms";
import PostsList from "../components/PostsList";

const LandingPage = () => {
    const [posts, setPosts] = useAtom(userPostsAtom);

    useEffect(() => {
        axios
            .get("http://localhost:3333/api/blogs/posts", {
                headers: {
                    // Authorization: `Bearer ${authToken}`,
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
    }, []);

    return (
        <Content
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                height: "100%",
            }}
        >
            <Title>LandingPage</Title>
            <PostsList posts={posts} blog={undefined} />
        </Content>
    );
};

export default LandingPage;
