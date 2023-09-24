import { ConfigProvider, Divider, theme } from "antd";
import Layout, { Content } from "antd/es/layout/layout";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authTokenAtom, isAuthenticatedAtom } from "./atoms/authAtoms";
import { userBlogAtom } from "./atoms/blogAtoms";
import { isLoadingAtom } from "./atoms/genericAtoms";
import { userAliasAtom } from "./atoms/userAtoms";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Loader from "./components/Loader";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const [, setAlias] = useAtom(userAliasAtom);
    const [, setBlog] = useAtom(userBlogAtom);

    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

    const [authToken, setAuthToken] = useAtom(authTokenAtom);
    const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            const persistToken = localStorage.getItem("authToken");
            console.log(authToken);
            axios
                .post(
                    "http://localhost:3333/api/user",
                    {
                        token: persistToken,
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
                    console.log(response);
                    setAuthToken(response.data.user.remember_me_token);
                    setIsAuthenticated(true);
                    setAlias(response.data.user.alias);
                    setBlog(response.data.blog);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                });
        }
    }, []);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                token: {
                    colorPrimary: "#246DF5",
                },
            }}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <Router>
                    <Layout className="app">
                        <>
                            <AppHeader
                                theme={isDarkMode}
                                setTheme={setIsDarkMode}
                            />
                            <Divider style={{ margin: 0 }} />
                            <Content>
                                <Routes>
                                    <Route path="/" element={<LandingPage />} />
                                    <Route
                                        path="/dashboard"
                                        element={<DashboardPage />}
                                    />
                                    <Route
                                        path="/login"
                                        element={<LoginPage />}
                                    />
                                    <Route
                                        path="/register"
                                        element={<RegisterPage />}
                                    />
                                </Routes>
                            </Content>
                            <Divider style={{ margin: 0 }} />
                            <AppFooter />
                        </>
                    </Layout>
                </Router>
            )}
        </ConfigProvider>
    );
}

export default App;
