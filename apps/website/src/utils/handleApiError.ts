import axios from "axios";

export const handleApiError = (err: unknown): Error => {
  if (axios.isAxiosError(err) && err.response && err.response.data) {
    const data = err.response.data;
    // const status = data.status || err.response.status;
    // 일단은 에러 코드 대신 content만 사용
    const content = data.content || data.message || "알 수 없는 오류입니다.";
    return new Error(content);
  } else if (err instanceof Error) {
    return err;
  }
  return new Error("알 수 없는 오류 발생");
};