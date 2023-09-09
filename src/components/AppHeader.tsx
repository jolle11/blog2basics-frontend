import Avatar from "antd/es/avatar/avatar";
import Button from "antd/es/button/button";
import Space from "antd/es/space";
import { useNavigate } from "react-router-dom";
import { PiHashStraightLight, PiSunFill, PiMoonFill } from "react-icons/pi";
import Title from "antd/es/typography/Title";
import { Dispatch, SetStateAction } from "react";

interface IProps {
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
}

const AppHeader = ({ theme, setTheme }: IProps) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px",
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
                    onClick={() => setTheme(!theme)}
                >
                    {theme ? <PiSunFill /> : <PiMoonFill />}
                </Button>
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
            </Space>
        </div>
    );
};

export default AppHeader;
