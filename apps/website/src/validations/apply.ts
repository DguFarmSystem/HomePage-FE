import { z } from "zod";
import { Track } from "@/models/apply";

export const personalInfoSchema = z.object({
  studentNumber: z.string().min(1, "학번은 필수 입력사항입니다."),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
  name: z.string().min(1, "이름을 입력해주세요."),
  major: z.string().min(1, "학과를 입력해주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  phoneNumber: z.string().min(10, "전화번호를 올바르게 입력해주세요."),
});

export function validatePersonalInfo(data: unknown) {
  return personalInfoSchema.safeParse(data);
}

export const submissionSchema = z
  .object({
    studentNumber: z.string().min(1, "학번을 입력해주세요."),
    password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다."),
    name: z.string().min(1, "이름을 입력해주세요."),
    email: z.string().email("유효한 이메일 주소를 입력해주세요."),
    phoneNumber: z.string().min(10, "전화번호를 올바르게 입력해주세요."),
    track: z.nativeEnum(Track),
    answers: z.array(
      z.object({
        questionId: z.number(),
        content: z.string(),
        choiceId: z.array(z.number()),
      })
    ),
  })
  .refine(
    (data) =>
      data.answers.every(
        (answer) =>
          // 답변이 ESSAY인 경우엔 content가 비어있지 않아야 하고,
          // CHOICE인 경우엔 choiceId 배열이 비어있지 않아야 합니다.
          answer.content.trim() !== "" || answer.choiceId.length > 0
      ),
    {
      message: "모든 필수 질문에 답변을 입력해주세요.",
      path: ["answers"],
    }
  );