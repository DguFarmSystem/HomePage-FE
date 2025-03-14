// import { ApplyQuestion } from "@/models/apply";
// import * as S from "./Application.styles";

// interface QuestionsProps {
//   questions: ApplyQuestion[]; // ✅ 배열 형태
//   answers: { [key: number]: string }; // ✅ questionId를 키로 저장
//   setAnswers: React.Dispatch<React.SetStateAction<{ [key: number]: string }>>;
//   questionErrors: { [key: number]: boolean };
//   setQuestionErrors: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
//   isMobile: boolean;
// }

// export default function AITrack({
//   questions,
//   answers = {},
//   setAnswers,
//   questionErrors = {},
//   setQuestionErrors,
//   isMobile,
// }: QuestionsProps) {
//   // 입력 변경 핸들러
//   const handleQuestionChange = (question: ApplyQuestion, value: string) => {
//     setAnswers((prev) => ({ ...prev, [question.questionId]: value }));

//     // 필수 질문이라면, 빈 값 여부 검사
//     if (question.isRequired) {
//       setQuestionErrors((prev) => ({ ...prev, [question.questionId]: value.trim() === "" }));
//     }
//   };

//   // Blur 시, 필수 항목 검사 적용
//   const handleBlur = (question: ApplyQuestion, value: string) => {
//     if (question.isRequired) {
//       setQuestionErrors((prev) => ({ ...prev, [question.questionId]: value.trim() === "" }));
//     }
//   };

//   return (
//     <>
//       {questions.map((question) => (
//         <div key={question.questionId}>
//           <S.Label $isMobile={isMobile}>
//             {question.priority + 1}. {question.content}
//             {question.isRequired && <S.Required>*</S.Required>}
//           </S.Label>
//           <S.SubLabel $isMobile={isMobile}>({question.maxLength}자 이내)</S.SubLabel>
//           <S.Textarea
//             $isMobile={isMobile}
//             name={`question-${question.questionId}`}
//             placeholder="내용을 입력해주세요."
//             value={answers[question.questionId] || ""}
//             onChange={(e) => handleQuestionChange(question, e.target.value)}
//             onBlur={(e) => handleBlur(question, e.target.value)}
//             $error={questionErrors[question.questionId] || false}
//             maxLength={question.maxLength}
//           />
//           {question.isRequired && questionErrors[question.questionId] ? (
//             <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
//           ) : (
//             <S.Box />
//           )}
//         </div>
//       ))}
//     </>
//   );
// }
