import React from 'react';
import * as S from './Question.styled';

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  return (
    <S.FrameGroup>
      <S.QParent>
        <S.Q>Q</S.Q>
        <S.FarmSystem>{question}</S.FarmSystem>
      </S.QParent>
      <S.GradientLine />
      <S.AParent>
        <S.Q>A</S.Q>
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