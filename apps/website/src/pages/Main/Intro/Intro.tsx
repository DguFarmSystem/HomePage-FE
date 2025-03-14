import * as S from './Intro.styled';
import { useNavigate } from 'react-router';
import logo from '../../../assets/Icons/FarmLogo1.png';
import { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import useMediaQueries from '@/hooks/useMediaQueries';
import { motion } from 'framer-motion';
import IntroLogo from '../../../assets/Icons/IntroLogo.svg';

const IS_RECRUIT = false; // 모집 기간 여부

const Intro = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isApp, isMobile, isTablet } = useMediaQueries();
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
    }),
  };

  const handleRecruitClick = () => {
    if (IS_RECRUIT) {
      navigate('/recruit');
    } 
    // else {
    //   setPopupOpen(true);
    // }
  };

  if (isApp) {
    return (
      <S.AppContainer id="about">
        <S.TopSection>
        {/* <motion.img 
            src={IntroLogo} 
            alt="" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }} 
            viewport={{ once: true }}
          />
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }} 
            viewport={{ once: true }}
          >
            <S.IntroPhrase>
              미래를 준비하고 성장하는 여정,
            </S.IntroPhrase>
            <S.IntroPhrase>
              Farm System에서 함께하세요.
            </S.IntroPhrase>
          </motion.div> */}
          <motion.img 
            src={IntroLogo} 
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
        {/* <S.BottomSection>
          <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} 
                      viewport={{ once: true }}>
            <S.IntroDescription>
            Farm System은 SW/AI 분야에 관심있는<br/>
            학생들로 구성된 자율 학습 동아리로,<br/>
            Union · 게임/영상 · 보안/웹 ·<br/>
            사물인터넷/로봇 · 인공지능 · 빅데이터의",<br/>
            5가지 신기술 트랙을 제공하여,<br/>
            학습 경험을 통해 SW/AI 역량을 배양합니다.<br/>
            </S.IntroDescription>
          </motion.div> */}

        {/* 2/3 지점: Description - 화면에 들어올 때 애니메이션 적용  */}
        <S.BottomSection>
          {[
            "Farm System은 SW/AI 분야에 관심있는",
            "학생들로 구성된 자율 학습 동아리로,",
            "Union · 게임/영상 · 보안/웹 ·",
            "사물인터넷/로봇 · 인공지능 · 빅데이터의",
            "5가지 신기술 트랙을 제공하여",
            "학습 경험을 통해 SW/AI 역량을 배양합니다."
          ].map((text, index) => (
            <S.IntroDescription
              as={motion.p}
              key={index}
              initial={{ color: "#333", clipPath: "inset(0 100% 0 0)" }} 
              whileInView={{ color: "#ffffff", clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, delay: index * 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {text}
            </S.IntroDescription>
          ))}
       

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease: "easeOut" }} 
            viewport={{ once: true }}
          >
            <S.AppApplyButton onClick={handleRecruitClick} isRecruit={IS_RECRUIT}>
              지원하기
            </S.AppApplyButton>
          </motion.div>
        </S.BottomSection>


        <Popup 
          isOpen={isPopupOpen} 
          onClose={() => setPopupOpen(false)} 
          title={"지금은 모집 기간이 아니에요."} 
          content={"3월 13일까지 지원 가능해요."} 
        />
      </S.AppContainer>
    );
  }


  return (
    <S.Container id="about" $isMobile={isMobile} $isTablet={isTablet}>
      <S.Bud $isMobile={isMobile} $isTablet={isTablet}>🌱</S.Bud>
      <S.Description $isMobile={isMobile} $isTablet={isTablet}>
        미래를 준비하고 성장하는 여정, <br />
        Farm System에서 함께하세요.
      </S.Description>
      <S.Logo $isMobile={isMobile} $isTablet={isTablet}>
        <img src = {logo} alt = "" />
        Farm System
      </S.Logo>

      <S.TrackList $isMobile={isMobile} $isTablet={isTablet}>
      SW/AI 분야에 관심있는 학생들로 구성된 <a>자율 학습 동아리</a>로, <br/>
      <a>Union · 게임/영상 · 보안/웹 · 사물인터넷/로봇 · 인공지능 · 빅데이터</a>의 <br/>
      5가지 신기술 트랙을 제공하여 학습 경험을 통해 SW/AI 역량을 배양합니다.
      </S.TrackList>
      <S.Apply>
        <S.ApplyButton
          $isMobile={isMobile}
          $isTablet={isTablet}
          onClick={handleRecruitClick}
          isRecruit={IS_RECRUIT}
        >
          지원하기
        </S.ApplyButton>
        <S.ApplyDescription $isMobile={isMobile}>2025년 3월 13일까지 모집 예정</S.ApplyDescription>
      </S.Apply>


      {/* 팝업 수빈님 것과 통일 */}
      {isPopupOpen && (
        <Popup 
          isOpen={isPopupOpen} 
          onClose={() => setPopupOpen(false)}  
          title={"지금은 모집 기간이 아니에요."} 
          content={"3월 13일까지 지원 가능해요."} 
        />
      )}
    </S.Container>
  );
};

export default Intro;
