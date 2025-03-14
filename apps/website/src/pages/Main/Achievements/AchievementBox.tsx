import * as S from './AchievementBox.styles';
import useMediaQueries from '@/hooks/useMediaQueries';

// framer-motion 관련
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  onStart,
  onEnd,
}: {
  to: number | string; //숫자나 문자열이나;;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  onStart?: () => void;
  onEnd?: () => void;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const initialValue = direction === 'down' ? Number(to) : from;
  const motionValue = useMotionValue(initialValue);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });

  // 스크롤로 요소가 화면에 들어왔는지 확인
  const isInView = useInView(ref, { once: true, margin: '0px' });

  // 초기 textContent 설정
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(initialValue);
    }
  }, [initialValue]);

  // inView && startWhen === true일 때 애니메이션 시작
  useEffect(() => {
    if (isInView && startWhen) {
      onStart?.();

      // 딜레이가 있으면 일정 시간 후에 목표값으로
      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from! : Number(to));
      }, delay * 1000);

      // 애니메이션이 종료될 시점에 onEnd 호출
      const durationTimeoutId = setTimeout(() => {
        onEnd?.();
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  // springValue 변경 시 숫자만 표시 (쉼표 없음)
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        // 소수점 제거
        ref.current.textContent = String(Math.round(latest));
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return <span className={className} ref={ref} />;
}

const AchievementBox = () => {
  const { isMobile, isTablet, isApp } = useMediaQueries();

  // "숫자+접미사" 형태 문자열에서 숫자와 접미사 부분을 분리
  const parseNumberAndSuffix = (str: string) => {
    const match = str.match(/([\d,]+)(.*)/); //정규표현식으로 제거
    if (!match) return [0, ''];
    // 쉼표 제거 후 숫자로 변환
    const numericString = match[1].replace(/,/g, '');
    const suffix = match[2];
    return [parseInt(numericString, 10), suffix];
  };

  // 기존 데이터 (쉼표가 포함되어 있어도 parse해서 숫자만 추출합니다)
  const stats = [
    { number: '259명', label: '활동 멤버' },
    { number: '25개', label: '프로젝트' },
    { number: '58개', label: '스터디' },
    { number: '20회', label: '수상 경험' },
  ];

  return (
    <S.StatsContainer $isMobile={isMobile}>
      {stats.map((stat, index) => {
        //'1,200명' → 숫자 1200, '명' 쪼개기
        const [num, suffix] = parseNumberAndSuffix(stat.number);

        return (
          <S.StatBox
            key={index}
            index={index}
            $isApp={isApp}
            $isMobile={isMobile}
            $isTablet={isTablet}
          >
            {/* CountUp으로 숫자만 애니메이션 (쉼표 없음) */}
            <S.StatNumber $isApp={isApp} $isMobile={isMobile}>
              <CountUp
                to={num}       // 최종 도달 숫자
                from={0}       // 시작 숫자 (필요에 따라 조정)
                duration={1}   // 애니메이션 시간 (초)
              />
              {suffix}
            </S.StatNumber>
            <S.StatLabel $isMobile={isMobile}>{stat.label}</S.StatLabel>
          </S.StatBox>
        );
      })}
    </S.StatsContainer>
  );
};

export default AchievementBox;
