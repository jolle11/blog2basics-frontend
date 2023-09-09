import { Content } from "antd/es/layout/layout";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
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
            <LoginForm />
        </Content>
    );
};

export default LoginPage;
