import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(90deg,rgb(61, 145, 87),rgb(31, 31, 31));
    text-align: center;
    

`;

export const Title = styled.div<{$isMobile:boolean;}>`
    font-size: ${({$isMobile}) => ($isMobile ? "11vw" : "64px")};
    color: var(--FarmSystem_Black);
    font-weight: 600;
    margin: 10px auto;
`;

export const SubTitle = styled.div<{$isMobile:boolean;}>`
    font-size: ${({$isMobile}) => ($isMobile ? "8vw" : "36px")};
    color: var(--FarmSystem_LightGrey);
    padding-bottom: 1%;

`;

export const Description = styled.div<{$isMobile:boolean;}>`
    font-size: ${({$isMobile}) => ($isMobile ? "3vw" : "24px")};
    color: var(--FarmSystem_LightGrey);

`;