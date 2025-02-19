import { RouterProvider, createBrowserRouter } from 'react-router';
import Layout from '@/pages/Layout';
import Main from '@/pages/Main';
import Apply from '@/pages/Apply';
import Blog from '@/pages/Blog';
import NotFound from '@/pages/NotFound';
import FAQ from '@/pages/FAQ';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Main /> },
        { path: '/apply', element: <Apply /> },
        { path: '/blog', element: <Blog /> },
        { path: '/FAQ', element: <FAQ /> },
      ],
    },
    {
      path: '*',
      element: (
        <NotFound />
      ),
    },
  ])
  return <RouterProvider router={router} />
}