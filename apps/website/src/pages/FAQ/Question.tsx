import React from 'react';
import * as S from './Question.styled';
import useMediaQueries from '@/hooks/useMediaQueries';

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const { isTablet, isMobile, isApp } = useMediaQueries();

  return (
    <S.FrameGroup $isMobile={isMobile} $isTablet={isTablet} $isApp={isApp}>
      <S.QParent>
        <S.Q $isApp={isApp}>Q</S.Q>
        <S.FarmSystem>{question}</S.FarmSystem>
      </S.QParent>
      <S.GradientLine />
      <S.AParent>
        <S.A>A</S.A>
        <S.FarmContainer>
          {answer.split('\n').map((line, index) => (
            <S.P key={index}>{line}</S.P>
          ))}
        </S.FarmContainer>
      </S.AParent>
    </S.FrameGroup>
  );
};

export default Question;