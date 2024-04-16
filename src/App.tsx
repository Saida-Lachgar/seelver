import './index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from "react-router-dom";
import SideBar from './components/Icon copy';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SideBar />
      <Outlet />
    </QueryClientProvider>
  );
}