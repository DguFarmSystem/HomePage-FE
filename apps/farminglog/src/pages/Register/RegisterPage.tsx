import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const RegisterPageContent = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const verifyStudent = useAuthStore((state) => state.verifyStudent);
  const setStudentInfo = useAuthStore((state) => state.setStudentInfo);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setSubmitted(true);
    try {
      await verifyStudent(studentNumber);
      setStudentInfo(studentNumber, studentNumber);
      navigate("/login");
    } catch (error) {
      console.error("학번 검증 실패:", error);
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <input
        type="text"
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
        placeholder="Enter student number"
      />
      <button onClick={handleSubmit} disabled={submitted}>
        {submitted ? "Verifying..." : "Verify"}
      </button>
    </div>
  );
};

const RegisterPage = () => {
  return (
    <RegisterPageContent />
  );
};

export default RegisterPage;
