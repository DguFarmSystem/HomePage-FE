import { ApplyQuestion, Track } from "@/models/apply";

// 특정 트랙에 해당하는 질문만 필터링
export const filterQuestionsByTrack = (
  questions: ApplyQuestion[],
  track: Track
): ApplyQuestion[] => {
  return questions.filter((q) => q.track === track);
};


// 질문 배열을 priority 오름차순으로 정렬
// 원본 배열을 변경하지 않도록 slice()를 사용
export const sortQuestionsByPriority = (
  questions: ApplyQuestion[]
): ApplyQuestion[] => {
  return questions.slice().sort((a, b) => a.priority - b.priority);
};
