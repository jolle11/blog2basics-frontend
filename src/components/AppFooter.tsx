import { Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const AppFooter = () => {
    return (
        <Footer
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "72px",
            }}
        >
            <Title level={5} style={{ margin: "0", textAlign: "center" }}>
                Blog2Basics © 2023 Created by jordi0lle
            </Title>
        </Footer>
    );
};

export default AppFooter;
