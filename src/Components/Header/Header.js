import React, {useState} from 'react'
import * as S from './Style'

const Header = () => {

    const [open, setOpen] = useState(false)

    const Mobile = () => {
        return(
            <S.NavigationMobile>
                <S.ContainerMobile>
                    <li><S.LINK to='/'>HOME</S.LINK></li>
                    <li><S.LINK to='/about'>ABOUT</S.LINK></li>
                    <li><S.LINK to='/works'>WORKS</S.LINK></li>
                    <li><S.LINK to='/onu'>ONU</S.LINK></li>
                </S.ContainerMobile>
            </S.NavigationMobile>
        )
    }

    return(
        <S.MomContainer>
            <S.Heading>Gabriel Alcântara</S.Heading>
            <S.Navigation>
                <S.Container>
                    <S.LinkContainer><S.LINK to='/'>HOME</S.LINK></S.LinkContainer>
                    <S.LinkContainer><S.LINK to='/about'>ABOUT</S.LINK></S.LinkContainer>
                    <S.LinkContainer><S.LINK to='/works'>WORKS</S.LINK></S.LinkContainer>
                    <S.LinkContainer><S.LINK to='/onu'>ONU</S.LINK></S.LinkContainer>
                </S.Container>
            </S.Navigation>
            <S.MobileMenu onClick={()=>{setOpen(!open)}}>{open === true ? 'X' : '☰'}</S.MobileMenu>
            {open && Mobile()}
        </S.MomContainer>
    )
}

export default Header