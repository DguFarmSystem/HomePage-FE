import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 50px;
`;

export const Title = styled.h2<{ $isMobile: boolean; }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Label = styled.label<{ $isMobile: boolean; }>`
  font-size: 14px;
  font-weight: bold;
  color: #222;
  align-items: center;
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  min-height: 20px;
  text-align: left;
  padding-left: 5px;
  /* background-color: orange; */
`;

export const Required = styled.span`
  color: red;
  margin-left: 3px;
  display: inline-block;
`;

export const Input = styled.input<{ $isMobile: boolean, $error?: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  height: 45px;
  padding: 12px;
  font-size: 14px;
  border-radius: 13px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  background-color: #FFFFFF;
  transition: border 0.3s ease-in-out;
  margin-top: 5px;
  margin-bottom: 5px;
  /* margin-right: ${({ $isMobile }) => ($isMobile ? "0" : "50px")}; */

  &:focus {
    border: 1px solid ${({ $error }) => ($error ? "red" : "#248634")};
    outline: none;
    background-color: white;
  }
  &::placeholder {
    color: #B0B0B0; 
    opacity: 1; 
  }
`;

export const InfoContainer = styled.label<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubLabel = styled.p<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  font-size: 13px;
  color: #666;
  /* background-color: pink; */
  margin-top: 5px;
  margin-bottom: 12px;
  margin-left: 7px;
`;

export const CheckboxContainer = styled.div<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const CheckboxLabel = styled.label<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #333;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  appearance: none; 
  border: 1px solid #aaa;
  border-radius: 4px;
  background-color: white;
  transition: all 0.2s ease-in-out;

  &:checked {
    background-color: #006811; /* 체크된 배경색 */
    border-color: #006811; /* 체크된 테두리 */
  }

  &:checked::before {
    content: "✓";
    display: flex;
    justify-content: center;
    /* align-items: center; */
    color: white !important;
    font-weight: 700;
    /* margin-top: -1; */
    font-size: 13px;
  }
`;

export const Textarea = styled.textarea<{ $isMobile: boolean; $error?: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  min-height: 120px;
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  background-color: #FFFFFF;
  resize: none;
  transition: border 0.3s ease-in-out;
  margin-top: -10px;
  margin-bottom: 8px;

  &:focus {
    border: 1px solid #248634;
    outline: none;
    background-color: white;
  }

  &::placeholder {
    color: #B0B0B0; 
    opacity: 1; 
  }
`;

export const Box = styled.div`
  height: 20px;
`;

export const ErrorMessage = styled.p<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  height: 20px;
  font-size: 12px;
  color: red;
`;


export const AgreeContainer = styled.div<{ $isMobile: boolean }>`
    width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
    max-width: 500px;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const AgreeText = styled.p`
  font-size: 14px;
  color: #333;
`;

export const ButtonContainer = styled.div<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  /* gap: -10px; */
`;

export const Button = styled.button<{ $isMobile: boolean; gray?: boolean; green?: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "100px" : "150px")};
  padding: 12px;
  font-size: ${({ $isMobile }) => ($isMobile ? "13px" : "16px")};
  font-weight: 600;
  color: ${({ green }) => (green ? "white" : "#006811")};
  background-color: ${({ green, gray }) => (green ? "#006811" : gray ? "#C1ECC1" : "#FFF")};
  border-radius: 12px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: transform 0.2s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }
`;

export const SelectContainer = styled.div<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "300px" : "550px")};
  position: relative;
`;

export const SelectButton = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;

  &:hover {
    border-color: #4CAF50;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const Option = styled.div`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #4CAF50; 
    color: white;
  }
`;


export const QuestionContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;