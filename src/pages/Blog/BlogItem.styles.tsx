import styled from 'styled-components';

// 스타일 컴포넌트 (블로그랑 같지만, 다를 수 있으니께)
// 요긴 대충 짜서 해결
export const Card = styled.a`
  width: 300px;
  height: 335px;

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: var(--FarmSystem_Black);
  text-decoration: none; // 링크 밑줄 제거 등
`;

export const Image = styled.div`
  width: 100%;

  overflow: hidden;
  border-radius: 8px;
  height: 200px;
  background-color: var(--FarmSystem_LightGrey);

  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
`;

export const Content = styled.div`
  padding: 0px;
`;

export const Title = styled.h3`
   margin: 0px;
   font-size: 24px;
   font-weight: 700;

`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-weight: 300;
`;

export const TagContainer = styled.div`
   margin-top: 10px;
   display: flex;
   gap: 10px;
`;

export const Tag = styled.span`
   background-color: var(--FarmSystem_Green06);
   color: var(--FarmSystem_White);

   padding: 5px 10px;
   border-radius: 15px;
   font-size: 14px;

   font-weight: 300;
   line-height: 1.2;
`;