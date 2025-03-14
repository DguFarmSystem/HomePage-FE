import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import useMediaQueries from "@/hooks/useMediaQueries";
import * as S from './Step1.styles';
import FarmLogo_Black from '../../../assets/FarmLogo_Black.png';
import RightArrow from '../../../assets/RightArrow.png';

export default function Step1({ setStep }: { setStep: (step: number, isFirst?: boolean) => void }) {  const { isMobile } = useMediaQueries();
  const navigate = useNavigate();


  const fadeInUp = (delay: number) => ({
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
  });

  const fadeInSlow = (delay: number) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay } }
  });

  const handleNavigateToTracks = () => {
    navigate("/"); // ✅ 홈 페이지로 이동
    setTimeout(() => {
      const targetElement = document.querySelector("#tracks");
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 50,
          behavior: "smooth",
        });
      }
    }, 300); // ✅ 페이지 전환 후 스크롤 이동
  };

  return (
    <S.Container $isMobile={isMobile} id="applyStep1">
      {/* {!isApp && (
        <motion.div initial="hidden" animate="visible" variants={fadeInSlow(0)}>
          <S.ApplyTitle $isApp={isApp} $isMobile={isMobile}>Farm System 4기 지원</S.ApplyTitle>
        </motion.div>
      )} */}

      <motion.div initial="hidden" animate="visible" variants={fadeInSlow(0.5)}>
        <S.FarmLogo src={FarmLogo_Black} alt="FarmLogo" />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInSlow(0.5)}>
        <S.HelloText $isMobile={isMobile}>환영해요!</S.HelloText>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp(1.4)}>
        {isMobile ? (
          <S.QuestionText $isMobile={isMobile}>
            Farm System 4기 <br /> 신입 부원 모집에 지원하시겠어요?
          </S.QuestionText>
        ): (
          <S.QuestionText $isMobile={isMobile}>
            Farm System 4기 신입 부원 모집에 지원하시겠어요?
          </S.QuestionText>
        )}
        
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInSlow(2.3)} style={{ width: '100%' }}>
        <S.ButtonContainer $isMobile={isMobile}>
          <S.Button $isMobile={isMobile} bgColor="#C1ECC1" textColor="#006811" onClick={() => setStep(2, false)}>지원서 불러오기</S.Button>
          <S.Button $isMobile={isMobile} bgColor="#006811" textColor="#FFF" onClick={() => setStep(2, true)}>새로 작성하기</S.Button>
        </S.ButtonContainer>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInSlow(2.3)}>
        <S.BottomTextContainer $isMobile={isMobile}>
          <S.BottomText $isMobile={isMobile} onClick={handleNavigateToTracks}>
            트랙 선택이 고민된다면? <strong>트랙 소개 보러가기</strong>
          </S.BottomText>
          <S.Arrow src={RightArrow} alt="RightArrow" />
        </S.BottomTextContainer>
      </motion.div>
    </S.Container>
  );
}
