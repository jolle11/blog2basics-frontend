import "../styles/Loader.css";

interface ILoaderProps {
    width?: number;
    height?: number;
    thickness?: number;
    borderColor?: string;
}

const Loader = ({ width = 18, height = 18, thickness = 2 }: ILoaderProps) => {
    return (
        <div
            style={{
                borderWidth: `${thickness}px`,
                width: `${width}px`,
                height: `${height}px`,
            }}
            className="loader"
        ></div>
    );
};

export default Loader;
