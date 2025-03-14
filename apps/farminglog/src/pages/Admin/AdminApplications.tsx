import { useState } from "react";
import { useApplications } from "../../hooks/useApplications";
import { Application } from "../../types/application";
import { Link } from "react-router-dom"; 

const AdminApplications = () => {
  const [track, setTrack] = useState<string | undefined>(undefined);
  const { data: applications, error, isLoading } = useApplications(track);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {(error as Error).message}</p>;

  const applicationList = applications ?? []; 

  return (
    <div>
      <h1>지원서 목록</h1>
      <label>
        트랙 선택:
        <select value={track || ""} onChange={(e) => setTrack(e.target.value || undefined)}>
          <option value="">전체</option>
          <option value="GAMING_VIDEO">Gaming Video</option>
          <option value="UNION">Union</option>
          <option value="SECURITY_WEB">Security Web</option>
          <option value="AI">AI</option>
          <option value="IOT_ROBOTICS">IoT Robotics</option>
          <option value="BIGDATA">Big Data</option>
        </select>
      </label>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>트랙</th>
            <th>업데이트 날짜</th>
          </tr>
        </thead>
        <tbody>
          {applicationList.map((app: Application) => (
            <tr key={app.applyId}>
              <td>
                <Link to={`/admin/apply/${app.applyId}`}>{app.applyId}</Link>
              </td>
              <td>{app.name}</td>
              <td>{app.track}</td>
              <td>{new Date(app.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApplications;
