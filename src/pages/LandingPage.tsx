import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const LandingPage = () => {
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
        </Content>
    );
};

export default LandingPage;
