import * as S from './Intro.styled';
import logo from '../../../assets/Icons/FarmLogo1.png';
import { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import useMediaQueries from '@/hooks/useMediaQueries';
import { motion } from 'framer-motion';

const Intro = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isApp, isMobile, isTablet, isIpadPro } = useMediaQueries();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
    }),
  };

  if (isApp) {
    return (
      <S.AppContainer>
        <S.TopSection>
          <motion.img 
            src={logo} 
            alt="" 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0} 
          />
          
          {["미래를 준비하고 성장하는 여정,", "Farm System에서 함께하세요."].map((text, index) => (
            <S.IntroPhrase 
              as={motion.div}
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={index + 2} 
            >
              {text}
            </S.IntroPhrase>
          ))}
        </S.TopSection>

        <S.BottomSection
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <S.BottomSectionTitle>🌱 Farm System이란?</S.BottomSectionTitle>
          <S.BottomSectionDescription>
              SW/AI 분야에 관심 있는 학생들로 구성된 <br /> 자율 학습 동아리입니다.
          </S.BottomSectionDescription>

          <S.TrackList $isMobile={isMobile} $isTablet={isTablet}>
              Union · 게임/영상 · 보안/웹 ·  <br />사물인터넷/로봇 · 인공지능 · 빅데이터의 <br />
              5가지 신기술 트랙을 제공하여 학습 경험을 통해 SW/AI 역량을 배양합니다.
          </S.TrackList>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
          >
              <S.AppApplyButton onClick={() => setPopupOpen(true)}>지원하기</S.AppApplyButton>
          </motion.div>
        </S.BottomSection>

        <Popup 
          isOpen={isPopupOpen} 
          onClose={() => setPopupOpen(false)} 
          title={"지금은 모집 기간이 아닙니다."} 
          content={"공개 모집 예정: 2025년 2월"} 
        />
      </S.AppContainer>
    );
  }

  return (
    <S.Container id="about" $isApp={isApp} $isMobile={isMobile} $isTablet={isTablet} $isIpadPro={isIpadPro}>
     <motion.div
  style={{
    width: "100%",  
    height: "100%", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center", 
    flexGrow: 1, 
    margin: "0", 
    padding: "0", 
  }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
>
    <S.Logo $isMobile={isMobile} $isTablet={isTablet}>
    <img src={logo} alt="" />
    미래를 준비하고 성장하는 여정, <br />
    Farm System에서 함께하세요.
  </S.Logo>

    </motion.div>
    <motion.div
  style={{
    width: "100%",  
    height: "100%", 
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", 
    justifyContent: "center", 
          flexGrow: 1, 
    padding: "10px",
  }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <S.WebviewBox>
    <S.Description $isMobile={isMobile} $isTablet={isTablet}>
      🌱Farm System이란?
    </S.Description>
    
    <S.TrackList  $isMobile={isMobile} $isTablet={isTablet}>
      SW/AI 분야에 관심있는 학생들로 구성된 <a>자율 학습 동아리</a>로, <br />
      <a>Union · 게임/영상 · 보안/웹 · 사물인터넷/로봇 · 인공지능 · 빅데이터</a>의 <br />
      5가지 신기술 트랙을 제공하여 학습 경험을 통해 SW/AI 역량을 배양합니다.
    </S.TrackList>
          <S.ApplyBox>
            <S.Apply>
      <S.ApplyButton $isMobile={isMobile} $isTablet={isTablet} onClick={() => setPopupOpen(true)}> 
        지원하기 
      </S.ApplyButton>
      <S.ApplyDescription>2025년 2월 공개 모집 예정</S.ApplyDescription>
    </S.Apply>
</S.ApplyBox>
    
  </S.WebviewBox>
</motion.div>

      
      
      
      
      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"지금은 모집 기간이 아닙니다."} 
        content={"공개 모집 예정: 2025년 2월"} 
      />
    </S.Container>
  );
};

export default Intro;
