import { useQuery } from "@tanstack/react-query";
import { verifyStudent } from "../services/verify";

export const useVerifyStudent = (studentNumber: string, enabled: boolean = false) => {
  return useQuery({
    queryKey: ["verifyStudent", studentNumber],
    queryFn: () => verifyStudent(studentNumber),
    enabled, 
    retry: 1, 
  });
};
