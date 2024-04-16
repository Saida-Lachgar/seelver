import './index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from "react-router-dom";
import Layout from './components/Layout';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}