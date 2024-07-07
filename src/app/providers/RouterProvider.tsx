import { createBrowserRouter, redirect } from 'react-router-dom';
import {
    CarPage,
    CarStreamPage,
    LoginPage,
    MainPage,
    MyPage,
    NumbersPage,
    RegisterPage, ReportsPage, StatisticsPage,
    TrainStreamPage,
} from '@pages/ui';
import { AuthProvider } from '@app/providers/AuthProvider.tsx';
import { SidebarProvider } from '@widgets/lib/utils/SidebarProvider';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider />,
        children: [
            {
                index: true,
                element: <SidebarProvider><MainPage /></SidebarProvider>,
            },
            {
                path: 'me',
                element: <SidebarProvider><MyPage /></SidebarProvider>,
            },
            {
                path: 'car',
                element: <SidebarProvider><CarStreamPage /></SidebarProvider>,
            },
            {
                path: 'train',
                element: <SidebarProvider><TrainStreamPage /></SidebarProvider>,
            },
            {
                path: 'numbers',
                element: <SidebarProvider><NumbersPage /></SidebarProvider>,
            },
            {
                path: 'car/:id',
                element: <SidebarProvider><CarPage /></SidebarProvider>,
            },
            {
                path: 'statistics',
                element: <SidebarProvider><StatisticsPage /></SidebarProvider>,
            },
            {
                path: 'reports',
                element: <SidebarProvider><ReportsPage /></SidebarProvider>,
            },
        ],
    },
    {
        path: '/auth',
        children: [
            {
                index: true,
                loader: async () => redirect('/auth/login'),
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);
