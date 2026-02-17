import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from '@/components/Layout';

const HomePage = lazy(() => import('@/pages/Home'));

const Loading = () => (
  <div className="flex h-screen items-center justify-center bg-background">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Layout>
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        </Layout>
      ),
    },
    {
      path: '*',
      element: (
        <Layout>
          <div className="flex h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
            <p className="mb-8 text-2xl text-muted-foreground">Page Not Found</p>
            <a href="/" className="bg-white text-black px-6 py-3 rounded hover:bg-primary transition-colors">
                Return Home
            </a>
          </div>
        </Layout>
      ),
    },
  ]);

  return routes;
}
