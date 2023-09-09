import Button from "antd/es/button/button";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import Paragraph from "antd/es/typography/Paragraph";
import { PiLockBold, PiUserBold } from "react-icons/pi";
import { Link } from "react-router-dom";

interface LoginFormValues {
    name: string;
    password: string;
}

const LoginForm = () => {
    const onFinish = (values: LoginFormValues) => {
        console.log(values);
    };

    return (
        <Form name="loginForm" onFinish={onFinish}>
            <FormItem
                name="username"
                rules={[
                    { required: true, message: "Please input your username!" },
                ]}
            >
                <Input
                    prefix={<PiUserBold className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </FormItem>
            <FormItem
                name="email"
                rules={[
                    { required: true, message: "Please input your password!" },
                ]}
            >
                <Input
                    prefix={<PiLockBold className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </FormItem>
            <FormItem>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                >
                    Log in
                </Button>
            </FormItem>
            <FormItem>
                <Paragraph
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    Not registered?
                    <Link to="/register">Register now</Link>
                </Paragraph>
            </FormItem>
        </Form>
    );
};

export default LoginForm;
