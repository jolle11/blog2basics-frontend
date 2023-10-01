import Space from "antd/es/space";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { authTokenAtom } from "../atoms/authAtoms";
import { userBlogAtom, userPostsAtom } from "../atoms/blogAtoms";
import NewBlogModal from "../components/NewBlogModal";
import PostsList from "../components/PostsList";

const DashboardPage = () => {
    const [blog, setBlog] = useAtom(userBlogAtom);
    const [authToken] = useAtom(authTokenAtom);
    const [posts, setPosts] = useAtom(userPostsAtom);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
        <Space
            className="content"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                padding: "30px",
                maxWidth: "80vw",
            }}
        >
            {blog?.id !== 0 && !!blog?.id ? (
                <>
                    <Title style={{ margin: 0, textAlign: "center" }}>
                        {blog?.name}
                    </Title>
                    <Paragraph italic={true} style={{ textAlign: "center" }}>
                        {blog?.description}
                    </Paragraph>
                    <PostsList posts={posts} blog={blog} />
                </>
            ) : (
                <>
                    <Title>Start by creating your blog</Title>
                    <NewBlogModal
                        open={isModalOpen}
                        setOpen={setIsModalOpen}
                        setBlog={setBlog}
                    />
                </>
            )}
        </Space>
    );
};

export default DashboardPage;
