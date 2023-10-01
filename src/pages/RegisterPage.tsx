import { Content } from "antd/es/layout/layout";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <Content
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            className="content"
        >
            <RegisterForm />
        </Content>
    );
};

export default RegisterPage;
