import { Space } from "antd";
import BackButton from "../components/BackButton";
import CommentsComponent from "../components/CommentsComponent";
import PostComponent from "../components/PostComponent";

const BlogPostPage = () => {
    return (
        <Space
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "space-between",
            }}
        >
            <BackButton />
            <PostComponent />
            <CommentsComponent />
        </Space>
    );
};

export default BlogPostPage;
