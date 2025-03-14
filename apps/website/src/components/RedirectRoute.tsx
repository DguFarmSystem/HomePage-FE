import { Navigate } from 'react-router-dom'; 

interface PrivateRouteProps {
  children: React.ReactNode; // 보호할 컴포넌트 페이지
  boolean: boolean; // 리다이렉트 여부
}

export default function PrivateRoute({ children, boolean }: PrivateRouteProps) {
  if (!boolean) {
    return <Navigate to="/" />;
  }
  return children;
}
