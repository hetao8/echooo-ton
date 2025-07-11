import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from "react-router-dom";
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from "antd";

const Home = React.lazy(() => import("./pages/home"));

export const baseRouterName = "ton-connect";
export const routerMap: RouteObject[] = [
    {
        index: true, // 根路径直接渲染 Home 组件，而不是重定向
        element: <React.Suspense fallback={<>...</>}><Home /></React.Suspense>,
        errorElement: <div>404</div>,
    },
    {
        path: baseRouterName,
        element: <Outlet />,
        children: [
            {
                path: '',
                element: <React.Suspense fallback={<>...</>}><Outlet /></React.Suspense>,
                errorElement: <div>404</div>,
                children: [
                    {
                        index: true,
                        element: <React.Suspense fallback={<>...</>}><Home /></React.Suspense>,
                    },
                    {
                        path: "home",
                        element: <React.Suspense fallback={<>...</>}><Home /></React.Suspense>,
                    }
                ]
            },
        ]
    }
];

function App() {
    const router = createBrowserRouter(routerMap);
    return (
        <ConfigProvider locale={zhCN}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}

export default App;
