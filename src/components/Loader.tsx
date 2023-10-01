import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface Props {
    size?: number;
}

export const Loader = ({ size }: Props) => {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: size }} />} />;
};
