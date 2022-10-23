import React from 'react'
import * as S from './Style'
import Git from '../data/git.png'
import Linkedin from '../data/linkedin.png'
import Insta from '../data/insta.png'

const Contacts = () => {
    return(
        <S.MomContainer>
            <S.Heading>Contacts</S.Heading>
            <S.Container>
                <S.InfoContainer>
                    <S.IconContainer>
                        <S.Icon src={Git} alt='GitHub Icon'/>
                    </S.IconContainer>
                    <h3><S.A href='https://github.com/gabrielalcantara0812' target='_blank'>gabrielalcantara0812</S.A></h3>
                </S.InfoContainer>
                <S.InfoContainer>
                    <S.IconContainer>
                        <S.Icon src={Linkedin} alt='GitHub Icon'/>
                    </S.IconContainer>
                    <h3><S.A href='https://www.linkedin.com/in/gabrielalcantara08/' target='_blank'>Gabriel Alcântara</S.A></h3>
                </S.InfoContainer>
                <S.InfoContainer>
                    <S.IconContainer>
                        <S.Icon src={Insta} alt='GitHub Icon'/>
                    </S.IconContainer>
                    <h3><S.A href='https://www.instagram.com/gabriel.alcantara08/' target='_blank'>gabriel.alcantara08</S.A></h3>
                </S.InfoContainer>
            </S.Container>
        </S.MomContainer>
    )
}

export default Contacts