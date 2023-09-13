import { message } from "antd";
import Button from "antd/es/button/button";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import Paragraph from "antd/es/typography/Paragraph";
import axios from "axios";
import { useAtom } from "jotai";
import { PiLockBold, PiUserBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { errorAtom, isLoadingAtom } from "../atoms/genericAtoms";
import {
    authTokenAtom,
    isAuthenticatedAtom,
    passwordAtom,
    userEmailAtom,
} from "../atoms/loginAtoms";
import { useNotification } from "../services/notification";
import Loader from "./Loader";

const LoginForm = () => {
    const [userEmail, setUserEmail] = useAtom(userEmailAtom);
    const [password, setPassword] = useAtom(passwordAtom);
    const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
    const [authToken, setAuthToken] = useAtom(authTokenAtom);

    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
    // const [error, setError] = useAtom(errorAtom);

    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = () => {
        setIsLoading(true);
        axios
            .post(
                "http://localhost:3333/api/login",
                {
                    email: userEmail,
                    password: password,
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
                useNotification(
                    messageApi,
                    "success",
                    "Successfully logged in!"
                );
                setIsLoading(false);
            })
            .catch((error) => {
                useNotification(messageApi, "error", error.message);
                setIsLoading(false);
            });
    };

    return (
        <>
            <Form name="loginForm" onFinish={onFinish}>
                <FormItem
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                    ]}
                >
                    <Input
                        prefix={<PiUserBold className="site-form-item-icon" />}
                        placeholder="Email"
                        onChange={(event) => setUserEmail(event.target.value)}
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
                        prefix={<PiLockBold className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
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
            {contextHolder}
        </>
    );
};

export default LoginForm;
