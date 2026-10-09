import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage } from '@/features/vitrine/views/HomePage'
import { ClientLayout } from '@/components/layouts/ClientLayout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout/>,
        children: [
            { path: '/', element: <HomePage /> } 
        ],
    }
]);

export function AppRouter() {
    return <RouterProvider router={router} />
}