import Header from '@/components';
import { Footer } from '@/components';
import { Outlet, useLocation } from 'react-router';

export default function Layout() {
  const location = useLocation(); 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* recruit 페이지가 아닐 때만 푸터를 표시 */}
      {location.pathname !== '/recruit' && <Footer />}
    </>
  );
}
