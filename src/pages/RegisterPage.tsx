import { Content } from "antd/es/layout/layout";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
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
            <RegisterForm />
        </Content>
    );
};

export default RegisterPage;
