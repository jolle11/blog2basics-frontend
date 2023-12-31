import { Space, message } from "antd";
import Button from "antd/es/button/button";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { PiAtBold, PiLockBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { authTokenAtom, isAuthenticatedAtom } from "../atoms/authAtoms";
import { userBlogAtom } from "../atoms/blogAtoms";
import { isLoadingAtom } from "../atoms/genericAtoms";
import { userAtom } from "../atoms/userAtoms";
import { Loader } from "./Loader";

const LoginForm = () => {
    const [user, setUser] = useAtom(userAtom);
    const [, setBlog] = useAtom(userBlogAtom);

    const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
    const [, setAuthToken] = useAtom(authTokenAtom);

    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const onFinish = () => {
        setIsLoading(true);
        axios
            .post(
                "http://localhost:3333/api/login",
                {
                    email: user.email,
                    password: user.password,
                },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                localStorage.setItem("authToken", response.data.token);
                setAuthToken(response.data.token);
                setIsAuthenticated(true);
                setUser({ ...user, alias: response.data.alias });
                setBlog(response.data.blog);
                setIsLoading(false);
                messageApi.success("Successfully logged in!");
                navigate("/dashboard");
            })
            .catch((error) => {
                messageApi.error(error.message);
                setIsLoading(false);
            });
    };

    return (
        <Space direction="vertical" align="center">
            {contextHolder}
            <Title>Login</Title>
            <Form name="loginForm" onFinish={onFinish}>
                <FormItem
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                    ]}
                >
                    <Input
                        prefix={<PiAtBold />}
                        placeholder="Email"
                        type="email"
                        onChange={(event) =>
                            setUser({ ...user, email: event.target.value })
                        }
                    />
                </FormItem>
                <FormItem
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input
                        prefix={<PiLockBold />}
                        type="password"
                        placeholder="Password"
                        onChange={(event) =>
                            setUser({
                                ...user,
                                password: event.target.value,
                            })
                        }
                    />
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}
                    >
                        {isLoading ? <Loader /> : "Log in"}
                    </Button>
                </FormItem>
                <FormItem>
                    <Paragraph
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}
                    >
                        Not registered?
                        <Link to="/register">Register now</Link>
                    </Paragraph>
                </FormItem>
            </Form>
        </Space>
    );
};

export default LoginForm;
