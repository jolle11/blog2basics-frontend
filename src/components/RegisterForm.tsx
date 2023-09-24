import { Button, Space, message } from "antd";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import {
    PiAtBold,
    PiLockBold,
    PiStarFourBold,
    PiUserBold,
    PiUserPlusBold,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { authTokenAtom, isAuthenticatedAtom } from "../atoms/authAtoms";
import { isLoadingAtom } from "../atoms/genericAtoms";
import {
    userAliasAtom,
    userEmailAtom,
    userPasswordAtom,
    userSurnameAtom,
    usernameAtom,
} from "../atoms/userAtoms";
import Loader from "./Loader";

const RegisterForm = () => {
    const [userEmail, setUserEmail] = useAtom(userEmailAtom);
    const [password, setPassword] = useAtom(userPasswordAtom);
    const [username, setUsername] = useAtom(usernameAtom);
    const [surname, setSurname] = useAtom(userSurnameAtom);
    const [alias, setAlias] = useAtom(userAliasAtom);

    const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
    const [, setAuthToken] = useAtom(authTokenAtom);

    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const onFinish = () => {
        setIsLoading(true);
        axios
            .post(
                "http://localhost:3333/api/register",
                {
                    email: userEmail,
                    password: password,
                    name: username,
                    surname: surname,
                    alias: alias,
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
                setIsLoading(false);
                messageApi.success("Successfully registered!");
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
            <Title>Register</Title>
            <Form name="registerForm" onFinish={onFinish}>
                <FormItem
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                    ]}
                >
                    <Input
                        prefix={<PiAtBold />}
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
                        prefix={<PiLockBold />}
                        type="password"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    name="name"
                    rules={[
                        { required: true, message: "Please input your name!" },
                    ]}
                >
                    <Input
                        prefix={<PiUserBold />}
                        placeholder="Name"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    name="surname"
                    rules={[
                        {
                            required: true,
                            message: "Please input your surname!",
                        },
                    ]}
                >
                    <Input
                        prefix={<PiUserPlusBold />}
                        placeholder="Surname"
                        onChange={(event) => setSurname(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    name="alias"
                    rules={[
                        { required: true, message: "Please input your alias!" },
                    ]}
                >
                    <Input
                        prefix={<PiStarFourBold />}
                        placeholder="Alias"
                        onChange={(event) => setAlias(event.target.value)}
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
                        {isLoading ? <Loader /> : "Register"}
                    </Button>
                </FormItem>
            </Form>
        </Space>
    );
};

export default RegisterForm;
