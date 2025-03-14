import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../../store/authStore";

interface Apply {
  applyId: number;
  name: string;
  track: string;
  updatedAt: string;
}

const ApplyListPage = () => {
  const [applyList, setApplyList] = useState<Apply[]>([]);
  const [track, setTrack] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchApplyList = async () => {
      if (!accessToken) {
        setError("액세스 토큰이 없습니다.");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<Apply[]>("/api/admin/apply", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            track,
          },
        });

        // 응답 데이터가 배열인지 확인하고 설정
        if (Array.isArray(response.data)) {
          setApplyList(response.data);
        } else {
          setApplyList([]);
        }
      } catch (err) {
        setError("지원서 목록을 조회하는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplyList();
  }, [track, accessToken]);

  return (
    <div>
      <h1>지원서 목록</h1>
      <div>
        <label htmlFor="track">트랙 선택:</label>
        <select
          id="track"
          value={track || ""}
          onChange={(e) => setTrack(e.target.value || null)}
        >
          <option value="">모든 트랙</option>
          <option value="UNION">UNION</option>
          <option value="GAMING_VIDEO">GAMING_VIDEO</option>
          <option value="SECURITY_WEB">SECURITY_WEB</option>
          <option value="AI">AI</option>
          <option value="IOT_ROBOTICS">IOT_ROBOTICS</option>
          <option value="BIGDATA">BIGDATA</option>
        </select>
      </div>
      {loading && <p>로딩 중...</p>}
      {error && <p>{error}</p>}
      <ul>
        {applyList.map((apply) => (
          <li key={apply.applyId}>
            <p>이름: {apply.name}</p>
            <p>트랙: {apply.track}</p>
            <p>업데이트 날짜: {new Date(apply.updatedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplyListPage;