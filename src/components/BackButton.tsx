import { Button } from "antd";
import { PiArrowLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <Button
            style={{
                position: "absolute",
                top: "74px",
                left: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            type="default"
            shape="circle"
            onClick={goBack}
        >
            <PiArrowLeftBold />
        </Button>
    );
};

export default BackButton;
