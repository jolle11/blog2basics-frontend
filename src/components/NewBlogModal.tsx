import { Button, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { PiPlusBold } from "react-icons/pi";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onOk: (e: React.MouseEvent<HTMLElement>) => void;
}

const NewBlogModal = ({ open, setOpen, onOk }: Props) => {
    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                onClick={showModal}
                type="default"
                shape="circle"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <PiPlusBold />
            </Button>
            <Modal
                title="Basic Modal"
                open={open}
                onOk={onOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default NewBlogModal;
