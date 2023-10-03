import { Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useAtom } from "jotai";
import { userPostAtom } from "../atoms/blogAtoms";

const PostComponent = () => {
    const [post] = useAtom(userPostAtom);

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
            <Paragraph>{post?.body}</Paragraph>
        </Space>
    );
};

export default PostComponent;
