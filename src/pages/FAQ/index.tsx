import React, { useState } from 'react';
import Frame from './Frame';
import Question from './Question';
import * as S from './index.styled';
import { questions } from './questions';

interface QuestionType {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('공통');

  return (
    <S.FAQContainer>
      <S.Title>자주 묻는 질문</S.Title>
      <S.ContentWrapper>
        <Frame onSelectCategory={setSelectedCategory} />
        <S.QuestionWrapper>
          {questions[selectedCategory].map((q: QuestionType, index: number) => (
            <Question key={index} question={q.question} answer={q.answer} />
          ))}
        </S.QuestionWrapper>
      </S.ContentWrapper>
    </S.FAQContainer>
  );
};

export default FAQ;