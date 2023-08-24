import { Content } from "antd/es/layout/layout";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Sidebar from "./components/Sider.tsx";
import "./index.css";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Sidebar />
        <Content style={{ marginLeft: 200 }}>
            <RouterProvider router={router} />
        </Content>
    </React.StrictMode>
);
