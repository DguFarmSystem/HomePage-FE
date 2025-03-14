import styled from 'styled-components';

export const FAQContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #fcfcfc;
  overflow-y: auto;
  text-align: center;
  color: #28723f;
`;

export const Title = styled.b<{ $isApp: boolean; $isMobile: boolean; $isTablet: boolean }>`
  font-weight: 700;
  display: block;
  margin-top: 170px;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? '20px' : '50px')};
  font-size: ${({ $isMobile }) => ($isMobile ? '30px' : '40px')};
  letter-spacing: -0.24px;
  line-height: 20px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  text-align: left;
  font-size: 24px;
  color: #ff7f1e;
`;
