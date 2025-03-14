import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 160vh;
    background: linear-gradient(90deg, #102C19, #194326);
    color: white;
    text-align: center;
    padding: 0 20px;
`;

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 800px;
    margin-top: 50px;
`;

export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 450px;
    margin-bottom: 10vh;
    border-radius: 20px;
    padding: 25px;
`;

export const BottomSectionTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: rgb(245, 245, 245); 
    text-align: center;
    margin-bottom: 50px;
`;

export const BottomSectionDescription = styled.p`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 1.6;
    color: #102C19; 
    max-width: 600px;
    margin-bottom: 8px;
`;

export const IntroPhrase = styled.p`
    color: rgb(245, 245, 245);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const AppApplyButton = styled.div<{ isRecruit: boolean }>`
    width: 110px;
    height: 35px;
    background-color: ${({ isRecruit }) => (isRecruit
        ? "#28723F" : "var(--FarmSystem_DarkGrey, #999999)"
    )};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: white;
    font-size: 13px;
    font-weight: 500;
    margin-top: 20px;
`;

export const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: ${({ $isMobile, $isTablet }) => ($isMobile ? "600px" : $isTablet ? "700px" : "800px")};
    background: linear-gradient(90deg, var(--FarmSystem_Green01), #194326);
    padding: ${({ $isMobile }) => ($isMobile ? "0px" : "50px")};
    padding-top: 120px;
    padding-top: 100px;
    color: white;
`;

export const Logo = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
    display: flex;
    align-items: center;
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "40px" : $isTablet ? "50px" : "64px")};
    font-weight: 800;
    margin-bottom: 20px;
    margin-left: 50px;
    img {
        width: ${({ $isMobile, $isTablet }) => ($isMobile ? "100px" : $isTablet ? "140px" : "180px")};
        height: auto;
    }
`;

export const IntroDescription = styled.p`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    color: white;
`;

export const Description = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "20px" : "24px")};
    line-height: 1.5;
    max-width: 600px;
    margin-bottom: 20px;
    margin-left: 50px;
`;

export const TopBox = styled.div<{ $isMobile: boolean }>`
    position: absolute;
    left: 30px;
    top: ${({ $isMobile }) => ($isMobile ? "10px" : "50px")};
    display: flex;
    flex-direction: column;
`

export const TrackList = styled.p<{ $isMobile: boolean; $isTablet: boolean}>`
    a {    
        font-weight: 600;
    }
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "15px" : $isTablet ? "20px" : "24px")};
    line-height: 1.5;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
    
`;

export const WebviewBox = styled.div<{ $isMobile: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;

    width: 100%;

    /* min-height: 400px; */
    height: ${({ $isMobile }) => ($isMobile ? "350px":"400px")};

    background-color: rgba(229, 229, 229, 0.3); 

    border-radius: 20px;
    padding: 25px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
`;

export const ApplyBox = styled.div`
    display: flex;
    flex-direction: row;  
    align-items: center;
    justify-content: flex-end; 
    width: 100%; 
    padding: 10px 20px; 
    position: absolute;
    right: 30px;
    bottom: 10px;
`;


export const Apply = styled.div`
    display: colunm;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
    /* background-color: orange; */
    
`;

export const ApplyButton = styled.button<{ 
    $isMobile: boolean, 
    $isTablet: boolean, 
    isRecruit: boolean 
}>`
    background-color: ${({ isRecruit }) => (isRecruit
        ? "#4CAF50" : "var(--FarmSystem_DarkGrey, #999999)"
    )};
    color: white;
    border: none;
    padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "10px 50px" : $isTablet ? "12px 65px" : "15px 80px")};
    border-radius: 10px;
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "18px" : $isTablet ? "22px" : "24px")};
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    
    &:hover {
        background-color:${({ isRecruit }) => (isRecruit
            ? "#388E3C" : "var(--FarmSystem_DarkGrey, #999999)"
        )};
    }
`;

export const ApplyDescription = styled.div<{ $isMobile: boolean }>`
    font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
    margin-top: 15px;
    color: #E8F5E9;
    text-align: center;

`;

export const Bud = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "40px" : $isTablet ? "50px" : "64px")};
    margin-left: ${({ $isMobile, $isTablet }) => ($isMobile ? "30px" : $isTablet ? "40px" : "50px")};
    top: 116px;
    `;