import Layout, { Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const AppFooter = () => {
    return (
        <Footer
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Title level={5} style={{ margin: "0" }}>
                Blog2Basics © 2023 Created by jordi0lle
            </Title>
        </Footer>
    );
};

export default AppFooter;
