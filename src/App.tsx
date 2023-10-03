import { ConfigProvider, Divider, theme } from "antd";
import Layout, { Content } from "antd/es/layout/layout";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authTokenAtom, isAuthenticatedAtom } from "./atoms/authAtoms";
import { userBlogAtom } from "./atoms/blogAtoms";
import { isAppLoadingAtom, isDarkModeAtom } from "./atoms/genericAtoms";
import { userAliasAtom } from "./atoms/userAtoms";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import BackButton from "./components/BackButton";
import { Loader } from "./components/Loader";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

    const [, setAlias] = useAtom(userAliasAtom);
    const [, setBlog] = useAtom(userBlogAtom);

    const [isLoading, setIsLoading] = useAtom(isAppLoadingAtom);

    const [authToken, setAuthToken] = useAtom(authTokenAtom);
    const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            const persistToken = localStorage.getItem("authToken");
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
                    setAuthToken(response.data.user.remember_me_token);
                    setIsAuthenticated(true);
                    setAlias(response.data.user.alias);
                    setBlog(response.data.blog);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
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
                <Layout
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    className="app"
                >
                    <Loader size={50} />
                </Layout>
            ) : (
                <Router>
                    <Layout className="app">
                        <AppHeader />
                        <Divider style={{ margin: 0 }} />
                        <BackButton />
                        <Content className="content">
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route
                                    path="/dashboard"
                                    element={<DashboardPage />}
                                />
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                    path="/register"
                                    element={<RegisterPage />}
                                />
                                <Route
                                    path="/blogs/:blogId"
                                    element={<BlogPage />}
                                />
                                <Route
                                    path="/blogs/:blogId/posts/:postId"
                                    element={<BlogPostPage />}
                                />
                            </Routes>
                        </Content>
                        <Divider style={{ margin: 0 }} />
                        <AppFooter />
                    </Layout>
                </Router>
            )}
        </ConfigProvider>
    );
}

export default App;
