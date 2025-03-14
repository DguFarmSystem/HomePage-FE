import styled from "styled-components";

export const Container = styled.div`
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

export const Label = styled.label`
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  width: 355px;
`;

export const Input = styled.input`
  width: 320px;
  height: 45px;
  padding: 15px;
  font-size: 16px;
  /* border: 1px solid #ccc; */
  border-radius: 13px;
  text-align: left;
  background-color: #F3F3F4;
  margin-bottom: 25px;
  color: #777777;

  &:focus {
    border: 1px solid #248634;
    outline: none;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`;

export const PasswordInput = styled.input`
  width: 45px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  background-color: #F3F3F4;
  color: #777777;

  &::placeholder {
    color: #999999;
  }


  &:focus {
    border: 1px solid #248634;
    outline: none;
  }
`;

export const InfoContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: left; */
  gap: 5px;
  /* background-color: orange; */
`;

export const InfoStar = styled.p`
  font-size: 12px;
  color: red;
  text-align: center;
`;

export const InfoText = styled.p`
  font-size: 12px;
  color: black;
  /* text-align: center; */
`;

export const Button = styled.button<{ green?: boolean }>`
  width: 160px;
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ green }) => (green ? "white" : "#666")};
  background-color: ${({ green }) => (green ? "#006811" : "#E0E0E0")};
  border-radius: 15px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  margin-top: 30px;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    ${({ disabled }) => disabled ? "" : "opacity: 0.9; transform: scale(1.05);"}
  }
  
  ${({ disabled }) => disabled && `
    background-color: #E0E0E0 !important;
    transform: none !important;
  `}
`;


export const BackTextContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  transition: transform 0.2s ease;
  /* background-color: orange; */

  &:hover {
    transform: scale(1.05);
  }
`;

export const Arrow = styled.img`
  width: 20px;  
  height: 20px;
`;

export const BackText = styled.div`
  font-size: 15px;
  color: #757575;
  font-weight: 500;
  margin-top: 2px;
`;

export const ErrorMessage = styled.p<{ $isMobile: boolean }>`
  width: 300px;
  height: 18px;
  font-size: 12px;
  margin-top: -33px;
  color: red;
`;