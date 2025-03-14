import { Link } from 'react-router-dom';

const MainPage = () => {
  const isLoggedIn = !!localStorage.getItem("accessToken");

  return (
    <div>
      <h1>파밍로그 임시 관리자 페이지</h1>
      <nav>
        <ul>
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login">로그인(회원가입한 사용자만 로그인 가능)</Link>
              </li>
              <li>
                <Link to="/register">회원가입</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/admin">지원자 조회하기</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainPage;