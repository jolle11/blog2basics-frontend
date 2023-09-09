import Layout, { Content } from "antd/es/layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import { ConfigProvider, Divider, theme } from "antd";
import { useState } from "react";

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                token: {
                    colorPrimary: "#1463f3",
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
