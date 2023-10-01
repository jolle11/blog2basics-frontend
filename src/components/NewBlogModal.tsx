import { Button, Form, Input, Modal, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useAtom } from "jotai";
import { Dispatch, SetStateAction, useState } from "react";
import { PiPencilLineBold, PiPlusBold } from "react-icons/pi";
import { authTokenAtom } from "../atoms/authAtoms";
import { isLoadingAtom } from "../atoms/genericAtoms";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setBlog: Dispatch<SetStateAction<object>>;
}

const NewBlogModal = ({ open, setOpen, setBlog }: Props) => {
    const [authToken] = useAtom(authTokenAtom);
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();

    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

    const isDisabled = () => {
        return !!name && !!description;
    };

    const [messageApi, contextHolder] = message.useMessage();

    const showModal = () => {
        setOpen(true);
    };

    const onOk = () => {
        setIsLoading(true);
        axios
            .post(
                "http://localhost:3333/api/blogs/new",
                {
                    name: name,
                    description: description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                setBlog(response.data.blog);
                messageApi.success(response.data.message);
                setIsLoading(false);
                setOpen(false);
            })
            .catch((error) => {
                messageApi.error(error.message);
                setIsLoading(false);
            });
    };

    const handleCancel = () => {
        setIsLoading(false);
        setOpen(false);
    };

    return (
        <>
            {contextHolder}
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
                okButtonProps={{ disabled: !isDisabled() }}
                okText={"Create"}
                onCancel={handleCancel}
                confirmLoading={isLoading}
                destroyOnClose
            >
                <Form name="loginForm">
                    <FormItem
                        name="blog"
                        rules={[
                            {
                                required: true,
                                message: "Please input your blog name",
                            },
                        ]}
                    >
                        <Input
                            prefix={<PiPencilLineBold />}
                            placeholder="Blog name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </FormItem>
                    <FormItem
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your blog description!",
                            },
                        ]}
                    >
                        <TextArea
                            placeholder="Enter a short blog description"
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                    </FormItem>
                </Form>
            </Modal>
        </>
    );
};

export default NewBlogModal;
