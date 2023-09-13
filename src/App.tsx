import { ConfigProvider, Divider, message, theme } from "antd";
import Layout, { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                token: {
                    colorPrimary: "#246DF5",
                },
            }}
        >
            <Router>
                <Layout className="app">
                    <AppHeader theme={isDarkMode} setTheme={setIsDarkMode} />
                    <Divider style={{ margin: 0 }} />
                    <Content>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                        </Routes>
                    </Content>
                    <Divider style={{ margin: 0 }} />
                    <AppFooter />
                </Layout>
            </Router>
        </ConfigProvider>
    );
}

export default App;
