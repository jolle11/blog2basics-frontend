import { Content } from "antd/es/layout/layout";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <Content
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            className="content"
        >
            <LoginForm />
        </Content>
    );
};

export default LoginPage;
