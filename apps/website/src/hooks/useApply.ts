import { useState, useEffect } from "react";
import {
  getApplyQuestions,
  postApply,
  postApplySave,
  postApplyLoad,
  postApplySubmit,
} from "@/services/apply";
import {
  ApplyGETResponse,
  ApplyPOSTRequest,
  ApplyPOSTResponse,
  ApplyLoadPOSTRequest,
  ApplyLoadPOSTResponse,
  ApplySavePOSTRequest,
  ApplySavePOSTResponse,
  ApplySubmitPOSTRequest,
  ApplySubmitPOSTResponse,
} from "@/models/apply";
import { handleApiError } from "@/utils/handleApiError";

/** 질문 불러오기 */
export const useApplyQuestions = () => {
  const [data, setData] = useState<ApplyGETResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getApplyQuestions()
      .then(setData)
      .catch((err) => setError(handleApiError(err)))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

/** 새 지원서 생성: studentNumber와 password를 받아 applyId를 반환 */
export const useCreateApply = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createApply = async ({
    studentNumber,
    password,
  }: ApplyPOSTRequest): Promise<number> => {
    setLoading(true);
    try {
      const response: ApplyPOSTResponse = await postApply({ studentNumber, password });
      if (response.data && response.data.applyId !== undefined) {
        return response.data.applyId;
      }
      throw new Error("응답에 applyId가 없습니다.");
    } catch (err) {
      const errorObj = handleApiError(err);
      setError(errorObj);
      throw errorObj;
    } finally {
      setLoading(false);
    }
  };

  return { createApply, loading, error };
};

/** 지원서 임시저장: applyId와 나머지 지원서 데이터를 payload로 받음 */
export const useSaveApply = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const saveApply = async (
    payload: ApplySavePOSTRequest
  ): Promise<ApplySavePOSTResponse> => {
    setLoading(true);
    try {
      return await postApplySave(payload);
    } catch (err) {
      const errorObj = handleApiError(err);
      setError(errorObj);
      throw errorObj;
    } finally {
      setLoading(false);
    }
  };

  return { saveApply, loading, error };
};

/** 지원서 로드: 학번과 비밀번호를 받아 지원서 데이터를 반환 */
export const useLoadApply = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadApply = async (
    data: ApplyLoadPOSTRequest
  ): Promise<ApplyLoadPOSTResponse> => {
    setLoading(true);
    try {
      return await postApplyLoad(data);
    } catch (err) {
      const errorObj = handleApiError(err);
      setError(errorObj);
      throw errorObj;
    } finally {
      setLoading(false);
    }
  };

  return { loadApply, loading, error };
};

/** 지원서 제출: applyId와 지원서 데이터를 payload로 받아 제출 */
export const useSubmitApply = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitApply = async (
    payload: ApplySubmitPOSTRequest
  ): Promise<ApplySubmitPOSTResponse> => {
    setLoading(true);
    try {
      return await postApplySubmit(payload);
    } catch (err) {
      const errorObj = handleApiError(err);
      setError(errorObj);
      throw errorObj;
    } finally {
      setLoading(false);
    }
  };

  return { submitApply, loading, error };
};
