import { useState } from 'react';
import Search from './search';
import Cheer from './cheer'; 

function Main() {
  /** 검색으로 선택된 유저 이름 */
  const [selectedUser, setSelectedUser] = useState<{ userId: number; name: string } | null>(null);

  /** Search 컴포넌트에서 유저를 클릭하면 setSelectedUser 갱신 */
  const handleSelectUser = (user: { userId: number; name: string }) => {
    setSelectedUser(user);
  };

  return (
    <div>
      {!selectedUser ? (
        /** 아직 선택된 유저가 없으면 "검색 화면" */
        <Search onSelectUser={handleSelectUser} />
      ) : (
        /** 유저가 선택됐다면 "응원 메시지 작성 화면" */
        <Cheer searchedUser={selectedUser} />
      )}
    </div>
  );
}

export default Main;