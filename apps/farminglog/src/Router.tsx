import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home'; 
import Auth from './pages/Auth';
import Support from './pages/cheer';
import View from './pages/farminglog/view';
import Create from './pages/farminglog/create';

const queryClient = new QueryClient();

const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/support" element={<Support />} />
          <Route path="/farminglog/view" element={<View />} />
          <Route path="/farminglog/create" element={<Create />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default AppRouter;