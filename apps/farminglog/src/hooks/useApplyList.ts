import { useState, useEffect } from "react";
import { fetchApplyList } from "../services/applyService";
import { useAuthStore } from "../store/authStore";

interface Apply {
  applyId: number;
  name: string;
  track: string;
  updatedAt: string;
}

export const useApplyList = (track: string | null) => {
  const [applyList, setApplyList] = useState<Apply[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const accessToken = useAuthStore((state) => state.accessToken);

useEffect(() => {
  const fetchList = async () => {
    if (!accessToken || !track) return; 

    setLoading(true);
    setError(null);

    try {
      const data = await fetchApplyList(accessToken, track);
      setApplyList(data);
    } catch (err) {
      setError("지원서 목록을 조회하는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  fetchList();
}, [track, accessToken]);


  return { applyList, loading, error };
};
