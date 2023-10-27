import Avatar from "antd/es/avatar/avatar";
import Button from "antd/es/button/button";
import Space from "antd/es/space";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import {
    PiHashStraightLight,
    PiMoonFill,
    PiSignOutFill,
    PiSunFill,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { authTokenAtom, isAuthenticatedAtom } from "../atoms/authAtoms";
import { isDarkModeAtom } from "../atoms/genericAtoms";
import { userAtom } from "../atoms/userAtoms";

const AppHeader = () => {
    const navigate = useNavigate();

    const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

    const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
    const [authToken, setAuthToken] = useAtom(authTokenAtom);
    const [user, setUser] = useAtom(userAtom);

    const getUserBlog = () => {
        axios
            .post(
                "http://localhost:3333/api/user",
                {
                    token: authToken,
                },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                    data: { token: authToken },
                }
            )
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px",
                height: "68px",
            }}
        >
            <Space
                align="center"
                size={"middle"}
                onClick={() => navigate("/")}
                style={{
                    cursor: "pointer",
                }}
            >
                <Avatar
                    icon={<PiHashStraightLight />}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
                <Title style={{ margin: "0" }} className="blog-title" level={2}>
                    Blog2Basics
                </Title>
            </Space>
            <Space>
                <Button
                    type="default"
                    shape="circle"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? <PiSunFill /> : <PiMoonFill />}
                </Button>
                {isAuthenticated ? (
                    <>
                        <Button
                            type="default"
                            shape="round"
                            onClick={() => {
                                console.log(user);
                                setBlog();
                                navigate("/dashboard");
                            }}
                        >
                            {user.alias}
                        </Button>

                        <Button
                            danger
                            type="default"
                            shape="round"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={() => {
                                localStorage.removeItem("authToken");
                                setIsAuthenticated(false);
                                navigate("/");
                            }}
                        >
                            <PiSignOutFill />
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            type="default"
                            shape="round"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                        <Button
                            type="default"
                            shape="round"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </Button>
                    </>
                )}
            </Space>
        </div>
    );
};

export default AppHeader;
