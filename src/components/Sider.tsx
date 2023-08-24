import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";

const Sidebar = () => {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="light" mode="inline" />
            </Sider>
        </Layout>
    );
};

export default Sidebar;
