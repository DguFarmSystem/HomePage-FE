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
    flex: 1;
    margin-top: 5vh;
`;

export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-bottom: 15vh;

    background-color: rgba(229, 229, 229, 0.3); 

    border-radius: 20px;
    padding: 25px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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

export const AppApplyButton = styled.div`
    width: 110px;
    height: 35px;
    background-color: #28723F;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: white;
    font-size: 13px;
    font-weight: 500;
    margin-top: 20px;
`;

export const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean; $isApp: boolean, $isIpadPro: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: ${({ $isMobile, $isTablet}) => 
        $isMobile ? "80vh" : $isTablet ? "120vh" : "130vh"};

    background: ${({ $isMobile, $isTablet, $isApp }) => (
        $isApp ? "linear-gradient(90deg, #102C19, #194326)" :
        $isMobile ? "linear-gradient(90deg, #102C19, #28723F)" :
        $isTablet ? "linear-gradient(90deg, #102C19, #28723F)" :
        "linear-gradient(90deg, #102C19, #28723F)"
    )};

    padding: ${({ $isMobile }) => ($isMobile ? "0px" : "50px")};
    color: white;
`;


export const Logo = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
    display: flex;
    align-items: center;
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "19px" : $isTablet ? "27px" : "35px")};
    img {
        width: ${({ $isMobile, $isTablet }) => ($isMobile ? "100px" : $isTablet ? "200px" : "250px")};
        height: auto;
    }
`;

export const Description = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "20px" : "30px")};
    line-height: 1.5;
    max-width: 600px;
    margin-bottom: 20px;
    margin-left: 30px;
    font-weight: 600;
`;

export const TrackList = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
    font-size: ${({ $isMobile, $isTablet}) => ($isMobile ? "15px": $isTablet ? "15px" : "20px")};
    text-align: ${({ $isMobile }) => ($isMobile ? "center":"left")};
    color: rgb(245, 245, 245); 
    max-width: 600px;
    margin-top: 15px;
    line-height: 1.8;
    margin-left: ${({ $isMobile }) => ($isMobile ? "0" : "30px")};
    margin-bottom: ${({ $isMobile }) => ($isMobile ? "20px":"0")};

`;

export const WebviewBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;

    width: 100%;

    min-height: 400px;
    height: auto;

    background-color: rgba(229, 229, 229, 0.3); 

    border-radius: 20px;
    padding: 25px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ApplyBox = styled.div`
    display: flex;
    flex-direction: row;  
    align-items: center;
    justify-content: flex-end; 
    width: 100%; 
    padding: 10px 20px; 
`;


export const Apply = styled.div`
    display: colunm;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
`;

export const ApplyButton = styled.button<{ $isMobile: boolean; $isTablet: boolean }>`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "10px 50px" : $isTablet ? "12px 65px" : "15px 65px")};
    border-radius: 10px;
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "18px" : $isTablet ? "22px" : "24px")};
    margin-top: ${({ $isMobile }) => ($isMobile ? "50px":"20px")};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    
    &:hover {
        background-color: #388E3C;
    }
`;

export const ApplyDescription = styled.div`
    font-size: 16px;
    margin-top: 15px;
    color: #E8F5E9;
    text-align: center;

`;


