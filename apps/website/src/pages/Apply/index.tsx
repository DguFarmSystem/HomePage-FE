import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Application from "./Application/Application";

export default function Apply() {
  const [step, setStep] = useState<number>(1);
  const [isFirst, setIsFirst] = useState<boolean>(false);
  const [studentNumber, setStudentNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const goToStep = (newStep: number, firstTime: boolean = false) => {
    setIsFirst(firstTime);
    setStep(newStep);
  };

  const backToStep = (newStep: number ) => {
    setStep(newStep);
  };

  const handleApplySubmit = (studentNumber: string, password: string ) => {
    setStudentNumber(studentNumber);
    setPassword(password);
  };
  
  useEffect(() => {
    if (studentNumber && password) {
      setStep(3); 
    }
  }, [studentNumber, password]);
  

  

  return (
    <div>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Step1 setStep={goToStep}  />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0 }}
          >
            <Step2 setStep={goToStep} isFirst={isFirst} onSubmit={handleApplySubmit} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0 }}
          >
            <Application setStep={backToStep} propStudentNumber={studentNumber} propPassword={password} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
