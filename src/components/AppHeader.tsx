import Avatar from "antd/es/avatar/avatar";
import Button from "antd/es/button/button";
import Space from "antd/es/space";
import Title from "antd/es/typography/Title";
import { useAtom } from "jotai";
import {
    PiHashStraightLight,
    PiMoonFill,
    PiSignOutFill,
    PiSunFill,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { isAuthenticatedAtom } from "../atoms/authAtoms";
import { isDarkModeAtom } from "../atoms/genericAtoms";
import { userAliasAtom } from "../atoms/userAtoms";

const AppHeader = () => {
    const navigate = useNavigate();

    const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

    const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
    const [alias] = useAtom(userAliasAtom);

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
                            onClick={() => navigate("/dashboard")}
                        >
                            {alias}
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
