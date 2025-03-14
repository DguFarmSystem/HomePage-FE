import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import * as S from "./Application.styles";
import useMediaQueries from "@/hooks/useMediaQueries";
import { 
    useApplyQuestions, 
    useSaveApply, 
    useSubmitApply, 
    useLoadApply 
  } from "@/hooks/useApply";
import { ApplyAnswer, Answer, Track } from "@/models/apply";
import PersonalInfo from "./PersonInfo";
import Popup from '@/components/Popup/Popup';
import Logger from "@/utils/Logger";

const defaultTrack: Track = Track.UNION;
type AnswerMap = Record<number, { content: string; choiceId: number[] }>;

// 트랙 영문-한글 매핑
const trackOptions = [
  { key: "UNION", label: "유니온" },
  { key: "GAMING_VIDEO", label: "게임/영상" },
  { key: "IOT_ROBOTICS", label: "사물인터넷/로봇" },
  { key: "BIGDATA", label: "빅데이터" },
  { key: "SECURITY_WEB", label: "보안/웹" },
  { key: "AI", label: "인공지능" }
];

interface ApplicationProps {
    setStep: (step: number) => void;
    propStudentNumber: string;
    propPassword: string;
  }

export default function Application({ setStep, propStudentNumber, propPassword }: ApplicationProps) {
  
    const navigate = useNavigate();
//   const [isPopupOpen, setPopupOpen] = useState(false);
  const [studentNumber, setStudentNumber] = useState(propStudentNumber);
  const [password, setPassword] = useState(propPassword);
//   const [status, setStatus] = useState(propStatus);
  const { isMobile } = useMediaQueries();
  const [selectedTrack, setSelectedTrack] = useState<Track>(defaultTrack); 
  const [isOpen, setIsOpen] = useState(false);
  const { data: questionsData } = useApplyQuestions();

  const { saveApply } = useSaveApply();
  const { submitApply } = useSubmitApply();
  const { loadApply } = useLoadApply();

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [loadedData, setLoadedData] = useState<ApplyAnswer | null>(null);
  const [applyStatus, setApplyStatus] = useState<string>("");

  Logger.log(studentNumber, password);
  Logger.log("데이터"+ loadedData);

  useEffect(() => {
    const handlePopState = () => {
        setStep(2); 
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
        window.removeEventListener("popstate", handlePopState);
    };
}, [setStep]);

  const buildApplyData = (): ApplyAnswer => {
    Logger.log('학번'+loadedData);
    if (loadedData) {
      return {
        ...loadedData,
        name,
        major,
        email,
        phoneNumber,
        track: selectedTrack,
        answers: Object.keys(answers).length > 0 ? transformAnswers() : [],
      };
    }
    throw new Error("지원서 데이터 구성 실패: 로드된 데이터가 없습니다.");
  };

  const updateLoadedData = () => {
    
    // if (loadedData) {
      if (loadedData) {
        setLoadedData({
          ...loadedData,
          name,
          major,
          email,
          phoneNumber,
          applyId: loadedData.applyId, 
          track: loadedData.track,
        });
      }
  };

  const handleSave = async () => {
    updateLoadedData();
    try {
      const response = await saveApply(buildApplyData());
      Logger.log("임시저장 성공:", response);
      setSavePopupOpen(true); // 정상적으로 저장되었을 때 팝업
    } catch (err) {
      Logger.error("임시저장 에러:", err);
  
        setSaveErrorPopupOpen(true); 
    }
  };
  

  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isSavePopupOpen, setSavePopupOpen] = useState(false);
  const [isSaveErrorPopupOpen, setSaveErrorPopupOpen] = useState(false);
  const [isSubmitErrorPopupOpen, setSubmitErrorPopupOpen] = useState(false);
  const [isIncompleteInfoPopupOpen, setIncompleteInfoPopupOpen] = useState(false);
  const [isIncompleteRequiredPopupOpen, setIncompleteRequiredPopupOpen] = useState(false);




  
  const handleConfirmSubmit = () => {
    // 개인정보 필수 입력 검사
    if (!name.trim() || !major.trim() || !email.trim() || !phoneNumber.trim()) {
      setIncompleteInfoPopupOpen(true);
      return;
    }

    // 현재 선택된 트랙에 해당하는 필수 질문 필터링
    const requiredQuestionsForTrack = (questionsData?.data ?? [])
      .filter(q => q.track === selectedTrack && q.isRequired);

    // 필수 질문(텍스트 입력 & 선택형) 중 하나라도 비어있는 경우 확인
    const hasUnansweredRequiredQuestions = requiredQuestionsForTrack.some((q) => {
      const answer = answers[q.questionId];

      // 1️⃣ ESSAY(텍스트 입력형) 필수 질문이 비어있는 경우
      if (q.type === "ESSAY" && (!answer || !answer.content.trim())) {
        return true;
      }

      // 2️⃣ CHOICE(선택형) 필수 질문에서 아무것도 선택되지 않은 경우
      if (q.type === "CHOICE" && (!answer || answer.choiceId.length === 0)) {
        return true;
      }

      return false;
    });

    if (hasUnansweredRequiredQuestions) {
      setIncompleteRequiredPopupOpen(true);
      return;
    }

    // 모든 필수 사항이 채워졌다면 제출 확인 팝업 띄우기
    setConfirmPopupOpen(true);
};

  
  
  
  
  const handleSubmit = async () => {
    setConfirmPopupOpen(false);
  
    try {
      const response = await submitApply(buildApplyData());
      Logger.log("제출 성공:", response);
      setApplyStatus("SUBMITTED");
      setSuccessPopupOpen(true); 
    } catch (err) {
      Logger.error("제출 에러:", err);
      setSubmitErrorPopupOpen(true);
    }
  };

  const handleSuccessPopupClose = () => {
    setSuccessPopupOpen(false);
    navigate("/"); 
    setTimeout(() => {
      const targetElement = document.querySelector("#about");
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const transformAnswers = (): Answer[] => {
    return Object.entries(answers).map(([questionId, answer]) => ({
      questionId: Number(questionId),
      content: answer.content,
      choiceId: answer.choiceId,
    }));
  };

  useEffect(() => {
      if (studentNumber && password) {
        Logger.log('안뇽');
        loadApply({ studentNumber, password })
          
          .then((res) => {
            Logger.log('안뇽');
            if (res.data) {
              setLoadedData(res.data);
              setApplyStatus(res.data.status);
              const answerMap: AnswerMap = {};
              res.data.answers.forEach((ans) => {
                answerMap[ans.questionId] = {
                  content: ans.content ?? "",
                  choiceId: ans.choiceId ?? [],
                };
              });
              setAnswers(answerMap);
              setSelectedTrack(res.data.track);
            }
          })
          .catch((err) => {
            Logger.error("지원서 로드 에러:", err);
          });
      }
    // loadApply 넣으면 무한 호출됨
    }, [studentNumber, password]);

  const [personalErrors, setPersonalErrors] = useState({
    name: false,
    phone: false,
    email: false,
    affiliation: false,
    stdNumber: false,
  });
  

  // 트랙 선택 핸들러
  const handleSelect = (optionKey: Track) => {
    setSelectedTrack(optionKey);
    setIsOpen(false);
  };

  // 현재 선택된 트랙의 한글명 가져오기
  const selectedTrackLabel = trackOptions.find(track => track.key === selectedTrack)?.label || "트랙을 선택해주세요";

  // 선택한 트랙의 질문 필터링
  const filteredQuestions = questionsData?.data?.filter(q => q.track === selectedTrack) || [];

  // 오류 상태 저장 (질문 ID 기준)
  const [questionErrors, setQuestionErrors] = useState<{ [key: number]: boolean }>({});

  // 입력 변경 핸들러 (ESSAY 타입)
  const handleQuestionChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], content: value }
    }));
  
    const isRequired = filteredQuestions.find(q => q.questionId === questionId)?.isRequired;
    if (isRequired) {
      setQuestionErrors(prev => ({ ...prev, [questionId]: value.trim() === "" }));
    }
  };
  

  // 체크박스 변경 핸들러 (CHOICE 타입)
  const handleCheckboxChange = (questionId: number, choiceId: number, isDuplicated: boolean) => {
    setAnswers(prev => {
      const prevChoices = prev[questionId]?.choiceId || [];
  
      let updatedChoices;
      if (isDuplicated) {
        // ✅ 중복 선택 가능 → 기존 방식 유지
        updatedChoices = prevChoices.includes(choiceId)
          ? prevChoices.filter(c => c !== choiceId)  // 선택 해제
          : [...prevChoices, choiceId];  // 선택 추가
      } else {
        // ❌ 중복 선택 불가 → 한 개만 선택 가능 (라디오 버튼처럼 동작)
        updatedChoices = [choiceId];
      }
  
      return {
        ...prev,
        [questionId]: { ...prev[questionId], choiceId: updatedChoices }
      };
    });
  };
  


  // 개인정보 동의 체크박스 상태
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  useEffect(() => {
    if (questionsData?.data) {
      Logger.log("질문 데이터:", questionsData.data);
    }
  }, [questionsData]);

  
  const [name, setName] = useState("");
const [major, setMajor] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");

useEffect(() => {
  if (loadedData) {
    setName(loadedData.name ?? "");
    setMajor(loadedData.major ?? "");
    setEmail(loadedData.email ?? "");
    setPhoneNumber(loadedData.phoneNumber ?? "");
  }
}, [loadedData]);


  return (
    <S.Container>
        <PersonalInfo
        studentNumber={studentNumber}
        password={password}
        name={name}
        major={major}
        email={email}
        phoneNumber={phoneNumber}
        onStudentNumberChange={setStudentNumber}
        onPasswordChange={setPassword}
        onNameChange={setName}
        onMajorChange={setMajor}
        onEmailChange={setEmail}
        onPhoneNumberChange={setPhoneNumber}
        personalErrors={personalErrors}
        setPersonalErrors={setPersonalErrors}
        isMobile={isMobile}
        disabled={applyStatus === "SUBMITTED"}
        />

      <S.Title $isMobile={isMobile}>지원하는 트랙</S.Title>

      <S.Label $isMobile={isMobile}>지원하는 트랙을 선택해주세요.</S.Label>
      <S.SelectContainer $isMobile={isMobile}>
        <S.SelectButton onClick={() => setIsOpen(!isOpen)}>
          {selectedTrackLabel}
        </S.SelectButton>
        {isOpen && (
          <S.Dropdown>
            {trackOptions.map((option) => (
              <S.Option key={option.key} onClick={() => handleSelect(option.key as Track)}>
                {option.label}
              </S.Option>
            ))}
          </S.Dropdown>
        )}
      </S.SelectContainer>

      <S.Title $isMobile={isMobile}>질문 목록</S.Title>

      {filteredQuestions.map((question) => (
        <S.InfoContainer $isMobile={isMobile} key={question.questionId}>
          <S.Label $isMobile={isMobile}>
            {question.priority + 1}. {question.content}
            {question.isRequired && <S.Required>*</S.Required>}
          </S.Label>
          <S.SubLabel $isMobile={isMobile}>
            {question.maxLength ? `(${question.maxLength}자 이내)` : (question.isDuplicated ? "(중복 선택 가능)" : "(하나만 선택 가능)")}
          </S.SubLabel>


          {/* ESSAY 타입: Textarea */}
          {question.type === "ESSAY" ? (
            <S.Textarea
              $isMobile={isMobile}
              name={`question-${question.questionId}`}
              placeholder="내용을 입력해주세요."
              value={answers[question.questionId]?.content || ""}
              onChange={(e) => handleQuestionChange(question.questionId, e.target.value)}
              onBlur={(e) => handleQuestionChange(question.questionId, e.target.value)}
              $error={questionErrors[question.questionId] || false}
              maxLength={question.maxLength || undefined}
              disabled={applyStatus === "SUBMITTED"}
            />
          ) : (
            /* CHOICE 타입: Checkbox */
            <S.CheckboxContainer $isMobile={isMobile}>
              {question.choices?.map((choice) => (
                <S.CheckboxLabel key={choice.choiceId} $isMobile={isMobile}>
                  <S.Checkbox
                    type="checkbox"
                    name={`question-${question.questionId}`}
                    value={choice.content}
                    checked={answers[question.questionId]?.choiceId.includes(choice.choiceId) || false}
                    onChange={() => handleCheckboxChange(question.questionId, choice.choiceId, question.isDuplicated)}
                    disabled={applyStatus === "SUBMITTED"}
                  />
                  {choice.content}
                </S.CheckboxLabel>
              ))}
            </S.CheckboxContainer>
          )}

          {/* 오류 메시지 표시 */}
          {question.isRequired && questionErrors[question.questionId] ? (
            <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
          ) : (
            <S.Box />
          )}
        </S.InfoContainer>
      ))}


        {applyStatus !== "SUBMITTED" && (
        <>
            {/* 개인정보 동의 체크박스 */}
            <S.AgreeContainer $isMobile={isMobile} onChange={() => setAgree1((prev) => !prev)}>
              <S.Checkbox type="checkbox" checked={agree1} style={agree1 ?  {} : {borderColor: '#FF1E1E'}} />
              <S.AgreeText>개인정보 수집 및 이용에 동의합니다.</S.AgreeText>
            </S.AgreeContainer>

            <S.AgreeContainer $isMobile={isMobile} onChange={() => setAgree2((prev) => !prev)}>
              <S.Checkbox type="checkbox" checked={agree2} />
              <S.AgreeText>지원서 제출 후, 수정 및 추가 제출이 불가능합니다.</S.AgreeText>
            </S.AgreeContainer>

            {/* 임시 저장 & 제출 버튼 */}
            <S.ButtonContainer $isMobile={isMobile}>
              <S.Button $isMobile={isMobile} gray disabled={!agree1} onClick={handleSave}>
                  임시저장하기
              </S.Button>
              <S.Button $isMobile={isMobile} green disabled={!(agree1 && agree2)} onClick={handleConfirmSubmit}>
                  제출하기
              </S.Button>
            </S.ButtonContainer>
        </>
        )}

     
        <Popup 
            isOpen={isConfirmPopupOpen} 
            onClose={() => setConfirmPopupOpen(false)} 
            title={`${selectedTrackLabel === "트랙을 선택해주세요" ? "선택된 트랙이 없습니다." : `${selectedTrackLabel} 트랙에 지원하시겠습니까?`}`}
            content={
                <>
                한번 제출하시면 수정이 불가합니다. <br />
                또한 동일한 학번으로 재제출도 불가합니다.
                </>
            }
            onConfirm={handleSubmit}
        />
        
        <Popup 
        isOpen={isSuccessPopupOpen} 
        onClose={handleSuccessPopupClose} 
        title="제출 완료"
        content="지원서가 성공적으로 제출되었습니다."
        />

        <Popup 
        isOpen={isSavePopupOpen} 
        onClose={() => setSavePopupOpen(false)} 
        title="임시저장 완료"
        content="지원서가 성공적으로 저장되었습니다."
        />

        <Popup 
        isOpen={isSaveErrorPopupOpen} 
        onClose={() => setSaveErrorPopupOpen(false)} 
        title="임시저장 실패"
        content="해당 학번으로 제출한 이력이 있어 저장이 불가능합니다."
        />

        <Popup 
        isOpen={isSubmitErrorPopupOpen} 
        onClose={() => setSubmitErrorPopupOpen(false)} 
        title="제출 실패"
        content="해당 학번으로 제출한 이력이 있어 제출이 불가능합니다."
        />

        <Popup 
        isOpen={isIncompleteInfoPopupOpen} 
        onClose={() => setIncompleteInfoPopupOpen(false)} 
        title="제출 실패"
        content={
            <>개인정보(이름, 학과, 이메일, 전화번호)를 <br/>모두 입력해야 제출이 가능합니다.</>}
        />

        <Popup 
        isOpen={isIncompleteRequiredPopupOpen} 
        onClose={() => setIncompleteRequiredPopupOpen(false)} 
        title="제출 실패"
        content={
            <>현재 선택한 트랙의 필수 질문을 <br/>모두 작성해야 제출이 가능합니다.</>}
        />


    </S.Container>
  );
}
