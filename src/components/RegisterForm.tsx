import { message } from "antd";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import { useAtom } from "jotai";
import { isLoadingAtom } from "../atoms/genericAtoms";
import {
    userAliasAtom,
    userEmailAtom,
    userPasswordAtom,
    userSurnameAtom,
    usernameAtom,
} from "../atoms/userAtoms";

const RegisterForm = () => {
    const [userEmail, setUserEmail] = useAtom(userEmailAtom);
    const [password, setPassword] = useAtom(userPasswordAtom);
    const [username, setName] = useAtom(usernameAtom);
    const [surname, setSurname] = useAtom(userSurnameAtom);
    const [alias, setAlias] = useAtom(userAliasAtom);

    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = () => {};

    return (
        <>
            {contextHolder}
            <Form name="registerForm" onFinish={onFinish}>
                <FormItem
                    name=""
                    rules={[
                        { required: true, message: "Please input your XXXXX!" },
                    ]}
                >
                    <Input
                        prefix={"Icon here"}
                        placeholder=""
                        onChange={(event) => console.log(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    name=""
                    rules={[
                        { required: true, message: "Please input your XXXXX!" },
                    ]}
                >
                    <Input
                        prefix={"Icon here"}
                        placeholder=""
                        onChange={(event) => console.log(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    name=""
                    rules={[
                        { required: true, message: "Please input your XXXXX!" },
                    ]}
                >
                    <Input
                        prefix={"Icon here"}
                        placeholder=""
                        onChange={(event) => console.log(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    name=""
                    rules={[
                        { required: true, message: "Please input your XXXXX!" },
                    ]}
                >
                    <Input
                        prefix={"Icon here"}
                        placeholder=""
                        onChange={(event) => console.log(event.target.value)}
                    />
                </FormItem>
                <FormItem
                    name=""
                    rules={[
                        { required: true, message: "Please input your XXXXX!" },
                    ]}
                >
                    <Input
                        prefix={"Icon here"}
                        placeholder=""
                        onChange={(event) => console.log(event.target.value)}
                    />
                </FormItem>
            </Form>
        </>
    );
};

export default RegisterForm;
