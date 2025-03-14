import * as S from './Footer.styled';
import GitHubIcon from '../../assets/Github_white.png';
import InstagramIcon from '../../assets/instagram_white.png';
import LinktreeIcon from '../../assets/Linktree_white.png';
import DGUIcon from "../../assets/DGU.png";
import Logo from '@/assets/Icons/FarmLogo_green.svg';

import useMediaQueries from '@/hooks/useMediaQueries';


export function Footer(){
    const { isMobile, isTablet } = useMediaQueries();
    return(
        <S.FooterContainer $isMobile={isMobile}>
            <S.FooterContent $isMobile={isMobile}>
                <S.FooterText >
                    <S.FooterTitle $isMobile={isMobile}>
                        <S.Logo $isMobile={isMobile} src={Logo} alt="logo"/>
                        Farm System
                    </S.FooterTitle>
                    <S.FooterDescription $isMobile={isMobile}>
                        미래를 준비하고 성장하는 여정, Farm System에서 함께하세요.
                    </S.FooterDescription>
                </S.FooterText>

                <S.IconsContainer $isMobile={isMobile} $isTablet={isTablet}>
                    <S.IconLink href="https://github.com/DguFarmSystem" target="_blank" rel="noopener noreferrer" $isMobile={isMobile}>
                        <S.Icon $isMobile={isMobile} src={GitHubIcon} alt="GitHub"/>
                    </S.IconLink>
                    <S.IconLink href="https://www.instagram.com/dgu_farm_system/" target="_blank" rel="noopener noreferrer" $isMobile={isMobile}>
                        <S.Icon $isMobile={isMobile} src={InstagramIcon} alt="Instagram" />
                    </S.IconLink>
                    <S.IconLink href="https://linktr.ee/dgu_farm_system" target="_blank" rel="noopener noreferrer" $isMobile={isMobile}>
                        <S.Icon $isMobile={isMobile} src={LinktreeIcon} alt="Linktree" />
                    </S.IconLink>
                    <S.IconLink href="https://dice.dongguk.edu/mainPage.do" target="_blank" rel="noopener noreferrer" $isMobile={isMobile}>
                        <S.Icon $isMobile={isMobile} src={DGUIcon} alt="Community" />
                    </S.IconLink>
                </S.IconsContainer>
            </S.FooterContent>
        </S.FooterContainer>

    );
};