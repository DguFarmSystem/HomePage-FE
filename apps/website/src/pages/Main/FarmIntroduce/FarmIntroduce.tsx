import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as S from './FarmIntroduce.styles';
import first from '../../../assets/FarmIntroduce/1.png';
import second from '../../../assets/FarmIntroduce/2.png';
import third from '../../../assets/FarmIntroduce/3.png';
import fourth from '../../../assets/FarmIntroduce/4.png';
import useMediaQueries from '@/hooks/useMediaQueries';
import sungjiKim from '../../../assets/Images/Professors/sjKim.png';
import kiyongHan from '../../../assets/Images/Professors/HanKY.png';



export interface ProfessorDataInterface {
    id: number;
    name: string,
    photo: string, // 이미지 URL (없다면 비워둔다거나 placeholder 사용)
    phone: string,
    email: string,
    major: string,
    office: string,
  }

export const professors : ProfessorDataInterface[] = [
    {
      id: 1,
      name: "한기용 교수님",
      photo: kiyongHan, // 이미지 URL (없다면 비워둔다거나 placeholder 사용)
      phone: "02-2290-1406",
      email: "HKY87@dongguk.edu",
      major: "IoT, 시스템 통합",
      office: "신공학관 6109호",
    },
    {
        id: 2,
      name: "김성지 교수님",
      photo: sungjiKim,
      phone: "02-2290-1408",
      email: "sjkim01@dongguk.edu",
      major: "전자계산학",
      office: "신공학관 6109호",
    },
    // 필요하다면 추가
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

const AnimatedContentBox = ({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      style={style}
    >
      {children}
    </motion.div>
  );
};
  
  export default function FarmIntroduce() {
    const { isApp, isMobile, isTablet } = useMediaQueries();
    
    return (
      <S.Container $isMobile = {isMobile}>
        {/* 메인 설명 부분 */}
        <S.MainContents $isMobile = {isMobile}>
          <AnimatedContentBox style={{ width: '100%'}}>
            <S.ContentBox $isMobile = {isMobile} $isTablet={isTablet}>
              <S.GrayBox $isApp={isApp} $isMobile = {isMobile} $isTablet = {isTablet} src={first} alt='1'/>
              <S.TextWrapper textAlign="left" $isApp={isApp} $isMobile = {isMobile} $isTablet = {isTablet}>
                {isMobile ? 
                  <div>
                  <strong style={{ fontWeight: 700 }}>Farm System</strong>은<br />
                  동국대학교에서 SW/AI 역량과<br />
                  실력을 갈고닦을 수 있는<br /> 최적의 환경을 제공합니다.</div>
                  :
                  <div><strong style={{ fontWeight: 700 }}>Farm System</strong>은<br />
                  동국대학교에서 SW/AI 역량을 기르고<br />
                  실력을 갈고닦을 수 있는 최적의 환경을 제공합니다.</div>
                }
              </S.TextWrapper>
            </S.ContentBox>
          </AnimatedContentBox>
  
          {/* 두 번째 박스 (오른쪽 텍스트 + 왼쪽 그레이 박스) */}
          <AnimatedContentBox style={{ width: '100%'}}>
            <S.ContentBox style={{ justifyContent: 'flex-end' }} $isMobile = {isMobile} $isTablet={isTablet}>
              <S.TextWrapper $isApp={isApp} textAlign="right" $isMobile = {isMobile} $isTablet = {isTablet}>
                {isMobile ?
                  <div>
                    최신 기술을 깊이 있게 탐구하는 <br /><strong style={{ fontWeight: 700 }}>5가지 신기술 트랙</strong>과,
                    <br />
                    SW/AI의 탄탄한 기초를 다지는 <br /><strong style={{ fontWeight: 700 }}>Union</strong>으로 구성됩니다.
                  </div>
                :
                <div>
                  최신 기술을 깊이 있게 탐구하는 <strong style={{ fontWeight: 700 }}>5가지 신기술 트랙</strong>과,
                  <br />
                  SW/AI의 탄탄한 기초를 다지는 <strong style={{ fontWeight: 700 }}>Union</strong>으로 구성됩니다.
                </div>
                }
                
              </S.TextWrapper>
              <S.GrayBox $isApp={isApp} $isMobile = {isMobile} $isTablet = {isTablet} src={second} alt='2'/>
            </S.ContentBox>
          </AnimatedContentBox>
  
          {/* 세 번째 박스 */}
          <AnimatedContentBox style={{ width: '100%'}}>
            <S.ContentBox $isMobile = {isMobile} $isTablet={isTablet}>
              <S.GrayBox $isApp={isApp} $isMobile = {isMobile} $isTablet = {isTablet} src={third} alt='3'/>
              <S.TextWrapper textAlign="left" $isApp={isApp} $isMobile = {isMobile} $isTablet = {isTablet}>
                {isMobile ?
                  <div>
                    <strong style={{ fontWeight: 700 }}>신기술 트랙</strong>에서는
                    <br />
                    각 분야의 최첨단 기술을 학습하고,<br />
                    이를 프로젝트에 적용하며 <br />실전 경험을 쌓습니다.
                  </div>
                  :
                  <div>
                    <strong style={{ fontWeight: 700 }}>신기술 트랙</strong>에서는
                    <br />
                    각 분야의 최첨단 기술을 학습하고,<br />
                    이를 프로젝트에 적용하며 실전 경험을 쌓습니다.
                  </div>
                }
                
              </S.TextWrapper>
            </S.ContentBox>
          </AnimatedContentBox>
  
          {/* 네 번째 박스 */ }
          <AnimatedContentBox style={{ width: '100%'}}>
            <S.ContentBox style={{ justifyContent: 'flex-end' }} $isMobile = {isMobile} $isTablet={isTablet}>
              <S.TextWrapper $isApp={isApp} textAlign="right" $isMobile = {isMobile} $isTablet = {isTablet}>
                {isMobile ?
                  <div>
                    <strong style={{ fontWeight: 700 }}>Union</strong>에서는
                    <br />
                    SW/AI의 핵심 개념을 익히고,<br />
                    탄탄한 기초를 바탕으로 <br />성장할 수 있도록 돕습니다.
                  </div>
                :
                <div>
                  <strong style={{ fontWeight: 700 }}>Union</strong>에서는
                  <br />
                  SW/AI의 핵심 개념을 익히고,<br />
                  탄탄한 기초를 바탕으로 성장할 수 있도록 돕습니다.
                </div>
          }
              </S.TextWrapper>
              <S.GrayBox $isApp={isApp} $isMobile = {isMobile} $isTablet = {isTablet} src={fourth} alt='4'/>
            </S.ContentBox>
          </AnimatedContentBox>
        
        </S.MainContents>
  
        {/* 교수진 정보 섹션 */}
      <S.ProfessorSection $isMobile = {isMobile} $isTablet = {isTablet}>
      <S.SectionTitle $isMobile = {isMobile}>Farm System 담당 교수진</S.SectionTitle>
        <S.ProfessorList $isMobile = {isMobile}>
          {professors.map((prof) => (
            <S.ProfessorItem key={prof.id} $isMobile={isMobile} $isTablet={isTablet}>
                {/* {!isMobile && ( */}
                  <S.ProfessorPhoto
                    src={prof.photo}
                    alt={prof.name}
                    $isApp={isApp}
                    $isMobile={isMobile}
                  />
                {/* // )} */}

            <S.ProfessorDetailsContainer $isApp={isApp} $isMobile = {isMobile}>
              <S.ProfessorName $isApp={isApp} $isMobile = {isMobile}>{prof.name}</S.ProfessorName>
              <div style={{ display: 'flex'}}>
                <S.DetailLabels $isApp={isApp} $isMobile = {isMobile}>
                  <S.DetailLabel $isMobile = {isMobile}> 연락처</S.DetailLabel>
                  {!isApp &&
                    <S.DetailLabel $isMobile = {isMobile}> 이메일</S.DetailLabel>
                  }
                  <S.DetailLabel $isMobile = {isMobile}> 전공분야</S.DetailLabel>
                  <S.DetailLabel $isMobile = {isMobile}> 연구실</S.DetailLabel>
                </S.DetailLabels>
                <S.DetailValues $isMobile = {isMobile}>
                  <S.DetailValue $isMobile = {isMobile}>{prof.phone}</S.DetailValue>
                  {!isApp &&
                    <S.DetailValue $isMobile = {isMobile}>{prof.email}</S.DetailValue>
                  }
                  
                  <S.DetailValue $isMobile = {isMobile}>{prof.major}</S.DetailValue>
                  <S.DetailValue $isMobile = {isMobile}>{prof.office}</S.DetailValue>
                </S.DetailValues>
              </div>
              </S.ProfessorDetailsContainer>
              {/* {isMobile && (
                  <S.ProfessorPhoto
                    src={prof.photo}
                    alt={prof.name}
                    $isMobile={isMobile}
                  />
                )} */}
            </S.ProfessorItem>
            ))}
        </S.ProfessorList>
       </S.ProfessorSection>
      </S.Container>
    );
  }